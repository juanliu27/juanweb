import Link from "next/link";
import { Project } from "@/app/data/projects";

export default function ProjectCard({
  project,
  activeTag,
}: {
  project: Project;
  activeTag?: string | null;
}) {
  const href = activeTag
    ? `/projects/${project.slug}?tag=${encodeURIComponent(activeTag)}`
    : `/projects/${project.slug}`;

  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-xl font-medium mb-2">
        {project.title}
      </h2>
      <p className="text-neutral-600 mb-4">
        {project.subtitle}
      </p>

      <Link href={href} className="text-sm underline">
        View Project →
      </Link>
    </div>
  );
}
