// app/(content)/arts/page.tsx
import ArtMap from "@/components/ArtMap";

export default function ArtsPage() {
  return (
    <section className="w-full">
      <div className="max-w-3xl px-6 py-12">
        <h1 className="text-2xl font-medium">Traces</h1>
        <p className="mt-2 text-sm text-neutral-500">
          The world is an open book.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <ArtMap />
      </div>
    </section>
  );
}
