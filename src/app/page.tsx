import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="text-center px-6">
        <h1 className="
    text-7xl md:text-7xl
    font-alice font-semibold
    font-medium
    leading-tight
    tracking-wide text-[#701615]
  ">
          Data Science｜Sociology｜AI Ethics
        </h1>
        <p className="mt-4 text-5xl 
    font-alice text-[#701615] opacity-45">
          Jingyuan Liu (Juan)
        </p>

        <Link
          href="/home"
          className="mt-10 inline-block text-[#701615] opacity-90 font-semibold
    font-alice rounded-xl px-6 py-3 text-3xl border dark:border-neutral-700 hover:bg-sky-200/40 dark:hover:bg-sky-200/40 transition"
        >
         Not the Entrance
        </Link>
      </div>
    </section>
  );
}