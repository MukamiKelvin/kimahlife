"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black text-white">

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
        aria-label="Main navigation"
      >

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight transition hover:text-gray-300"
        >
          KimahLife
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-white" />
                )}
              </Link>
            );
          })}

        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 md:block"
        >
          Let's work together
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 text-white transition hover:bg-gray-900 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-gray-800 bg-black transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >

        <div className="px-6 py-6">

          <div className="flex flex-col gap-2">

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 inline-flex justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Let's work together →
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}