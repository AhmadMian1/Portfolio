import type { ContactInfo, NavItem } from "@/types";

export function Footer({ socials, navItems }: { socials: ContactInfo["socials"]; navItems: NavItem[] }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">IT Solutions</h3>
          <p className="mt-2 text-sm text-slate-400">Modern engineering for high-performing digital products.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-200">Quick Links</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-200">Social</h4>
          <div className="mt-3 flex gap-2">
            {socials.map((social) => (
              <a key={social.name} href={social.url} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-200">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} IT Solutions. All rights reserved.</p>
    </footer>
  );
}
