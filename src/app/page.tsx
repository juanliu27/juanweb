import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Data Science × Sociology｜AI Ethics
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-[var(--foreground)]">
          用数据与社会科学方法研究平台治理、隐私与生成式AI。
        </p>

        <Link
          href="/home"
          className="mt-10 inline-block rounded-xl px-6 py-3 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
        >
          Not The Entrance
        </Link>
      </div>
    </section>
  );
}