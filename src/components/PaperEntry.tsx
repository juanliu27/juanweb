import React from "react"
import Link from "next/link"
import type { papers } from "@/app/data/papers"

export default function PaperEntry({ paper }: { paper: papers }) {
  return (
    <Link href={`${paper.link}`} className="block">
    <article className="space-y-2">

      {/* Title */}
      <h3 className="text-lg font-medium text-neutral-900">
        {paper.title}
      </h3>

      {/* Meta */}
      <div className="text-sm text-neutral-500">
        {paper.authors}
        {paper.year && <> · {paper.year}</>}
      </div>

      {/* Keywords */}
      <div className="text-xs text-neutral-400">
        {paper.keywords.join(" · ")}
      </div>

      {paper.notes?.myNotes && (
        <div className="mt-2 space-y-2 text-sm text-neutral-700">
          {paper.notes.myNotes.map((line, i) => {
  const isBold =
    line.startsWith("**") && line.endsWith("**")

  const isItalic =
    !isBold &&
    line.startsWith("*") &&
    line.endsWith("*")

  let text = line
  if (isBold) text = line.slice(2, -2)
  else if (isItalic) text = line.slice(1, -1)

  return (
    <p
      key={i}
      className={[
        isBold && "font-semibold text-neutral-800 dark:text-neutral-200",
        isItalic && "italic text-neutral-600 dark:text-neutral-400",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {text}
    </p>
  )
})}
        </div>
      )}
    </article>
    </Link>
  )
}
