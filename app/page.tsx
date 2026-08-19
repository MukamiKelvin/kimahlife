export default function Home() {
  const featuredProjects = [
    {
      title: "Expense Tracker",
      description:
        "A personal finance application designed to help users track income, expenses and understand their spending habits.",
      technologies: ["React", "JavaScript", "CSS"],
      category: "Web Application",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application that provides users with real-time weather information through an external API.",
      technologies: ["React", "JavaScript", "API"],
      category: "Web Application",
    },
    {
      title: "POS System",
      description:
        "A point-of-sale system designed to help businesses manage products, sales and everyday operations.",
      technologies: ["React", "PHP", "MySQL"],
      category: "Business System",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Website Development",
      description:
        "Modern, responsive websites built around your business goals.",
    },
    {
      number: "02",
      title: "WordPress Websites",
      description:
        "Professional WordPress websites that are easy to manage and maintain.",
    },
    {
      number: "03",
      title: "E-commerce Websites",
      description:
        "Online stores designed to provide customers with a simple and engaging shopping experience.",
    },
    {
      number: "04",
      title: "Software Development",
      description:
        "Custom business systems, dashboards and web applications built around your workflow.",
    },
    {
      number: "05",
      title: "SEO",
      description:
        "Improve your website's visibility and help potential customers find you online.",
    },
    {
      number: "06",
      title: "Website Maintenance",
      description:
        "Updates, troubleshooting and technical support to keep your website running smoothly.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">

      {/* Hero */}
      <section className="px-8 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* Hero Content */}
          <div>

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Frontend Developer
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              I build modern websites
              <span className="block text-gray-400">
                that help businesses grow.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              I'm Kelvin, a frontend developer focused on creating clean,
              responsive and user-friendly websites using modern web
              technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-gray-300 px-7 py-4 text-sm font-semibold transition hover:bg-gray-100"
              >
                Let's talk
              </a>
            </div>

          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/kim.png"
                alt="Kelvin - Frontend Developer"
                className="h-[420px] w-full max-w-[420px] object-cover md:h-[500px] md:w-[420px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-gray-200 bg-gray-50 px-8 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* About Heading */}
          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              About Me
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              I build digital experiences
              <span className="block text-gray-400">
                that solve real problems.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              I'm Kelvin, an IT professional and frontend developer
              passionate about building modern, responsive and
              user-friendly web experiences.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              My background in IT has given me hands-on experience solving
              real-world technology problems, while my journey into
              frontend development has allowed me to turn ideas into
              practical digital products.
            </p>

          </div>

          {/* About Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* Frontend Development */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
                💻
              </div>

              <h3 className="text-xl font-semibold">
                Frontend Development
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                I create responsive and modern interfaces using
                JavaScript, React, Next.js and Tailwind CSS, with a
                strong focus on clean design and user experience.
              </p>
            </div>

            {/* IT Support */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
                🛠️
              </div>

              <h3 className="text-xl font-semibold">
                IT & Technical Support
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                My IT experience has taught me how to troubleshoot
                hardware, software, networking and business technology
                problems in real-world environments.
              </p>
            </div>

            {/* Always Building */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
                🚀
              </div>

              <h3 className="text-xl font-semibold">
                Always Building
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                I learn by building. Every project gives me an
                opportunity to improve my skills, experiment with new
                technologies and create better solutions.
              </p>
            </div>

          </div>

          {/* Toolkit + CTA */}
          <div className="mt-16 grid gap-12 border-t border-gray-200 pt-12 md:grid-cols-2">

            {/* Toolkit */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                My Toolkit
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Technologies I work with
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "Git",
                  "GitHub",
                  "PHP",
                  "MySQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-end">

              <h3 className="text-3xl font-bold tracking-tight">
                Let's build something meaningful.
              </h3>

              <p className="mt-4 max-w-md leading-7 text-gray-600">
                Whether you have a business idea, a website that needs
                to be built, or a digital experience that needs
                improvement, I'd love to hear about it.
              </p>

              <div className="mt-7">
                <a
                  href="#contact"
                  className="inline-flex rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Let's work together →
                </a>
              </div>

            </div>

          </div>

          {/* About Page Link */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <a
              href="/about"
              className="inline-flex items-center text-sm font-semibold text-black transition hover:text-gray-500"
            >
              Read more about me
              <span className="ml-2">→</span>
            </a>
          </div>

        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="bg-white px-8 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Selected Work
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Projects I've built
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                A selection of projects I've built while developing my
                skills and exploring modern web technologies.
              </p>

            </div>

            <a
              href="/projects"
              className="inline-flex whitespace-nowrap rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-100"
            >
              View all projects →
            </a>

          </div>

          {/* Project Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Project Preview */}
                <div className="flex h-56 items-center justify-center bg-gray-100">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                    Project Preview
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-7">

                  <p className="text-sm font-medium text-gray-500">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>

              </article>
            ))}

          </div>

          {/* See More */}
          <div className="mt-12 text-center">
            <a
              href="/projects"
              className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              See all projects →
            </a>
          </div>

        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-gray-200 bg-gray-50 px-8 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                What I Do
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Digital solutions for your business.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                From websites and online stores to custom software and
                SEO, I help businesses build and improve their digital
                presence.
              </p>

            </div>

            <a
              href="/services"
              className="inline-flex whitespace-nowrap rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-white"
            >
              View all services →
            </a>

          </div>

          {/* Service Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-sm font-semibold text-white">
                  {service.number}
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

              </article>
            ))}

          </div>

          {/* See More */}
          <div className="mt-12 text-center">
            <a
              href="/services"
              className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              See all services →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}