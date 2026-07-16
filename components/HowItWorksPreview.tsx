"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { howItWorksSteps } from "@/lib/data";
import { FadeUp } from "./Motion";

export default function HowItWorksPreview() {
  return (
    <section className="py-24 bg-paper relative">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy">
            How Yene Chinet Works
          </h2>
          <p className="mt-3 text-ink/60">
            From request to delivery in 4 simple steps
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="glass-light rounded-2xl p-7 h-full shadow-glass-light border border-navy/5">
                <span className="font-display text-sm text-red font-semibold">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-navy mt-2">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < howItWorksSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-red"
                >
                  <ArrowRight size={20} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.3} className="text-center mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-red pb-1 hover:gap-3 transition-all"
          >
            See Full Process <ArrowRight size={16} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
