import React from "react"
import type { papers } from "@/app/data/papers"

export default function PaperEntry({ paper }: { paper: papers }) {
  return (
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
            const isItalic = line.startsWith("*") && line.endsWith("*")
            const text = isItalic ? line.slice(1, -1) : line

            return (
              <p key={i} className={isItalic ? "italic text-neutral-600" : ""}>
                {text}
              </p>
            )
          })}
        </div>
      )}
    </article>
  )
}
