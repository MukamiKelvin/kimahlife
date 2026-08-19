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
    <main className="min-h-screen bg-white text-black">

      {/* Services Hero */}
      <section className="px-8 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            What I Do
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Digital solutions
            <span className="block text-gray-400">
              built for your business.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            From professional websites and online stores to custom
            software and SEO, I help businesses build and improve
            their digital presence.
          </p>

          {/* Hero CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Start a project →
            </a>
          </div>

        </div>
      </section>


      {/* Services */}
      <section className="border-t border-gray-200 bg-gray-50 px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-2">

            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
              >

                {/* Number + Label */}
                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-sm font-semibold text-white">
                    {service.number}
                  </div>

                  <span className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
                    Service
                  </span>

                </div>


                {/* Title */}
                <h2 className="mt-8 text-2xl font-bold tracking-tight md:text-3xl">
                  {service.title}
                </h2>


                {/* Description */}
                <p className="mt-4 max-w-xl leading-7 text-gray-600">
                  {service.description}
                </p>


                {/* Benefits */}
                <div className="mt-7">

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                    What you get
                  </p>

                  <ul className="mt-4 space-y-3">

                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                      >
                        <span className="mt-0.5 font-semibold text-black">
                          ✓
                        </span>

                        <span>{benefit}</span>
                      </li>
                    ))}

                  </ul>

                </div>


                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">

                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {technology}
                    </span>
                  ))}

                </div>


                {/* Service CTA */}
                <div className="mt-8 border-t border-gray-100 pt-6">

                  <a
                    href="/contact"
                    className="inline-flex text-sm font-semibold transition group-hover:text-gray-500"
                  >
                    Discuss this service →
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* Process */}
      <section className="px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              My Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              From idea to launch.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A simple and transparent process designed to keep your
              project focused from the first conversation to launch.
            </p>

          </div>


          {/* Process Steps */}
          <div className="mt-14 grid gap-8 md:grid-cols-4">

            {process.map((step) => (
              <div
                key={step.number}
                className="border-t-2 border-black pt-6"
              >

                <p className="text-sm font-semibold text-gray-400">
                  {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Why Work With Me */}
      <section className="border-t border-gray-200 bg-gray-50 px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Why Work With Me
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                More than just building websites.
              </h2>

            </div>


            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-bold">
                  Business-focused thinking
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  I focus on understanding what your business actually
                  needs instead of simply building technology for the
                  sake of it.
                </p>
              </div>


              <div>
                <h3 className="text-xl font-bold">
                  Practical solutions
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  My goal is to create solutions that are useful,
                  maintainable and capable of solving real problems.
                </p>
              </div>


              <div>
                <h3 className="text-xl font-bold">
                  Long-term support
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  A project doesn't have to end when it launches.
                  I can continue helping with maintenance,
                  improvements and technical support.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl bg-black px-8 py-16 text-center md:px-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Have a project in mind?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let's build something meaningful.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-400">
              Tell me about your idea, your business and what you're
              trying to achieve. Let's figure out the best digital
              solution together.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Let's work together →
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}