import KeywordOrbitGraph from "@/components/KeywordOrbitGraph"
import PaperEntry from "@/components/PaperEntry"
import { papers } from "@/app/data/papers"

export default function LiteraturePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-24 pb-32">
      {/* 页面标题 */}
      <h1 className="text-4xl font-semibold mb-6">
      Literature Map
      </h1>

      {/* 页面说明 */}
      <div className=" text-neutral-700 dark:text-neutral-300 mb-10 space-y-3 leading-6">
  <p>
    In the rapidly evolving AI landscape, staying at the forefront of research
    is essential. I developed this force-directed interactive map to synthesize
    scattered reading notes into a structured, evolving knowledge system.
  </p>

  <p>
    It captures the latest papers I’ve read along with my personal takeaways.
    By visualizing the collisions and overlaps of keywords, this map reveals
    hidden correlations between diverse research areas, such as the intersection
    of Large Language Models and AI Governance. Each node represents a single
    keyword that I found intriguing during my readings.
  </p>

  <p className="mt-4 text-xs italic text-neutral-400">
  Tip: Hover over a keyword node to discover the specific papers associated with that theme.
</p>
</div>


      


      {/* 关键词可视化 */}
      <KeywordOrbitGraph />

      <section className="mt-20 space-y-16">
      {papers.map(p => (
        <PaperEntry key={p.doi} paper={p} />
      ))}
    </section>
    </main>
  )
}
