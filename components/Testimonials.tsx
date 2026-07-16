"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FadeUp } from "./Motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full glow-red blur-3xl opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <FadeUp className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
            What Our Early Users Say
          </h2>
          <p className="mt-3 text-white/50">
            Real stories from our pilot users and beta testers.
          </p>
        </FadeUp>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x lg:grid lg:grid-cols-3 lg:overflow-visible no-scrollbar">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative glass rounded-2xl p-7 min-w-[280px] snap-center shrink-0 lg:min-w-0"
            >
              <Quote className="absolute top-4 right-5 text-white/10" size={48} />
              <p className="relative text-white/80 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gold text-xs mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
