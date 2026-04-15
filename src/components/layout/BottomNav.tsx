"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Info, Phone } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Also reveal when scrolling stops
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => {
        setVisible(true);
      }, 300);
      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout]);

  // Hide bottom nav on dashboard/learn/admin routes
  const isHidden =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/learn") ||
    pathname.startsWith("/admin");

  if (isHidden) return null;

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-navy border-t border-white/10 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={name}
              href={href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                isActive ? "text-gold" : "text-white/50 hover:text-white"
              }`}
            >
              <Icon
                className={`h-6 w-6 transition-transform ${isActive ? "scale-110" : "scale-100"}`}
              />
              <span className="text-[10px] font-black uppercase tracking-widest">
                {name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
