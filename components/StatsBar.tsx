"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { trustStats } from "@/lib/data";

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-navy-deep py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red/10 via-transparent to-gold/10" />
      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {trustStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl sm:text-4xl font-semibold text-white">
              {inView ? (
                <CountUp end={stat.value} duration={2} />
              ) : (
                0
              )}
              <span className="text-gold">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-white/50 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
