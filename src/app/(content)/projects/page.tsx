import { projects } from "@/app/data/projects";
import ProjectCard from "@/components/ProjectCard";
import TagPanel from "@/components/TagPanel";
import Breadcrumb from "@/components/Breadcrumb";

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const activeTag = tag ?? null;

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
      <Breadcrumb tag={activeTag} />

      <div className="flex gap-10 mt-6">
        <main className="flex-1">
          <h1 className="text-4xl font-semibold mb-4">Projects</h1>

          {activeTag && (
            <p className="text-sm text-neutral-500 mb-6">
              Showing projects tagged with{" "}
              <strong>{activeTag}</strong>
            </p>
          )}

          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                activeTag={activeTag}
              />
            ))}
          </div>
        </main>

        <TagPanel />
      </div>
    </section>
  );
}
