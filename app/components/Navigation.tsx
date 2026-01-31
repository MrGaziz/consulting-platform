"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="px-6">
        <div className="flex items-center justify-center h-20 lg:h-24 gap-8 lg:gap-12">
          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-sans text-sm tracking-widest uppercase transition-colors group text-[#6A6563] hover:text-[#4A4543]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7EB0C9] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <Link href="/" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="font-serif text-xl lg:text-2xl tracking-wider transition-colors duration-300 text-[#4A4543]"
            >
              <span className="font-light">COLIBRI</span>
              <span className="font-semibold"> GLOBAL</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link
              href="#contact"
              className="relative font-sans text-sm tracking-widest uppercase transition-colors group text-[#6A6563] hover:text-[#4A4543]"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7EB0C9] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 bg-[#7EB0C9] text-white hover:bg-[#6A9DB8]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-px transition-all duration-300 bg-[#4A4543] ${
                isMobileMenuOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1"
              }`}
            />
            <span
              className={`w-6 h-px transition-all duration-300 bg-[#4A4543] ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-px transition-all duration-300 bg-[#4A4543] ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-white md:hidden pt-24"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-24">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-3xl tracking-wider text-[#5A5553] hover:text-[#7A7573] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 px-8 py-4 bg-[#7EB0C9] text-white text-sm tracking-widest uppercase hover:bg-[#6A9DB8] transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
