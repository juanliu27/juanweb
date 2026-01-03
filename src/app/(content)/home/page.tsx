import ProjectCard from "@/components/ProjectCard";
import WritingCard from "@/components/WritingCard";
import { projects } from "@/app/data/projects";
import { writings } from "@/app/data/writings";
import TarotDraw from "@/components/TarotDraw";


export default function RealHome() {
  const researchProjects = projects
    .slice(0, 2);

  // Writing
  const recentWritings = writings
    .slice(0, 2);

  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-24 min-h-screen">
      <div className="flex gap-8">
        
        {/* 中间主要内容 */}
        <main className="flex-1">
          <h1 className="text-2xl font-semibold mb-2">Latest</h1>
          <p className="mb-8 text-neutral-600 dark:text-body">
            Selected recent work & ongoing explorations.
          </p>
          
          {/* Recent Writing */}
          <section>
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wide opacity-70">
              Recent Writing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentWritings.map((writing) => (
                <WritingCard
                  key={writing.slug}
                  title={writing.title}
                  date={writing.date}
                  excerpt={writing.excerpt}
                  slug={writing.slug}
                  tag={writing.tag}
                  cover={writing.cover}
                />
              ))}
            </div>
          </section>
          <br />
          {/* Research */}
          <section className="mb-12">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wide opacity-70">
              Research
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {researchProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ))}
            </div>
          </section>

        </main>

        {/* 右侧 Tarot */}
        <aside className="hidden lg:block w-[320px] items-center">
        <div className="flex flex-col gap-4">


    <div className="text-sm opacity-70">Click on the image to draw a Tarot for you.
      <br />
      A small ritual for uncertainty. </div>

    {/* 上方视频 */}
    <video
      src="/tarot/skeleton-golden-dance.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full rounded-md object-cover"
    />

    {/* 中间长图 */}
    <TarotDraw />

  </div>
</aside>

      </div>
    </section>
  );
}
