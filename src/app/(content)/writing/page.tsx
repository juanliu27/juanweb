"use client";

import { useEffect, useState } from "react";
import { writings } from "@/app/data/writings";
import WritingCard from "@/components/WritingCard";
import JellyfishModal from "@/components/JellyfishModal";

type JellyfishStatus = "unknown" | "verified" | "denied";

export default function WritingPage() {
  const [jellyfish, setJellyfish] = useState<JellyfishStatus>("unknown");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 确保只在 client 端读取 sessionStorage
    setMounted(true);

    const stored = sessionStorage.getItem("jellyfish_verified");
    if (stored === "true") {
      setJellyfish("verified");
    } else if (stored === "false") {
      setJellyfish("denied");
    } else {
      setJellyfish("unknown");
    }
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
      <h1 className="text-4xl font-semibold mb-12">Writing</h1>
      
      {/* 🪼 Jellyfish 弹窗：每个 session 只出现一次 */}
      {mounted && jellyfish === "unknown" && (
        <JellyfishModal onResolve={setJellyfish} />
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {writings.map((w) => {
          // jellyfish-only，但未通过
          if (w.jellyfishOnly && jellyfish !== "verified") {
            return (
              <WritingCard
                key={w.slug}
                title={w.title}
                excerpt="This post is protected."
                date={w.date}
                tag={w.tag}
                cover={w.cover}
                locked
              />
            );
          }

          // 正常可访问文章
          return (
            <WritingCard
              key={w.slug}
              slug={w.slug}
              title={w.title}
              excerpt={w.excerpt}
              date={w.date}
              tag={w.tag}
              cover={w.cover}
            />
          );
        })}
      </div>
    </section>
  );
}
