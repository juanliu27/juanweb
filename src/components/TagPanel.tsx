"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { tagGroups } from "@/app/data/tagConfig";
import { projects } from "@/app/data/projects";

export default function TagPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag");

  const [query, setQuery] = useState("");

  // 1️⃣ 统计 tag 次数
  const tagCount: Record<string, number> = {};
  projects.forEach((p) =>
    p.tags.forEach((t) => {
      tagCount[t] = (tagCount[t] || 0) + 1;
    })
  );

  const matchesQuery = (tag: string) =>
    tag.toLowerCase().includes(query.toLowerCase());

  return (
    <aside className="w-72 border-l pl-4">
      <input
        type="text"
        placeholder="Search tags..."
        className="w-full mb-4 px-2 py-1 border rounded text-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-6">
        {tagGroups.map(({ group, tags }) => {
          // 2️⃣ 过滤 + 按频次排序
          const visibleTags = tags
            .filter(matchesQuery)
            .sort((a, b) => (tagCount[b] ?? 0) - (tagCount[a] ?? 0));

          if (visibleTags.length === 0) return null;

          return (
            <div key={group}>
              <h3 className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
                {group}
              </h3>
              <ul className="space-y-1">
                {visibleTags.map((tag) => {
                  const isActive = tag === activeTag;

                  return (
                    <li key={tag}>
                      <button
                        onClick={() =>
                          router.push(
                            `/projects?tag=${encodeURIComponent(tag)}`
                          )
                        }
                        className={`text-sm flex justify-between w-full ${
                          isActive
                            ? "font-semibold text-neutral-900"
                            : "text-neutral-600 hover:underline"
                        }`}
                      >
                        <span>{tag}</span>
                        <span className="text-neutral-400">
                          {tagCount[tag] ?? 0}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
