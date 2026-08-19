export default function About() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* About Hero */}
      <section className="px-8 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            About Me
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Building with technology,
            <span className="block text-gray-400">
              learning by doing.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            I'm Kelvin, an IT professional and frontend developer
            passionate about creating modern digital experiences and
            solving real-world problems with technology.
          </p>

        </div>
      </section>

      {/* My Story */}
<section className="border-t border-gray-200 bg-gray-50 px-8 py-20 md:py-24">
  <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

    {/* Image */}
    <div className="overflow-hidden rounded-3xl">
      <img
        src="/kelvin.jpg"
        alt="Kelvin"
        className="h-[500px] w-full object-cover"
      />
    </div>

    {/* Story */}
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
        My Story
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        From IT support to building the web.
      </h2>

      <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
        <p>
          My journey in technology started with a strong interest in
          understanding how computers, software and digital systems
          work. That interest eventually led me into IT, where I
          gained hands-on experience solving technical problems in
          real-world environments.
        </p>

        <p>
          Working in IT has taught me that technology is not just
          about writing code. It's about understanding problems,
          finding practical solutions and creating systems that
          make people's work easier.
        </p>

        <p>
          As I continued growing, I became increasingly interested
          in web development. I started building projects with
          JavaScript and React, and eventually moved into Next.js
          and modern frontend development.
        </p>

        <p>
          Today, I'm focused on combining my IT experience with
          software development to build useful, reliable and
          professional digital products.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* What I Do */}
      <section className="px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              What I Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Technology with a purpose.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              I combine technical knowledge, problem-solving and
              frontend development to create digital solutions that
              are useful, intuitive and easy to maintain.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* Frontend */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xl text-white">
                01
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Frontend Development
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Building responsive and modern interfaces using
                JavaScript, React, Next.js and Tailwind CSS.
              </p>
            </div>

            {/* Business Solutions */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xl text-white">
                02
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Business Solutions
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Creating practical digital systems that help
                businesses manage information, improve processes and
                work more efficiently.
              </p>
            </div>

            {/* IT */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xl text-white">
                03
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                IT & Technical Support
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Troubleshooting hardware, software, networking and
                technology systems to keep users and businesses
                productive.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-gray-200 bg-gray-50 px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Skills & Technologies
          </p>

          <div className="mt-4 grid gap-12 md:grid-cols-2">

            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                My toolkit.
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600">
                I'm continuously expanding my toolkit as I build
                projects and work with new technologies.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "PHP",
                "MySQL",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl bg-black px-8 py-14 text-center md:px-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Let's Work Together
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              Have an idea you'd like to bring to life?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-400">
              Let's talk about your project and explore how we can
              turn your idea into a useful digital experience.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Let's talk →
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}