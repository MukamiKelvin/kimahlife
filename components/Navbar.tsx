"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black text-white">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          KimahLife
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/about"
            className="text-sm font-medium text-white transition hover:text-gray-400"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-sm font-medium text-white transition hover:text-gray-400"
          >
            Projects
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-white transition hover:text-gray-400"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-white transition hover:text-gray-400"
          >
            Contact
          </Link>

        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200 md:block"
        >
          Let's work together
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-800 bg-black px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white transition hover:text-gray-400"
            >
              About
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white transition hover:text-gray-400"
            >
              Projects
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white transition hover:text-gray-400"
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white transition hover:text-gray-400"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Let's work together
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}