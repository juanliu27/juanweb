"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/literature", label: "Literature" },
  { href: "/writing", label: "Writing" },
  { href: "/arts", label: "Atlas" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-full h-full min-h-screen sticky top-0 
    bg-white/20 dark:bg-black/20 backdrop-blur-2xl 
    border-r border-white/10 
    px-16 pt-16 pb-12">

      {/* 顶部：身份区 - 增加呼吸感和层级 */}
      <div className="flex flex-col items-start gap-6 mb-5">
        <div className="relative group">
          {/* 头像背后的极简光晕 */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
          <img
            src="/me.png"
            alt="Portrait"
            className="relative w-22 h-22 rounded-full object-cover border-1 border-white dark:border-neutral-800 shadow-md"
          />
        </div>

        <div>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-teal-600 transition-colors"
          >
            Jingyuan Liu
          </Link>
          <div className="mt-3 space-y-1.5">
            <p className="text-[16px] font-semibold text-teal-600 dark:text-teal-400">
              Data Science | Sociology
            </p>
            <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
              AI Gorvenance · AI Ethics <br />
              Large Language Model <br />
              Privacy
            </p>
          </div>
        </div>
      </div>

      {/* 中部：导航 */}
      <nav className="space-y-2 mb-12">
        {links.map((l) => {
          const active =
            pathname === l.href ||
            (l.href !== "/" && pathname.startsWith(l.href));

          return (
            <Link
              key={l.href}
              href={l.href}
              className={`
                relative group flex items-center px-4 py-2 text-base font-medium rounded-xl transition-all duration-200
                ${active
                  ? "bg-teal-500/10 text-teal-700 dark:text-teal-400 shadow-[inset_0_0_0_1px_rgba(20,184,166,0.1)]"
                  : "text-neutral-500 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-200"
                }
              `}
            >
              {/* 选中时的左侧指示条 */}
              {active && (
                <span className="absolute left-0 w-1 h-5 bg-teal-500 rounded-r-full" />
              )}
              
              <span className={`
                transition-transform duration-200
                ${active ? "translate-x-1" : "group-hover:translate-x-1"}
              `}>
                {l.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* 底部：版权区 - 更精致的装饰 */}
      <div className="mt-auto pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50 text-[10px] text-neutral-400 tracking-widest uppercase font-medium">
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </aside>
  );
}