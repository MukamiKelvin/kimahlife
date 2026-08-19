export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Contact Hero */}
      <section className="px-8 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Get In Touch
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Have a project in mind?
            <span className="block text-gray-400">
              Let's build it together.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you need a website, an online store, custom
            software or help improving your digital presence, I'd
            love to hear about your project.
          </p>

        </div>
      </section>

      {/* Contact Content */}
      <section className="border-t border-gray-200 bg-gray-50 px-8 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">

          {/* Contact Information */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Let's Talk
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Tell me about your project.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Have an idea you're ready to bring to life? Send me a
              message and let's discuss how I can help turn it into
              a practical digital solution.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:hello@kimahlife.com"
                  className="mt-2 inline-block text-lg font-medium transition hover:text-gray-500"
                >
                  mukamikelvinkimanthi@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                  Location
                </p>

                <p className="mt-2 text-lg font-medium">
                  Nairobi, Kenya
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                  Availability
                </p>

                <p className="mt-2 text-lg font-medium">
                  Available for freelance projects
                </p>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-10 border-t border-gray-200 pt-8">

              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                Connect with me
              </p>

              <div className="mt-4 flex flex-wrap gap-5">

                <a
                  href="https://www.linkedin.com/in/kelvin-kimanthi-mukami-60bb19241/"
                  className="text-sm font-semibold transition hover:text-gray-500"
                >
                  LinkedIn →
                </a>

                <a
                  href="https://github.com/MukamiKelvin"
                  className="text-sm font-semibold transition hover:text-gray-500"
                >
                  GitHub →
                </a>

                <a
                  href="https://www.tiktok.com/@mukamikelvin?lang=en-GB"
                  className="text-sm font-semibold transition hover:text-gray-500"
                >
                  TikTok →
                </a>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-10">

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="text-sm font-semibold"
                >
                  Company / Business
                </label>

                <input
                  id="company"
                  type="text"
                  placeholder="Your company or business"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="project"
                  className="text-sm font-semibold"
                >
                  What do you need?
                </label>

                <select
                  id="project"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-black"
                >
                  <option value="">Select a service</option>
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
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your idea, goals, timeline or anything else that would help me understand your project..."
                  className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Send message →
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-8 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            Let's create something great
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Your idea could be the next project.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Don't worry if everything isn't figured out yet. We can
            start with a conversation and work out the details
            together.
          </p>

        </div>
      </section>

    </main>
  );
}