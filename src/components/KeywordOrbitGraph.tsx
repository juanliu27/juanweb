"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

import { papers } from "@/app/data/papers"
import {
  buildKeywordNetwork,
  KeywordNode,
  KeywordLink,
} from "@/utils/buildKeywordNetwork"

export default function KeywordOrbitGraph() {
  const ref = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const width = 900
    const height = 560
    
    // 1. Tooltip 初始化 (保持原样)
    const tooltip = d3
        .select("body")
        .append("div")
        .attr("id", "keyword-tooltip")
        .style("position", "fixed")   
        .style("z-index", "99999")    
        .style("background", "rgba(255,255,255,0.95)")   
        .style("border", "1px solid #e5e7eb")
        .style("padding", "10px 12px")
        .style("border-radius", "12px")
        .style("pointer-events", "none")
        .style("box-shadow", "0 10px 25px rgba(0,0,0,0.1)")
        .style("opacity", 0)

    const { nodes, links } = buildKeywordNetwork(papers)

    const svg = d3
      .select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", "w-full h-full cursor-grab active:cursor-grabbing")

    svg.selectAll("*").remove()

    // 核心改动：增加一个容器层，所有的缩放平移都作用在这个 g 上
    const container = svg.append("g")

    // =========================
    // 2. 缩放逻辑 (Zoom)
    // =========================
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 5]) // 缩放倍数范围
      .on("zoom", (event) => {
        container.attr("transform", event.transform)
      })

    svg.call(zoom)

    // =========================
    // 3. Force Simulation
    // =========================
    const simulation = d3
      .forceSimulation<KeywordNode>(nodes)
      .force("link", d3.forceLink<KeywordNode, KeywordLink>(links).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody<KeywordNode>().strength(-200)) // 稍微增强排斥力，防止重叠
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide<KeywordNode>().radius(d => 15 + d.papers.length * 3))

    // =========================
    // 4. 拖拽逻辑 (Drag)
    // =========================
    function drag(simulation: d3.Simulation<KeywordNode, undefined>) {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        event.subject.fx = event.subject.x
        event.subject.fy = event.subject.y
      }

      function dragged(event: any) {
        event.subject.fx = event.x
        event.subject.fy = event.y
      }

      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0)
        event.subject.fx = null
        event.subject.fy = null
      }

      return d3.drag<any, any>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    }

    // =========================
    // 5. 渲染元素 (挂载到 container 上)
    // =========================
    const node = container
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => 6 + Math.sqrt(d.papers.length) * 6)
      .attr("fill", "#7dd3fc")
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .attr("opacity", 0.9)
      .style("cursor", "pointer")
      .call(drag(simulation) as any) // 绑定拖拽

    const label = container
      .append("g")
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text((d) => d.label)
      .attr("font-size", "12px")
      .attr("font-weight", "500")
      .attr("fill", "#0369a1")
      .attr("text-anchor", "middle")
      .attr("dy", -15)
      .style("pointer-events", "none")

    // =========================
    // 6. Hover：位置计算更新 (因为有了 Zoom，坐标需要转换)
    // =========================
    node
      .on("mouseenter", function (event, d) {
        d3.select(this).transition().duration(200).attr("r", (d:any) => 8 + Math.sqrt(d.papers.length) * 6).attr("fill", "#0ea5e9")
        
        node.attr("opacity", (n) => sharesPaper(d, n) ? 1 : 0.15)
        label.attr("opacity", (n) => sharesPaper(d, n) ? 1 : 0.1)

        tooltip.html(`
          <div style="
            font-size:17px;
            font-weight:600;
            margin-bottom:6px;
            color:#111827;
          ">
            ${d.label}
          </div>
        
          <div style="
            font-size:12px;
            color:#6b7280;
            margin-bottom:6px;
          ">
            Appears in (${d.papers.length} paper${d.papers.length > 1 ? "s" : ""})
          </div>
        
          <ul style="
            padding-left:16px;
            margin:0;
            font-size:14px;
            color:#111827;
          ">
            ${d.papers
              .map(
                (p) => `
                  <li style="margin-bottom:3px; line-height:1.2;">
                    ${p.title}
                  </li>
                `
              )
              .join(";")}
          </ul>
        `)
        .style("opacity", 1)
      })
      .on("mousemove", function(event) {
        // Tooltip 跟随鼠标
        tooltip
          .style("left", `${event.clientX + 20}px`)
          .style("top", `${event.clientY + 20}px`)
      })
      .on("mouseleave", function () {
        d3.select(this).transition().duration(200).attr("r", (d:any) => 6 + Math.sqrt(d.papers.length) * 6).attr("fill", "#7dd3fc")
        node.attr("opacity", 0.9)
        label.attr("opacity", 1)
        tooltip.style("opacity", 0)
      })

    simulation.on("tick", () => {
      node.attr("cx", d => d.x!).attr("cy", d => d.y!)
      label.attr("x", d => d.x!).attr("y", d => d.y!)
    })

    return () => {
      simulation.stop()
      tooltip.remove()
    }
  }, [])

  return (
    <div className="w-full h-[560px] relative overflow-hidden bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md rounded-3xl border border-white/20">
      <svg ref={ref} className="w-full h-full" />
    </div>
  )
}

function sharesPaper(a: KeywordNode, b: KeywordNode) {
  if (a === b) return true
  const set = new Set(a.papers.map((p) => p.doi))
  return b.papers.some((p) => set.has(p.doi))
}