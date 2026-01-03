import { notFound } from "next/navigation";
import { writings } from "@/app/data/writings";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WritingDetailPage({ params }: Props) {
  const { slug } = await params;

  const writing = writings.find((w) => w.slug === slug);
  if (!writing) notFound();

  let MDXContent: React.ComponentType;

  try {
    MDXContent = (await import(`@/content/writing/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 pt-24 pb-32">
      <div className="text-sm text-neutral-500 mb-4">
        {new Date(writing.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      <h1 className="text-4xl font-semibold mb-10">
        {writing.title}
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <MDXContent />
      </div>
    </article>
  );
}
