import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <Link
              href="/"
              className="inline-block text-3xl font-bold tracking-tight transition hover:text-gray-300"
            >
              KimahLife
            </Link>

            <p className="mt-5 max-w-md text-base leading-7 text-gray-400">
              I build modern websites, digital experiences and
              software solutions that help businesses grow.
            </p>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-3">

              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

              <span className="text-sm text-gray-400">
                Available for freelance projects
              </span>

            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-gray-200"
            >
              Let's work together
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Navigation
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <Link
                href="/"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/projects"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                Contact
              </Link>

            </nav>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Services
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                Website Development
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                WordPress Websites
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                E-commerce
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                Software Development
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-300 transition hover:translate-x-1 hover:text-white"
              >
                SEO
              </Link>

            </nav>

          </div>

        </div>

        {/* Contact / Email */}
        <div className="mt-14 border-t border-gray-800 pt-10">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Get in touch
              </p>

              <a
                href="mailto:mukamikelvinkimanthi@gmail.com"
                className="mt-2 inline-block text-lg font-medium text-gray-200 transition hover:text-white"
              >
                mukamikelvinkimanthi@gmail.com
              </a>

            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">

              <a
                href="https://www.linkedin.com/in/kelvin-kimanthi-mukami-60bb19241/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/MukamiKelvin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.tiktok.com/@mukamikelvin?lang=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                TikTok ↗
              </a>

              <a
                href="https://www.facebook.com/mukami.kelvin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Facebook ↗
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-gray-800 pt-8 md:flex-row md:items-center">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mukami Kelvin. All rights reserved.
          </p>

          <a
            href="#top"
            className="text-sm font-medium text-gray-400 transition hover:text-white"
          >
            Back to top ↑
          </a>

        </div>

      </div>

    </footer>
  );
}