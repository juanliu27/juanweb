"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/arts", label: "Atlas" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-[300px] min-h-screen bg-background px-10 py-10">
      <div className="flex flex-col justify-center px-10 py-10 w-full">

        {/* 顶部：身份区 */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src="/me.png"
            alt="My portrait"
            className="w-28 h-28 rounded-full object-cover border border-neutral-300 dark:border-neutral-700 shadow-sm"
          />

          <div className="text-center md:text-left">
            <Link
              href="/"
              className="block text-[22px] font-semibold tracking-tight"
            >
              Jingyuan Liu
            </Link>
            <p className="mt-2 text-[12px]  opacity-70 leading-relaxed">
            <br />Data Science | Sociology<br /> <br />
              AI Ethics · LLM <br /> Platform Governance <br /> Privacy  <br /><br />
            </p>
          </div>
        </div>

        {/* 中部：导航 */}
        <nav className="space-y-1">
          {links.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname.startsWith(l.href));

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`
                  block rounded-lg px-3 py-2 text-sm transition
                  ${active
                    ? "bg-[var(--brand-contrast)] text-[var(--brand)]"
                    : "bg-transparent text-[var(--brand-contrast)] hover:bg-[var(--brand-contrast)] hover:text-[var(--brand)]"
                  }
                `}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* 底部（可选） */}
        <div className="pt-4 text-xs opacity-60">
          © {new Date().getFullYear()}
        </div>
      </div>
    </aside>
  );
}
