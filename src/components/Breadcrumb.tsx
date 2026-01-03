import Link from "next/link";

type Props = {
  tag?: string | null;
  projectTitle?: string | null;
};

export default function Breadcrumb({ tag, projectTitle }: Props) {
  return (
    <nav className="text-sm text-neutral-600 mb-6">
      <Link href="/projects" className="hover:underline">
        Projects
      </Link>

      {tag && (
        <>
          {" "}→{" "}
          <Link
            href={`/projects?tag=${encodeURIComponent(tag)}`}
            className="hover:underline"
          >
            Tag: {tag}
          </Link>
        </>
      )}

      {projectTitle && (
        <>
          {" "}→{" "}
          <span className="text-neutral-900">{projectTitle}</span>
        </>
      )}
    </nav>
  );
}
