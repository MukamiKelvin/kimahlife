import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          KimahLife
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Projects
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Let's work together
        </Link>

      </nav>
    </header>
  );
}