"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { LayoutDashboard, LogOut, LogIn } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="bg-brand-navy fixed top-0 z-50 w-full shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-24 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="DhanPulse Logo"
              width={280}
              height={80}
              className="h-[72px] md:h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 ml-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gold-highlight px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {session ? (
              <div className="flex items-center gap-4">
                <Link
                  href={session?.user?.role === "admin" ? "/admin" : "/dashboard"}
                  className="flex items-center gap-2 bg-black/20 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/10 hover:bg-black/30 transition-all"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-white hover:text-red-200 transition-colors"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-white/10 text-white hover:bg-white/20 px-5 py-2 rounded-full text-sm font-bold transition-all border border-white/20"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile: Login / Dashboard button */}
          <div className="flex md:hidden items-center">
            {session ? (
              <Link
                href={session?.user?.role === "admin" ? "/admin" : "/dashboard"}
                className="flex items-center gap-1.5 bg-white/10 text-white px-4 py-2 rounded-full text-xs font-bold border border-white/20 hover:bg-white/20 transition-all"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 bg-white text-brand-navy px-4 py-2 rounded-full text-xs font-black hover:bg-gray-100 transition-all shadow-md"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
}
