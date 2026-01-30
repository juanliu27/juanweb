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
    const tooltip = d3
        .select("body")
        .append("div")
        .attr("id", "keyword-tooltip")       // 👈 必须是 fixed
        .style("left", "0px")            // 👈 初始化
        .style("top", "0px")
        .style("position", "fixed")   
        .style("z-index", "99999")    
        .style("background", "rgba(255,255,255,0.95)")   
        .style("border", "1px solid #e5e7eb")
        .style("color", "#111827")
        .style("padding", "10px 12px")
        .style("border-radius", "8px")
        .style("pointer-events", "none")
        .style("box-shadow", "0 4px 12px rgba(0,0,0,0.08)")
        .style("opacity", 0)


    // =========================
    // 1. 数据转化（你的人类数据 → 可视化数据）
    // =========================
    const { nodes, links } = buildKeywordNetwork(papers)

    // =========================
    // 2. SVG 初始化
    // =========================
    const svg = d3
      .select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", "w-full h-full")

    svg.selectAll("*").remove()

    // =========================
    // 3. Force Simulation
    // =========================
    const simulation = d3
      .forceSimulation<KeywordNode>(nodes)
      .force(
        "link",
        d3
          .forceLink<KeywordNode, KeywordLink>(links)
          .id((d) => d.id)
          .distance(90)
          .strength((d) => 0.2 + d.weight * 0.15)
      )
      .force("charge", d3.forceManyBody<KeywordNode>().strength(-140))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3
          .forceCollide<KeywordNode>()
          .radius((d) => 10 + d.papers.length * 3)
      )

    // =========================
    // 4. 关键词节点（一个 keyword 一个点）
    // =========================
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => 5 + Math.sqrt(d.papers.length) * 6)
      .attr("fill", "#7dd3fc")
      .attr("opacity", 0.85)

    // =========================
    // 5. 关键词文字
    // =========================
    const label = svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text((d) => d.label)
      .attr("font-size", "11px")
      .attr("fill", "#0369a1")
      .attr("text-anchor", "middle")
      .attr("dy", -12)
      .style("pointer-events", "none")

    // =========================
    // 6. Hover：共享论文高亮
    // =========================
    node
        .on("mouseenter", function (event, d) {

            d3.select(this)
            .attr("stroke", "#0369a1")
            .attr("stroke-width", 2)

            node.attr("opacity", (n) =>
            sharesPaper(d, n) ? 0.9 : 0.1
            )
            label.attr("opacity", (n) =>
            sharesPaper(d, n) ? 1 : 0.1
            )

            const svgRect = ref.current!.getBoundingClientRect()

            const left = svgRect.left + (d.x ?? 0) + 70
            const top  = svgRect.top  + (d.y ?? 0) + 30

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
                    .join("")}
                </ul>
              `)
            .style("left", `${left}px`)
            .style("top", `${top}px`)
            .transition()
            .duration(150)
            .style("opacity", 1)
        })

        .on("mouseleave", function () {
            d3.select(this).attr("stroke", "none")

            node.attr("opacity", 0.85)
            label.attr("opacity", 1)

            tooltip
            .transition()
            .duration(150)
            .style("opacity", 0)
        })


    // =========================
    // 7. Tick：位置更新
    // =========================
    simulation.on("tick", () => {
      node
        .attr("cx", (d) => d.x ?? 0)
        .attr("cy", (d) => d.y ?? 0)

      label
        .attr("x", (d) => d.x ?? 0)
        .attr("y", (d) => d.y ?? 0)
    })

    // =========================
    // 8. Cleanup（⚠️ 这是必须的）
    // =========================
    return () => {
      simulation.stop()
      tooltip.remove()
    }
  }, [])

  return (
    <div className="w-full h-[560px] rounded-xl bg-neutral-50 dark:bg-neutral-900">
      <svg ref={ref} />
    </div>
  )
}

/**
 * 判断两个 keyword 是否至少共享一篇论文
 */
function sharesPaper(a: KeywordNode, b: KeywordNode) {
  if (a === b) return true
  const set = new Set(a.papers.map((p) => p.doi))
  return b.papers.some((p) => set.has(p.doi))
}
