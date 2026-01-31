"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F2EDE8]">
      {/* Background - Cloud Dancer inspired */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F3] to-[#F2EDE8]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B8D4E3]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#B8D4E3]/15 rounded-full blur-[120px]" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B8D4E3]" />
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#8A8583]">
            Strategic Advisory
          </span>
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B8D4E3]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4A4543] leading-[1.05] mb-8 tracking-[-0.02em] max-w-5xl"
        >
          We architect
          <br />
          <span className="italic font-light text-[#7EB0C9]">transformations</span>
          <br />
          that endure
        </motion.h1>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-16"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#7EB0C9] text-white text-sm font-semibold tracking-wide hover:bg-[#6A9DB8] transition-all duration-300"
          >
            Schedule a conversation
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide text-[#7EB0C9] border border-[#D8D3CE] hover:border-[#7EB0C9] hover:text-[#4A4543] transition-all duration-300"
          >
            Explore our work
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-12 lg:gap-16 pt-8 border-t border-[#E5E0DB]"
        >
          {[
            { value: "$12B+", label: "Value Created" },
            { value: "200+", label: "Transformations" },
            { value: "50+", label: "Countries" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-3xl lg:text-4xl text-[#4A4543] mb-1">{stat.value}</p>
              <p className="text-xs tracking-[0.15em] uppercase text-[#9A9593]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
