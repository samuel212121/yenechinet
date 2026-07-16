"use client";

import { motion } from "framer-motion";
import { Truck, Package, Home } from "lucide-react";
import { FadeUp } from "./Motion";
import { vehicleCategories } from "@/lib/data";

const icons = [Truck, Package, Home];

export default function VehicleCategories() {
  return (
    <section className="py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy">
            Every Load. Every Vehicle.
          </h2>
          <p className="mt-3 text-ink/60">
            From a single box to a full truckload — we have the right vehicle
            for your cargo.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicleCategories.map((cat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-8 border border-navy/5 shadow-glass-light hover:border-t-4 hover:border-t-red transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-red/10 transition-colors">
                  <Icon className="text-navy group-hover:text-red transition-colors" size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  {cat.title}
                </h3>
                <p className="text-gold font-semibold text-sm mt-1">{cat.range}</p>
                <p className="mt-3 text-ink/60 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
