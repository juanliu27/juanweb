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
            hidden md:flex
            md:basis-1/5
            sticky top-0 h-screen
            z-20
            shadow-[4px_0_24px_rgba(0,0,0,0.2)] 
            border-r border-white/10
          "
        >

        <Sidebar />
      </aside>

      {/* 右侧内容：半透明浮层 */}
      <main
        className="
          flex-1 md:basis-4/5
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
