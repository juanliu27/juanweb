import { projects } from "@/app/data/projects";
import ProjectCard from "@/components/ProjectCard";
import TagPanel from "@/components/TagPanel";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
      <Breadcrumb tag={null} />

      <div className="flex gap-10 mt-6">
        <main className="flex-1">
          <h1 className="text-4xl font-semibold mb-4">Projects</h1>

          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                activeTag={null}
              />
            ))}
          </div>
        </main>

        <TagPanel activeTag={null} />

      </div>
    </section>
  );
}
