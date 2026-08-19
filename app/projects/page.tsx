export default function Projects() {
  const projects = [
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
    {
      title: "Business Dashboard",
      description:
        "A modern dashboard interface designed to help businesses monitor important information and manage their operations.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      category: "Dashboard",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio designed to showcase my skills, projects, experience and services.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "Portfolio",
    },
    {
      title: "E-commerce Store",
      description:
        "A modern online store concept designed to provide customers with a simple and engaging shopping experience.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      category: "E-commerce",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">

      {/* Projects Hero */}
      <section className="px-8 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            My Work
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Projects I've built
            <span className="block text-gray-400">
              with purpose.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            A collection of projects I've built while developing my
            skills and exploring modern web technologies.
          </p>

        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-gray-200 bg-gray-50 px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 md:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Project Image Placeholder */}
                <div className="flex h-72 items-center justify-center bg-gray-100">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                    Project Preview
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-8">

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-gray-500">
                      {project.category}
                    </p>

                    <span className="text-sm text-gray-400">
                      0{projects.indexOf(project) + 1}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-semibold text-black transition group-hover:gap-2"
                    >
                      View project
                      <span className="ml-1 transition">
                        →
                      </span>
                    </a>
                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}