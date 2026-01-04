"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { handleNavigationWithScroll } from "@/lib/scroll-utils";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    // Handle home route specifically
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* Header Card */}
<div className="mx-auto max-w-7xl bg-card/95 backdrop-blur border border-border rounded-2xl px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-3">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={
                mounted
                  ? theme === "dark"
                    ? "https://i.postimg.cc/sxJDwVCf/printer-logo-lyt.png"
                    : "https://i.postimg.cc/zfMLgX89/printer-logo-dark.png"
                  : "https://i.postimg.cc/zfMLgX89/printer-logo-dark.png"
              }
              alt="Printer Logo"
              width={32}
              height={32}
              priority
              className="object-contain rounded-[10px] md:w-10 md:h-10"
            />
            <span className="text-[18px] md:text-xl font-extrabold italic tracking-wider">
              PRINTER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-muted-foreground">
            <button 
              onClick={(e) => {
                e.preventDefault();
                handleNavigationWithScroll(
                  pathname,
                  '/',
                  'youtube-channel',
                  router
                );
              }}
              className={`hover:text-primary transition-colors cursor-pointer ${pathname === '/' ? 'text-primary font-semibold' : ''}`}
            >
              Our Channel
            </button>
            <Link 
              href="/landing-page/education" 
              className={`hover:text-primary transition-colors ${isActive('/landing-page/education') ? 'text-primary font-semibold' : ''}`}
            >
              Education
            </Link>
            <Link 
              href="/landing-page/subscriptions" 
              className={`hover:text-primary transition-colors ${isActive('/landing-page/subscriptions') ? 'text-primary font-semibold' : ''}`}
            >
              Subscriptions 
            </Link>

            <Link 
              href="/landing-page/testimonials" 
              className={`hover:text-primary transition-colors ${isActive('/landing-page/testimonials') ? 'text-primary font-semibold' : ''}`}
            >
              Testimonials
            </Link>

            <Button asChild className="ml-4 py-5 text-[17px] font-semibold rounded-xl">
              <Link href="https://t.me/istancapitalfx">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden h-12 flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={closeMobileMenu}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-full w-[280px] bg-card border-l border-border shadow-xl z-50
        rounded-tl-3xl rounded-bl-3xl
        transform transition-transform duration-500 ease-in-out md:hidden
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          aria-label="Close menu"
          className="absolute top-6 right-6 rounded-lg p-2 text-foreground hover:bg-muted transition"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col justify-between h-full px-8 pt-24 pb-8">
          {/* Links */}
          <div className="flex flex-col gap-6 text-[17px] font-medium text-muted-foreground">
            <Link 
              href="/" 
              onClick={closeMobileMenu} 
              className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-semibold' : ''}`}
            >
              Home
            </Link>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                handleNavigationWithScroll(
                  pathname,
                  '/',
                  'why-join-us',
                  router,
                  closeMobileMenu
                );
              }}
              className={`hover:text-primary transition-colors text-left w-full ${pathname === '/' ? 'text-primary font-semibold' : ''}`}
            >
              Why Join Printer
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                handleNavigationWithScroll(
                  pathname,
                  '/',
                  'youtube-channel',
                  router,
                  closeMobileMenu
                );
              }}
              className={`hover:text-primary transition-colors text-left w-full ${pathname === '/' ? 'text-primary font-semibold' : ''}`}
            >
              View Our Channel
            </button>
            
            <Link 
              href="/landing-page/education" 
              onClick={closeMobileMenu}
              className={`hover:text-primary transition-colors ${isActive('/landing-page/education') ? 'text-primary font-semibold' : ''}`}
            >
              Who This Is For
            </Link>
             <Link 
              href="/landing-page/testimonials" 
              onClick={closeMobileMenu}
              className={`hover:text-primary transition-colors ${isActive('/landing-page/testimonials') ? 'text-primary font-semibold' : ''}`}
            >
              Students Testimonials
            </Link>
            <Link 
              href="/landing-page/subscriptions" 
              onClick={closeMobileMenu} 
              className={`hover:text-primary transition-colors ${isActive('/landing-page/subscriptions') ? 'text-primary font-semibold' : ''}`}
            >
              Printers Subscriptions
            </Link>
          </div>

          {/* Bottom CTA */}
          <Button
            asChild
            size="lg"
            className="w-full py-6 text-[17px] font-semibold rounded-xl"
          >
            <Link href="https://t.me/istancapitalfx" onClick={closeMobileMenu}>
              Get Started
            </Link>
          </Button>
        </div>
      </aside>
    </header>
  );
}
