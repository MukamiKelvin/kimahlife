"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

export default function About() {
  const skills = [
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
    "WordPress",
    "SEO",
  ];

  const whatIDo = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive and modern interfaces using JavaScript, React, Next.js and Tailwind CSS with a strong focus on usability and clean design.",
    },
    {
      number: "02",
      title: "Business Solutions",
      description:
        "Creating practical digital systems that help businesses manage information, improve processes and work more efficiently.",
    },
    {
      number: "03",
      title: "IT & Technical Support",
      description:
        "Troubleshooting hardware, software, networking and technology systems to keep users and businesses productive.",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Understand",
      description:
        "I first understand your goals, your audience and the problem you're trying to solve.",
    },
    {
      number: "02",
      title: "Build",
      description:
        "I turn the idea into a practical digital solution with a focus on functionality, performance and user experience.",
    },
    {
      number: "03",
      title: "Improve",
      description:
        "After launch, I can continue improving and maintaining the solution as your needs evolve.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">

          <Reveal>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                About Me
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                Building with technology,
                <span className="block text-gray-400 dark:text-gray-500">
                  learning by doing.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                I'm Kelvin, an IT professional and frontend developer
                passionate about creating modern digital experiences and
                solving real-world problems with technology.
              </p>

            </motion.div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          MY STORY
      ===================================================== */}

      <section className="border-t border-gray-200 bg-gray-50 px-6 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 sm:px-8 md:py-24">

        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

          {/* Image */}

          <Reveal>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-3xl"
            >

              <img
                src="/a.png"
                alt="Kelvin - IT Professional and Frontend Developer"
                className="h-[500px] w-full object-cover transition duration-500"
              />

            </motion.div>

          </Reveal>


          {/* Story */}

          <Reveal delay={0.15}>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                My Story
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                From IT support to building the web.
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-400">

                <p>
                  I have a degree in Computer Science and a strong
                  interest in technology, software and digital
                  solutions.
                </p>

                <p>
                  My journey in technology started with a curiosity
                  about how computers, software and digital systems
                  work. That curiosity eventually led me into IT,
                  where I gained hands-on experience solving technical
                  problems in real-world environments.
                </p>

                <p>
                  Working in IT taught me that technology is not just
                  about writing code. It's about understanding
                  problems, finding practical solutions and creating
                  systems that make people's work easier.
                </p>

                <p>
                  As I continued growing, I became increasingly
                  interested in web development. I started building
                  projects with JavaScript and React, and eventually
                  moved into Next.js and modern frontend development.
                </p>

                <p>
                  Today, I combine my IT experience with software
                  development to build useful, reliable and
                  professional digital products for individuals and
                  businesses.
                </p>

              </div>

            </motion.div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          WHAT I DO
      ===================================================== */}

      <section className="px-6 py-20 transition-colors duration-300 sm:px-8 md:py-24">

        <div className="mx-auto max-w-6xl">

          <Reveal>

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                What I Do
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Technology with a purpose.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
                I combine technical knowledge, problem-solving and
                frontend development to create digital solutions that
                are useful, intuitive and built around real business
                needs.
              </p>

            </div>

          </Reveal>


          {/* What I Do Cards */}

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {whatIDo.map((item, index) => (

              <Reveal
                key={item.number}
                delay={index * 0.12}
              >

                <motion.div
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                >

                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-sm font-semibold text-white dark:bg-white dark:text-black"
                  >
                    {item.number}
                  </motion.div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>

                </motion.div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section className="border-t border-gray-200 bg-gray-50 px-6 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 sm:px-8 md:py-24">

        <div className="mx-auto max-w-6xl">

          <Reveal>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Skills & Technologies
            </p>

          </Reveal>


          <div className="mt-4 grid gap-12 md:grid-cols-2">

            {/* Skills Introduction */}

            <Reveal>

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >

                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  My toolkit.
                </h2>

                <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600 dark:text-gray-400">
                  I'm continuously expanding my toolkit as I build
                  projects, solve problems and work with new
                  technologies.
                </p>

              </motion.div>

            </Reveal>


            {/* Skills */}

            <div className="flex flex-wrap content-start gap-3">

              {skills.map((skill, index) => (

                <Reveal
                  key={skill}
                  delay={index * 0.04}
                >

                  <motion.span
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors duration-300 hover:border-black hover:text-black dark:border-gray-800 dark:bg-black dark:text-gray-300 dark:hover:border-white dark:hover:text-white"
                  >
                    {skill}
                  </motion.span>

                </Reveal>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW I WORK
      ===================================================== */}

      <section className="px-6 py-20 transition-colors duration-300 sm:px-8 md:py-24">

        <div className="mx-auto max-w-6xl">

          <Reveal>

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                My Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                How I approach projects.
              </h2>

            </div>

          </Reveal>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {approach.map((item, index) => (

              <Reveal
                key={item.number}
                delay={index * 0.12}
              >

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="border-t-2 border-black pt-6 transition-colors duration-300 dark:border-white"
                >

                  <p className="text-sm font-semibold text-gray-400 dark:text-gray-500">
                    {item.number}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>

                </motion.div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-20 transition-colors duration-300 sm:px-8 md:py-24">

        <div className="mx-auto max-w-6xl">

          <Reveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-gray-100 px-8 py-14 text-center transition-colors duration-300 dark:bg-gray-900 md:px-16"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                Let's Work Together
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                Have an idea you'd like to bring to life?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                Let's talk about your project and explore how we can
                turn your idea into a useful digital experience.
              </p>

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block"
              >

                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Let's talk →
                </Link>

              </motion.div>

            </motion.div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}