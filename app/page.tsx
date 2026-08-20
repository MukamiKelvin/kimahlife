"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

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

  const aboutCards = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "I create responsive and modern interfaces using JavaScript, React, Next.js and Tailwind CSS, with a strong focus on clean design and user experience.",
    },
    {
      icon: "🛠️",
      title: "IT & Technical Support",
      description:
        "My IT experience has taught me how to troubleshoot hardware, software, networking and business technology problems in real-world environments.",
    },
    {
      icon: "🚀",
      title: "Always Building",
      description:
        "I learn by building. Every project gives me an opportunity to improve my skills, experiment with new technologies and create better solutions.",
    },
  ];

  const technologies = [
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
  ];

  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-white px-6 py-12 transition-colors duration-300 dark:bg-black sm:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

          {/* Hero Content */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 sm:text-sm"
            >
              Frontend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl"
            >
              I build modern websites
              <span className="block text-gray-400">
                that help businesses grow.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg"
            >
              I'm Kelvin, a frontend developer focused on creating clean,
              responsive and user-friendly websites using modern web
              technologies.
            </motion.p>

            {/* Hero Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-7 flex flex-wrap gap-3"
            >

              <motion.a
                href="#projects"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                View my work
              </motion.a>

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-gray-300 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
                >
                  Let's talk
                </Link>
              </motion.div>

            </motion.div>

          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src="/kim.jpg"
                alt="Kelvin - Frontend Developer"
                className="h-[340px] w-full max-w-[340px] object-cover sm:h-[400px] sm:max-w-[400px] md:h-[440px] md:w-[380px]"
              />
            </motion.div>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="border-t border-gray-200 bg-gray-50 px-6 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* About Introduction */}
          <Reveal>

            <div className="max-w-3xl">

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                About Me
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl">
                I build digital experiences
                <span className="block text-gray-400">
                  that solve real problems.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                I'm Kelvin, an IT professional and frontend developer
                passionate about building modern, responsive and
                user-friendly web experiences.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                My background in IT has given me hands-on experience
                solving real-world technology problems, while my
                journey into frontend development has allowed me to
                turn ideas into practical digital products.
              </p>

            </div>

          </Reveal>


          {/* About Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {aboutCards.map((item, index) => (

              <Reveal
                key={item.title}
                delay={index * 0.12}
              >

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-2xl border border-gray-200 bg-white p-7 transition-colors duration-300 dark:border-gray-800 dark:bg-black"
                >

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl dark:bg-gray-900">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>

                </motion.div>

              </Reveal>

            ))}

          </div>


          {/* Toolkit + CTA */}
          <Reveal delay={0.15}>

            <div className="mt-16 grid gap-12 border-t border-gray-200 pt-12 transition-colors duration-300 dark:border-gray-800 md:grid-cols-2">

              {/* Toolkit */}
              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                  My Toolkit
                </p>

                <h3 className="mt-3 text-2xl font-bold text-black dark:text-white">
                  Technologies I work with
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">

                  {technologies.map((tech) => (

                    <motion.span
                      key={tech}
                      whileHover={{ y: -3 }}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 dark:border-gray-800 dark:bg-black dark:text-gray-300"
                    >
                      {tech}
                    </motion.span>

                  ))}

                </div>

              </div>


              {/* CTA */}
              <div className="flex flex-col justify-end">

                <h3 className="text-3xl font-bold tracking-tight text-black dark:text-white">
                  Let's build something meaningful.
                </h3>

                <p className="mt-4 max-w-md leading-7 text-gray-600 dark:text-gray-400">
                  Whether you have a business idea, a website that
                  needs to be built, or a digital experience that
                  needs improvement, I'd love to hear about it.
                </p>

                <div className="mt-7">

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    >
                      Let's work together →
                    </Link>
                  </motion.div>

                </div>

              </div>

            </div>

          </Reveal>


          {/* About Page Link */}
          <Reveal delay={0.1}>

            <div className="mt-14 border-t border-gray-200 pt-10 dark:border-gray-800">

              <Link
                href="/about"
                className="group inline-flex items-center text-sm font-semibold text-black transition hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
              >
                Read more about me

                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-black sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* Projects Heading */}
          <Reveal>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div className="max-w-2xl">

                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                  Selected Work
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
                  Projects I've built
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                  A selection of projects I've built while developing
                  my skills and exploring modern web technologies.
                </p>

              </div>

              <Link
                href="/projects"
                className="inline-flex w-fit whitespace-nowrap rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
              >
                View all projects →
              </Link>

            </div>

          </Reveal>


          {/* Project Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {featuredProjects.map((project, index) => (

              <Reveal
                key={project.title}
                delay={index * 0.12}
              >

                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950"
                >

                  {/* Project Preview */}
                  <div className="flex h-56 items-center justify-center bg-gray-100 dark:bg-gray-900">

                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                      Project Preview
                    </span>

                  </div>

                  {/* Project Content */}
                  <div className="p-7">

                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-black dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (

                        <span
                          key={technology}
                          className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors duration-300 dark:border-gray-800 dark:bg-black dark:text-gray-300"
                        >
                          {technology}
                        </span>

                      ))}

                    </div>

                  </div>

                </motion.article>

              </Reveal>

            ))}

          </div>


          {/* Projects CTA */}
          <Reveal delay={0.15}>

            <div className="mt-12 text-center">

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  href="/projects"
                  className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  See all projects →
                </Link>
              </motion.div>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="border-t border-gray-200 bg-gray-50 px-6 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* Services Heading */}
          <Reveal>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div className="max-w-2xl">

                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                  What I Do
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
                  Digital solutions for your business.
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                  From websites and online stores to custom software
                  and SEO, I help businesses build and improve their
                  digital presence.
                </p>

              </div>

              <Link
                href="/services"
                className="inline-flex w-fit whitespace-nowrap rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white dark:border-gray-700 dark:text-white dark:hover:bg-black"
              >
                View all services →
              </Link>

            </div>

          </Reveal>


          {/* Service Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {services.map((service, index) => (

              <Reveal
                key={service.number}
                delay={index * 0.08}
              >

                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-3xl border border-gray-200 bg-white p-7 transition-colors duration-300 dark:border-gray-800 dark:bg-black"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-sm font-semibold text-white dark:bg-white dark:text-black">
                    {service.number}
                  </div>

                  <h3 className="mt-7 text-xl font-bold tracking-tight text-black dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>

                </motion.article>

              </Reveal>

            ))}

          </div>


          {/* Services CTA */}
          <Reveal delay={0.15}>

            <div className="mt-12 text-center">

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  href="/services"
                  className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  See all services →
                </Link>
              </motion.div>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
          LIGHT/WHITE IN BOTH MODES
      ===================================================== */}

      <section className="border-t border-gray-200 bg-white px-6 py-20 text-black transition-colors duration-300 dark:border-gray-200 dark:bg-white dark:text-black sm:px-8 md:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <Reveal>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Have a project in mind?
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
              Let's build something
              <span className="block text-gray-400">
                great together.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Whether you need a website, an online store, a custom
              business system or help improving your digital presence,
              let's talk about your project.
            </p>

            <div className="mt-9">

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Start a conversation →
                </Link>
              </motion.div>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}