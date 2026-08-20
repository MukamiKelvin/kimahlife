"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Website Development",
      description:
        "Modern, responsive websites designed around your business goals, with a strong focus on performance, usability and clean design.",
      benefits: [
        "Responsive across devices",
        "Modern and professional design",
        "Fast and performance-focused",
        "Built around your business goals",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "WordPress Websites",
      description:
        "Professional WordPress websites that are easy to manage, responsive across devices and built around your business needs.",
      benefits: [
        "Professional business websites",
        "Easy content management",
        "Mobile responsive",
        "SEO-friendly structure",
      ],
      technologies: ["WordPress", "Elementor", "SEO", "Responsive Design"],
    },
    {
      number: "03",
      title: "E-commerce Websites",
      description:
        "Online stores designed to give customers a simple, engaging and reliable shopping experience while helping your business sell online.",
      benefits: [
        "Product and category management",
        "Responsive shopping experience",
        "Clear product presentation",
        "Built with growth in mind",
      ],
      technologies: ["Next.js", "React", "WordPress", "WooCommerce"],
    },
    {
      number: "04",
      title: "Software Development",
      description:
        "Custom software solutions including business systems, dashboards and web applications designed around your workflow.",
      benefits: [
        "Custom business systems",
        "Interactive dashboards",
        "Workflow-focused solutions",
        "Scalable architecture",
      ],
      technologies: ["React", "Next.js", "PHP", "MySQL"],
    },
    {
      number: "05",
      title: "SEO",
      description:
        "Search engine optimization focused on improving your website's visibility, structure and ability to reach the right audience.",
      benefits: [
        "On-page optimization",
        "Technical SEO improvements",
        "Performance optimization",
        "Search-friendly structure",
      ],
      technologies: ["On-Page SEO", "Technical SEO", "Performance", "Content"],
    },
    {
      number: "06",
      title: "Website Maintenance & Support",
      description:
        "Ongoing technical support, updates, troubleshooting and improvements to keep your website running smoothly.",
      benefits: [
        "Website updates",
        "Bug troubleshooting",
        "Performance improvements",
        "Technical support",
      ],
      technologies: [
        "Maintenance",
        "Updates",
        "Bug Fixes",
        "Technical Support",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your business, goals, audience and the problem you want to solve.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We define the structure, features and approach needed to turn your idea into a practical solution.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "I develop the solution with a focus on quality, responsiveness, usability and performance.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Once everything is tested and ready, we launch and make sure everything is working as expected.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">

      {/* =====================================================
          SERVICES HERO
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">

          <Reveal>
            <div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400"
              >
                What I Do
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl"
              >
                Digital solutions
                <span className="block text-gray-400 dark:text-gray-500">
                  built for your business.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400"
              >
                From professional websites and online stores to custom
                software and SEO, I help businesses build and improve
                their digital presence.
              </motion.p>

              {/* Hero CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="mt-10 inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Start a project →
                </Link>
              </motion.div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="border-t border-gray-200 bg-gray-50 px-6 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-2">

            {services.map((service, index) => (

              <Reveal
                key={service.number}
                delay={index * 0.08}
              >

                <motion.article
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 md:p-10"
                >

                  {/* Number + Label */}

                  <div className="flex items-start justify-between">

                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-sm font-semibold text-white dark:bg-white dark:text-black"
                    >
                      {service.number}
                    </motion.div>

                    <span className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
                      Service
                    </span>

                  </div>


                  {/* Title */}

                  <h2 className="mt-8 text-2xl font-bold tracking-tight md:text-3xl">
                    {service.title}
                  </h2>


                  {/* Description */}

                  <p className="mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>


                  {/* Benefits */}

                  <div className="mt-7">

                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
                      What you get
                    </p>

                    <ul className="mt-4 space-y-3">

                      {service.benefits.map((benefit, benefitIndex) => (

                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.35,
                            delay: benefitIndex * 0.05,
                          }}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
                        >

                          <span className="mt-0.5 font-semibold text-black dark:text-white">
                            ✓
                          </span>

                          <span>{benefit}</span>

                        </motion.li>

                      ))}

                    </ul>

                  </div>


                  {/* Technologies */}

                  <div className="mt-8 flex flex-wrap gap-2">

                    {service.technologies.map((technology) => (

                      <motion.span
                        key={technology}
                        whileHover={{ y: -2 }}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {technology}
                      </motion.span>

                    ))}

                  </div>


                  {/* Service CTA */}

                  <div className="mt-8 border-t border-gray-100 pt-6 transition-colors duration-300 dark:border-gray-800">

                    <Link
                      href="/contact"
                      className="inline-flex text-sm font-semibold text-black transition hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                    >
                      Discuss this service →
                    </Link>

                  </div>

                </motion.article>

              </Reveal>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">

          <Reveal>

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                My Process
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                From idea to launch.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
                A simple and transparent process designed to keep your
                project focused from the first conversation to launch.
              </p>

            </div>

          </Reveal>


          {/* Process Steps */}

          <div className="mt-14 grid gap-8 md:grid-cols-4">

            {process.map((step, index) => (

              <Reveal
                key={step.number}
                delay={index * 0.1}
              >

                <motion.div
                  whileHover={{ y: -5 }}
                  className="border-t-2 border-black pt-6 transition-colors duration-300 dark:border-white"
                >

                  <p className="text-sm font-semibold text-gray-400 dark:text-gray-500">
                    {step.number}
                  </p>

                  <h3 className="mt-4 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>

                </motion.div>

              </Reveal>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY WORK WITH ME
      ===================================================== */}

      <section className="border-t border-gray-200 bg-gray-50 px-6 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 md:grid-cols-2">

            <Reveal>

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                  Why Work With Me
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  More than just building websites.
                </h2>

              </div>

            </Reveal>


            <div className="space-y-8">

              <Reveal delay={0.1}>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >

                  <h3 className="text-xl font-bold">
                    Business-focused thinking
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                    I focus on understanding what your business actually
                    needs instead of simply building technology for the
                    sake of it.
                  </p>

                </motion.div>

              </Reveal>


              <Reveal delay={0.2}>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >

                  <h3 className="text-xl font-bold">
                    Practical solutions
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                    My goal is to create solutions that are useful,
                    maintainable and capable of solving real problems.
                  </p>

                </motion.div>

              </Reveal>


              <Reveal delay={0.3}>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >

                  <h3 className="text-xl font-bold">
                    Long-term support
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                    A project doesn't have to end when it launches.
                    I can continue helping with maintenance,
                    improvements and technical support.
                  </p>

                </motion.div>

              </Reveal>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">

          <Reveal>

            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-gray-200 bg-white px-8 py-16 text-center shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 md:px-16"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                Have a project in mind?
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                Let's build something meaningful.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                Tell me about your idea, your business and what you're
                trying to achieve. Let's figure out the best digital
                solution together.
              </p>

              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-block"
              >

                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Let's work together →
                </Link>

              </motion.div>

            </motion.div>

          </Reveal>

        </div>
      </section>

    </main>
  );
}