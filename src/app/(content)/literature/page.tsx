import KeywordOrbitGraph from "@/components/KeywordOrbitGraph"
import PaperEntry from "@/components/PaperEntry"
import { papers } from "@/app/data/papers"

export default function LiteraturePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-20 pb-28">
      <h1 className="text-4xl font-semibold mb-8 tracking-tight">Literature Map</h1>
      
      {/* 顶部介绍区：增加毛玻璃底色保护文字 */}
      <section className="mb-12 relative">
        <div className="bg-white/40 dark:bg-black/20 backdrop-blur-xl p-8 md:p-7 rounded-[16px] border border-white/30 dark:border-white/10 shadow-sm">
    
          <div className="text-[16px] text-neutral-800 dark:text-neutral-200 space-y-4 leading-relaxed">
            <p>
              In the rapidly evolving AI landscape, staying at the forefront of research
              is essential. I developed this force-directed interactive map to synthesize
              scattered reading notes into a structured, evolving knowledge system.
            </p>

            <p>
              It captures the latest papers I’ve read along with my personal takeaways.
              By visualizing the collisions and overlaps of keywords, this map reveals
              hidden correlations between diverse research areas, such as the intersection
              of Large Language Models and AI Governance.
            </p>

            <div className="pt-2 flex items-center gap-2 text-sm italic text-teal-600 dark:text-teal-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Tip: Hover over a keyword node to discover the specific papers associated with that theme.
            </div>
          </div>
        </div>
      </section>

      {/* 关键词可视化：给 Graph 增加一个精致的容器 */}
      <section className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-[40px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-white/60 dark:bg-neutral-900/60 backdrop-blur-2xl rounded-[40px] border border-white/50 dark:border-white/10 shadow-2xl overflow-hidden aspect-video md:aspect-[21/9]">
          <KeywordOrbitGraph />
        </div>
      </section>

      {/* 文献列表区：增加间距和视觉引导 */}
      <section className="mt-14 space-y-12">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white shrink-0">Selected Readings</h2>
          <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800" />
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {papers.map(p => (
            <div key={p.doi} className="transition-transform duration-300 hover:scale-[1.01]">
              <PaperEntry paper={p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}