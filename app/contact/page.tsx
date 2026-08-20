"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      project: formData.get("project"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      console.error(err);

      if (err instanceof Error) {
        setError(
          err.message ||
            "Unable to send your message. Please try again."
        );
      } else {
        setError(
          "Unable to send your message. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">

      {/* =====================================================
          CONTACT HERO
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
                Get In Touch
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
                Have a project in mind?
                <span className="block text-gray-400 dark:text-gray-500">
                  Let's build it together.
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
                Whether you need a website, an online store, custom
                software or help improving your digital presence, I'd
                love to hear about your project.
              </motion.p>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section className="border-t border-gray-200 bg-gray-50 px-6 py-20 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 sm:px-8 md:py-24">

        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <Reveal>

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                Let's Talk
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Tell me about your project.
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600 dark:text-gray-400">
                Have an idea you're ready to bring to life? Send me a
                message and let's discuss how I can help turn it into
                a practical digital solution.
              </p>


              {/* Contact Details */}

              <div className="mt-10 space-y-6">

                {/* Email */}

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:mukamikelvinkimanthi@gmail.com"
                    className="mt-2 inline-block text-lg font-medium transition hover:text-gray-500 dark:hover:text-gray-400"
                  >
                    mukamikelvinkimanthi@gmail.com
                  </a>

                </motion.div>


                {/* Location */}

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
                    Location
                  </p>

                  <p className="mt-2 text-lg font-medium">
                    Nairobi, Kenya
                  </p>

                </motion.div>


                {/* Availability */}

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
                    Availability
                  </p>

                  <p className="mt-2 text-lg font-medium">
                    Available for freelance projects
                  </p>

                </motion.div>

              </div>


              {/* Social Links */}

              <div className="mt-10 border-t border-gray-200 pt-8 transition-colors duration-300 dark:border-gray-800">

                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
                  Connect with me
                </p>

                <div className="mt-4 flex flex-wrap gap-5">

                  <motion.a
                    href="https://www.linkedin.com/in/kelvin-kimanthi-mukami-60bb19241/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="text-sm font-semibold transition hover:text-gray-500 dark:hover:text-gray-400"
                  >
                    LinkedIn →
                  </motion.a>

                  <motion.a
                    href="https://github.com/MukamiKelvin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="text-sm font-semibold transition hover:text-gray-500 dark:hover:text-gray-400"
                  >
                    GitHub →
                  </motion.a>

                  <motion.a
                    href="https://www.tiktok.com/@mukamikelvin?lang=en-GB"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="text-sm font-semibold transition hover:text-gray-500 dark:hover:text-gray-400"
                  >
                    TikTok →
                  </motion.a>

                  <motion.a
                    href="https://www.facebook.com/mukami.kelvin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="text-sm font-semibold transition hover:text-gray-500 dark:hover:text-gray-400"
                  >
                    Facebook →
                  </motion.a>

                </div>

              </div>

            </motion.div>

          </Reveal>


          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <Reveal delay={0.15}>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 md:p-10"
            >

              {submitted ? (

                /* Success Message */

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex min-h-[500px] flex-col items-center justify-center text-center"
                >

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      type: "spring",
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl dark:bg-gray-800"
                  >
                    ✓
                  </motion.div>

                  <h2 className="mt-6 text-3xl font-bold tracking-tight">
                    Message sent!
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-gray-600 dark:text-gray-400">
                    Thanks for reaching out. I've received your message
                    and will get back to you as soon as possible.
                  </p>

                  <motion.button
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                    className="mt-8 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    Send another message
                  </motion.button>

                </motion.div>

              ) : (

                /* Form */

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* Name */}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >

                    <label
                      htmlFor="name"
                      className="text-sm font-semibold"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
                    />

                  </motion.div>


                  {/* Email */}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >

                    <label
                      htmlFor="email"
                      className="text-sm font-semibold"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
                    />

                  </motion.div>


                  {/* Company */}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >

                    <label
                      htmlFor="company"
                      className="text-sm font-semibold"
                    >
                      Company / Business
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company or business"
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
                    />

                  </motion.div>


                  {/* Project Type */}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >

                    <label
                      htmlFor="project"
                      className="text-sm font-semibold"
                    >
                      What do you need?
                    </label>

                    <select
                      id="project"
                      name="project"
                      required
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-black dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
                    >

                      <option value="">
                        Select a service
                      </option>

                      <option value="website">
                        Website Development
                      </option>

                      <option value="wordpress">
                        WordPress Website
                      </option>

                      <option value="ecommerce">
                        E-commerce Website
                      </option>

                      <option value="software">
                        Software Development
                      </option>

                      <option value="seo">
                        SEO
                      </option>

                      <option value="maintenance">
                        Website Maintenance
                      </option>

                      <option value="other">
                        Something else
                      </option>

                    </select>

                  </motion.div>


                  {/* Message */}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >

                    <label
                      htmlFor="message"
                      className="text-sm font-semibold"
                    >
                      Tell me about your project
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell me about your idea, goals, timeline or anything else that would help me understand your project..."
                      className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
                    />

                  </motion.div>


                  {/* Error */}

                  {error && (

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400"
                    >
                      {error}
                    </motion.div>

                  )}


                  {/* Submit */}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { y: -3 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    className="w-full rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  >
                    {loading
                      ? "Sending message..."
                      : "Send message →"}
                  </motion.button>

                </form>

              )}

            </motion.div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="px-6 py-20 transition-colors duration-300 dark:bg-black sm:px-8 md:py-24">

        <div className="mx-auto max-w-4xl text-center">

          <Reveal>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
            >

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">
                Let's create something great
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
                Your idea could be the next project.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                Don't worry if everything isn't figured out yet. We can
                start with a conversation and work out the details
                together.
              </p>

            </motion.div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}