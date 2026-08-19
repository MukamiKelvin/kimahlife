import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-8 text-black">
      <section className="w-full max-w-3xl text-center">

        {/* Error Code */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
          Page not found.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Looks like the page you're looking for doesn't exist,
          has been moved, or the link may be incorrect.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Back to home →
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-gray-300 px-7 py-4 text-sm font-semibold transition hover:bg-gray-100"
          >
            Contact me
          </Link>

        </div>

        {/* Brand */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-sm font-semibold tracking-tight">
            KimahLife
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Building digital experiences that solve real problems.
          </p>
        </div>

      </section>
    </main>
  );
}