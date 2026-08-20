"use client";

import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

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
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">

      {/* =====================================================
          PROJECTS HERO
      ===================================================== */}

      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">

          <Reveal>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                My Work
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                Projects I've built
                <span className="block text-gray-400 dark:text-gray-600">
                  with purpose.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                A collection of projects I've built while developing my
                skills and exploring modern web technologies.
              </p>

            </motion.div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="border-t border-gray-200 bg-gray-50 px-6 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 sm:px-8 md:py-24">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 md:grid-cols-2">

            {projects.map((project, index) => (

              <Reveal
                key={project.title}
                delay={index * 0.08}
              >

                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-colors duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-black"
                >

                  {/* Project Image Placeholder */}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-72 items-center justify-center bg-gray-100 transition-colors duration-300 dark:bg-gray-900"
                  >

                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600">
                      Project Preview
                    </span>

                  </motion.div>


                  {/* Project Content */}

                  <div className="p-8">

                    <div className="flex items-center justify-between gap-4">

                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {project.category}
                      </p>

                      <span className="text-sm text-gray-400 dark:text-gray-600">
                        0{index + 1}
                      </span>

                    </div>


                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-black dark:text-white">
                      {project.title}
                    </h2>


                    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>


                    {/* Technologies */}

                    <div className="mt-6 flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (

                        <motion.span
                          key={technology}
                          whileHover={{ y: -2 }}
                          className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors duration-300 dark:border-gray-700 dark:text-gray-400"
                        >
                          {technology}
                        </motion.span>

                      ))}

                    </div>


                    {/* Project Link */}

                    <div className="mt-8">

                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center text-sm font-semibold text-black transition-colors duration-300 dark:text-white"
                      >

                        View project

                        <span className="ml-1 transition">
                          →
                        </span>

                      </motion.a>

                    </div>

                  </div>

                </motion.article>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-black sm:px-8 md:py-24">

        <div className="mx-auto max-w-6xl">

          <Reveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-gray-200 bg-gray-50 px-8 py-14 text-center transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 md:px-16"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                Have a project in mind?
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                Let's build something
                <span className="block text-gray-400 dark:text-gray-600">
                  great together.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                Whether you need a website, an online store, a custom
                business system or help improving your digital presence,
                let's talk about your project.
              </p>

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block"
              >

                <a
                  href="/contact"
                  className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Start a conversation →
                </a>

              </motion.div>

            </motion.div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}