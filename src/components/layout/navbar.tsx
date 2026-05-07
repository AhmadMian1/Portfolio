"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { accountAuthApi } from "@/services/account-auth-api";

type NavbarProps = {
  items: NavItem[];
  showLogout?: boolean;
  brandHref?: string;
};

export function Navbar({ items, showLogout = false, brandHref = "#home" }: NavbarProps) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onLogout = async () => {
    await accountAuthApi.logout();
    router.push("/login");
  };

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-lg dark:bg-slate-950/75">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href={brandHref} className="text-sm font-bold tracking-wider text-slate-100">
          IT SOLUTIONS
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm text-slate-300 transition hover:text-cyan-300",
                  active === id && "bg-white/10 text-cyan-300",
                )}
              >
                {item.label}
              </a>
            );
          })}
          {showLogout ? (
            <button
              onClick={onLogout}
              className="rounded-full bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          ) : null}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          {showLogout ? (
            <button
              onClick={onLogout}
              className="rounded-md bg-red-600 px-2.5 py-2 text-xs text-white hover:bg-red-700"
            >
              Logout
            </button>
          ) : null}
          <ThemeToggle />
          <button className="rounded-md border border-white/20 p-2 text-slate-100" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-slate-900/95 p-3 md:hidden">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          {showLogout ? (
            <button
              onClick={onLogout}
              className="mt-2 block w-full rounded-lg bg-red-600 px-3 py-2 text-left text-sm text-white hover:bg-red-700"
            >
              Logout
            </button>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
