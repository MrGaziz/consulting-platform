"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Strategic Consulting",
    description:
      "We partner with leadership teams to define winning strategies. From market entry to portfolio optimization.",
    capabilities: ["Corporate Strategy", "M&A Advisory", "Portfolio Optimization"],
  },
  {
    number: "02",
    title: "Business Transformation",
    description:
      "Large-scale change requires execution excellence. We embed with your teams to drive measurable outcomes.",
    capabilities: ["Operating Model", "Digital Transformation", "Cost Optimization"],
  },
  {
    number: "03",
    title: "Market Intelligence",
    description:
      "Data-driven insights that reveal hidden opportunities. We decode market signals for competitive advantage.",
    capabilities: ["Competitive Analysis", "Market Sizing", "Trend Forecasting"],
  },
  {
    number: "04",
    title: "Growth Advisory",
    description:
      "Scaling requires discipline. We help build the systems, teams, and processes to sustain momentum.",
    capabilities: ["Go-to-Market", "Revenue Operations", "International Expansion"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-40 bg-[#F8F6F3] overflow-hidden">
      <div className="relative z-10 px-6">
        {/* Header - Centered */}
        <div className="text-center mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B8D4E3]" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#7A7573]">
                Our Expertise
              </span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B8D4E3]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4A4543] leading-[1.1] tracking-[-0.02em]">
              Services built for
              <span className="italic font-light text-[#7EB0C9]"> impact</span>
            </h2>
          </motion.div>
        </div>

        {/* Services Grid 2x2 - Centered */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 lg:p-10 bg-[#FFFFFF] border border-[#E5E0DB] hover:border-[#7EB0C9]/40 transition-all duration-500 text-center">
                  <span className="text-[#7EB0C9] text-sm font-medium tracking-wider">{service.number}</span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-[#4A4543] mb-4 mt-2 group-hover:text-[#7EB0C9] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#7A7573] font-light leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-[#9A9593] border border-[#D8D3CE]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[#7EB0C9] hover:text-[#4A4543] transition-colors duration-300 group"
          >
            <span className="text-sm tracking-wide">Let's discuss your challenge</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
