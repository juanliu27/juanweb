import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import Tag from "@/components/Tag";

// ✅ 这段是对的，保留
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

// ✅ 关键修改：不再 async，不再 Promise
export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-24 space-y-10">
      <header>
        <h1 className="text-4xl font-semibold mb-4">{project.title}</h1>
        <p className="text-lg text-neutral-600">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </header>

      <section>
        <h2 className="text-xl font-medium mb-2">Project Snapshot</h2>
        <ul className="text-neutral-700 space-y-1">
          <li>
            <strong>Timeframe:</strong> {project.timeframe}
          </li>
          <li>
            <strong>Category:</strong> {project.category.join(", ")}
          </li>
          <li>
            <strong>Role:</strong> {project.role}
          </li>
        </ul>
      </section>

      <section className="space-y-6 leading-relaxed text-neutral-800">
        <h2 className="text-xl font-medium">Project Description</h2>
        <ul className="text-neutral-700 space-y-1">
          <li>{project.description}</li>
        </ul>
      </section>
    </section>
  );
}
