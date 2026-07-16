"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./Motion";

const partners = ["Enat Bank", "Awash Bank", "", "Addis Traders", "Bole Construction", ""];

export default function PartnersCTA() {
  return (
    <>
      <section className="py-16 bg-paper overflow-hidden">
        <FadeUp className="text-center mb-10">
          <p className="text-ink/50 text-sm tracking-wide uppercase">
            Trusted by businesses across Addis Ababa
          </p>
        </FadeUp>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={i}
                className="font-display text-xl text-navy/30 font-semibold"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-red overflow-hidden">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl font-semibold text-white"
          >
            Ready to Move Your Cargo?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/85"
          >
            Join thousands of businesses and drivers on Ethiopia&apos;s smartest
            freight platform.
          </motion.p>
          <p className="mt-1 text-white/70 font-display">አሁን ይጀምሩ — ነፃ ነው</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#download"
              className="rounded-full bg-white px-7 py-4 text-red font-semibold"
            >
              Download the App
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/for-drivers"
              className="rounded-full border-2 border-white px-7 py-4 text-white font-semibold"
            >
              Register as Driver
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
