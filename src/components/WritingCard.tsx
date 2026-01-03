import Link from "next/link";
import Image from "next/image";

type WritingCardProps = {
  slug?: string;
  title: string;
  excerpt: string;
  date?: string;
  tag?: string;
  cover?: string;
  locked?: boolean;
};

export default function WritingCard({
  slug,
  title,
  excerpt,
  date,
  tag,
  cover,
  locked,
}: WritingCardProps) {
  const content = (
    <div
      className={`rounded-xl overflow-hidden border border-neutral-300 hover:shadow-md transition`}
    >
      {/* 🖼️ 封面图 */}
      {cover && (
        <div className="relative w-full h-40">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-5">
        {/* meta 行：时间 · tag · lock */}
        {(date || tag || locked) && (
          <div className="text-xs text-neutral-500 mb-2 flex items-center gap-2">
            {date && (
              <span>
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
            )}

            {tag && <span>· {tag}</span>}

            {locked && <span>· 🔒 ·</span>}
          </div>
        )}

        {/* 标题 */}
        <h2 className="text-lg font-medium leading-snug mb-2">
          {title}
        </h2>

        {/* 概括 */}
        <p className="text-sm text-neutral-600">
          {excerpt}
        </p>
      </div>
    </div>
  );

  // 🔒 被锁 or 没 slug → 不可点
  if (locked || !slug) return content;

  return (
    <Link href={`/writing/${slug}`} className="block h-full">
      {content}
    </Link>
  );
}
