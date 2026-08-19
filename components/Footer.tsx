import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <Link
              href="/"
              className="text-3xl font-bold tracking-tight"
            >
              KimahLife
            </Link>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              I build modern websites, digital experiences and
              software solutions that help businesses grow.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Let's work together →
            </Link>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              <Link
                href="/"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/projects"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Website Development
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                WordPress Websites
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                E-commerce
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Software Development
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                SEO
              </Link>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}  Mukami Kelvin. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">

            <a
              href="https://www.linkedin.com/in/kelvin-kimanthi-mukami-60bb19241/"
              className="text-sm text-gray-400 transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/MukamiKelvin"
              className="text-sm text-gray-400 transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.tiktok.com/@mukamikelvin?lang=en-GB"
              className="text-sm text-gray-400 transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>

            <a
              href="https://www.facebook.com/mukami.kelvin"
              className="text-sm text-gray-400 transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}