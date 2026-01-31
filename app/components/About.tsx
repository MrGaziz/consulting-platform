"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40 bg-[#F2EDE8] overflow-hidden">
      <div className="relative z-10 px-6">
        {/* Header - Centered */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B8D4E3]" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#7A7573]">
                About Us
              </span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B8D4E3]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4A4543] leading-[1.1] tracking-[-0.02em]">
              Built on trust,
              <span className="italic font-light text-[#7EB0C9]"> driven by results</span>
            </h2>
          </motion.div>
        </div>

        {/* Stats - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-12 lg:gap-20"
        >
          {[
            { value: "15+", label: "Years" },
            { value: "200+", label: "Transformations" },
            { value: "50+", label: "Countries" },
            { value: "98%", label: "Retention" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <span className="font-serif text-5xl lg:text-6xl text-[#4A4543]">{stat.value}</span>
              <p className="text-xs tracking-[0.15em] uppercase text-[#9A9593] mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
