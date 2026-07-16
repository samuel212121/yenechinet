"use client";

import { motion } from "framer-motion";
import {
  Zap,
  MapPin,
  DollarSign,
  ShieldCheck,
  BadgeCheck,
  Heart,
} from "lucide-react";
import { FadeUp } from "./Motion";
import { whyChinet } from "@/lib/data";

const icons = [Zap, MapPin, DollarSign, ShieldCheck, BadgeCheck, Heart];

export default function WhyChinet() {
  return (
    <section className="py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy">
            Why Yene Chinet?
          </h2>
          <p className="mt-3 text-ink/60">
            The smarter way to move cargo in Ethiopia.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChinet.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gray-50 hover:bg-white rounded-2xl p-7 border border-transparent hover:border-l-4 hover:border-l-red hover:shadow-glass-light transition-all"
              >
                <Icon className="text-red" size={24} />
                <h3 className="font-display text-lg font-semibold text-navy mt-4">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
