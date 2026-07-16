"use client";

import { CheckCircle2, ArrowRight, Package, Truck } from "lucide-react";
import { SlideIn } from "./Motion";
import { shipperFeatures, driverFeatures } from "@/lib/data";

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full glow-red blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full glow-gold blur-3xl opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SlideIn from="left">
            <div className="glass rounded-3xl p-9 h-full flex flex-col">
              <div className="h-12 w-12 rounded-xl bg-red/20 flex items-center justify-center mb-5">
                <Package className="text-red" size={22} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">
                For Shippers
              </h3>
              <p className="mt-2 text-white/50 text-sm">
                Businesses, traders, construction companies, individuals who
                need to move cargo.
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {shipperFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/75 text-sm">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#request"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 text-white font-semibold text-sm w-fit hover:gap-3 transition-all"
              >
                Request a Truck <ArrowRight size={16} />
              </a>
            </div>
          </SlideIn>

          <SlideIn from="right">
            <div className="glass rounded-3xl p-9 h-full flex flex-col">
              <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center mb-5">
                <Truck className="text-gold" size={22} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">
                For Drivers
              </h3>
              <p className="mt-2 text-white/50 text-sm">
                Truck owners, pickup drivers, van operators, fleet owners
                looking for steady work.
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {driverFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/75 text-sm">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/for-drivers"
                className="mt-8 inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-white font-semibold text-sm w-fit hover:gap-3 transition-all border border-white/20"
              >
                Register as Driver <ArrowRight size={16} />
              </a>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
