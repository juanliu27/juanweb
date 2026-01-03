import Sidebar from "@/components/Sidebar";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen relative">
      
      {/* 左侧 Sidebar：半透明实体 */}
      <aside
          className="
            w-[300px]
            self-start
            sticky
            top-0
            h-screen
            bg-[var(--brand)]/95
            text-[var(--brand-contrast)]
            border-r border-black/10
          "
        >

        <Sidebar />
      </aside>

      {/* 右侧内容：半透明浮层 */}
      <main
        className="
          flex-1
          min-h-screen
          bg-[var(--background)]/45
          backdrop-blur-[2px]
        "
      >

        {children}
      </main>
    </div>
  );
}
