"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", company: "", message: "" });
    alert("Thank you for your message. We will be in touch soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-[#F8F6F3] overflow-hidden">
      <div className="relative z-10 px-6">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B8D4E3]" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#7A7573]">
                Get In Touch
              </span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B8D4E3]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4A4543] leading-[1.1] tracking-[-0.02em]">
              Let's create something
              <span className="italic font-light text-[#7EB0C9]"> extraordinary</span>
            </h2>
          </motion.div>
        </div>

        {/* Form - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-xl">
          <div className="p-8 lg:p-12 bg-[#FFFFFF] border border-[#E5E0DB]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] tracking-[0.2em] uppercase text-[#9A9593] mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-[#D8D3CE] focus:border-[#7EB0C9] outline-none transition-colors text-[#4A4543] placeholder:text-[#B5B0AB]"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] tracking-[0.2em] uppercase text-[#9A9593] mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-[#D8D3CE] focus:border-[#7EB0C9] outline-none transition-colors text-[#4A4543] placeholder:text-[#B5B0AB]"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-[10px] tracking-[0.2em] uppercase text-[#9A9593] mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-[#D8D3CE] focus:border-[#7EB0C9] outline-none transition-colors text-[#4A4543] placeholder:text-[#B5B0AB]"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] tracking-[0.2em] uppercase text-[#9A9593] mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-[#D8D3CE] focus:border-[#7EB0C9] outline-none transition-colors text-[#4A4543] placeholder:text-[#B5B0AB] resize-none"
                  placeholder="What's your challenge?"
                />
              </div>

              <div className="text-center pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#7EB0C9] text-white text-sm font-semibold tracking-wide hover:bg-[#6A9DB8] transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </div>
          </div>
        </motion.div>

        {/* Social Links - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12 text-center w-full"
        >
          <a
            href="https://wa.me/12125551234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#7A7573] hover:text-[#25D366] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-sm">WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/colibriglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#7A7573] hover:text-[#E4405F] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-sm">Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
