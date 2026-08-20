"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className="fixed left-0 top-0 z-[100] w-full border-b border-gray-200/80 bg-white/90 text-black backdrop-blur-xl transition-colors duration-300 dark:border-gray-800/80 dark:bg-black/90 dark:text-white"
    >
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4"
        aria-label="Main navigation"
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 text-xl font-bold tracking-tight sm:text-2xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block transition-opacity duration-200 hover:opacity-70"
          >
            KimahLife
          </motion.span>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <Link
                  href={link.href}
                  className={`relative whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-black dark:bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            DESKTOP RIGHT SIDE
        ===================================================== */}

        <div className="hidden items-center gap-3 md:flex">
          {/* Theme Toggle */}

          {mounted && (
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileHover={{
                scale: 1.05,
                rotate: 5,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-base transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {theme === "dark" ? "☀️" : "🌙"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          )}

          {/* Desktop CTA */}

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex whitespace-nowrap rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Let's work together
            </Link>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE CONTROLS
        ===================================================== */}

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}

          {mounted && (
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm transition-colors dark:border-gray-700 dark:bg-gray-900"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {theme === "dark" ? "☀️" : "🌙"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          )}

          {/* Mobile Menu Button */}

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative h-5 w-5">
              {/* Top */}

              <motion.span
                animate={
                  isOpen
                    ? {
                        rotate: 45,
                        y: 7,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-black dark:bg-white"
              />

              {/* Middle */}

              <motion.span
                animate={
                  isOpen
                    ? {
                        opacity: 0,
                      }
                    : {
                        opacity: 1,
                      }
                }
                className="absolute left-0 top-2 h-0.5 w-5 rounded-full bg-black dark:bg-white"
              />

              {/* Bottom */}

              <motion.span
                animate={
                  isOpen
                    ? {
                        rotate: -45,
                        y: -7,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                className="absolute left-0 top-4 h-0.5 w-5 rounded-full bg-black dark:bg-white"
              />
            </span>
          </motion.button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="overflow-hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black md:hidden"
          >
            <div className="px-4 py-5 sm:px-6 sm:py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-gray-100 text-black dark:bg-gray-900 dark:text-white"
                            : "text-gray-600 hover:bg-gray-50 hover:text-black dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: navLinks.length * 0.05,
                  }}
                >
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="mt-4 flex w-full items-center justify-center rounded-full bg-black px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  >
                    Let's work together →
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}