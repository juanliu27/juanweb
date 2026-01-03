"use client";
import Sidebar from "@/components/Sidebar";
import type { ReactNode } from "react";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* 左侧 Sidebar：使用你的品牌色变量 */}
      <aside className="w-60 flex-shrink-0 bg-[var(--brand)] text-[var(--brand-contrast)]">
        <Sidebar />
      </aside>

      {/* 主内容区域：页面自行决定内部布局（可含右侧栏） */}
      <div className="flex-1 bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </div>
    </div>
  );
}
