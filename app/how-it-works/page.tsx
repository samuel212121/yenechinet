"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/Motion";

const shipperSteps = [
  { title: "Open App", desc: "Customer opens Yene Chinet, logs in or creates account." },
  { title: "Enter Cargo Details", desc: "Pickup location, destination, cargo type (construction/household/retail), weight in kg or tons." },
  { title: "Confirm Pickup Time", desc: "&apos;Now&apos; (instant) or scheduled date/time." },
  { title: "See Price Estimate", desc: "Transparent price shown based on distance and cargo type." },
  { title: "Initialize Payment", desc: "Select Telebirr/Chapa/wallet. Escrow hold created." },
  { title: "Get Matched", desc: "Smart engine finds top driver. Driver confirms. Customer sees ETA and driver profile on map." },
  { title: "Track & Confirm", desc: "Live GPS tracking during trip. Customer confirms delivery. Payment released. Rate driver." },
];

const driverSteps = [
  { title: "Go Online", desc: "Driver opens app, sets status to ONLINE. GPS ping begins." },
  { title: "Receive Job Notification", desc: "Push notification with 90-second timer showing cargo details, distance, estimated earnings." },
  { title: "Accept or Reject", desc: "Tap Accept to claim job. First to accept wins. Timer countdown visible." },
  { title: "Arrive at Pickup", desc: "Navigate to pickup address. Photograph cargo. Tap 'Confirm Pickup'." },
  { title: "Deliver & Get Paid", desc: "Navigate to destination. Deliver. Both parties confirm. Earnings credited within 24 hours." },
];

export default function HowItWorksPage() {
  const [active, setActive] = useState<"shipper" | "driver">("shipper");
  const steps = active === "shipper" ? shipperSteps : driverSteps;

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-navy-deep py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light" />
        <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full glow-red blur-3xl opacity-40" />
        <FadeUp className="relative text-center px-6">
          <p className="text-gold text-sm font-medium tracking-wide mb-3">How It Works</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white">
            From Request to Delivery
          </h1>
          <p className="mt-4 text-white/55 max-w-xl mx-auto">
            A transparent, step-by-step process — whether you're moving cargo or driving for income.
          </p>
        </FadeUp>
      </section>

      {/* Tab switcher + timeline */}
      <section className="py-24 bg-paper">
        <div className="mx-auto max-w-3xl px-6">
          {/* Tabs */}
          <div className="flex gap-2 p-1.5 bg-white rounded-full shadow-glass-light w-fit mx-auto mb-16 border border-navy/10">
            {(["shipper", "driver"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors capitalize ${
                  active === tab ? "text-white" : "text-navy/60 hover:text-navy"
                }`}
              >
                {active === tab && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-full bg-navy"
                  />
                )}
                <span className="relative z-10">For {tab === "shipper" ? "Shippers" : "Drivers"}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              {/* Animated vertical line */}
              <motion.div
                className="absolute left-5 top-0 w-px bg-red/40 origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ height: "100%" }}
              />

              <div className="space-y-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                      className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center font-display font-semibold text-sm z-10 shadow-md ${
                        active === "shipper"
                          ? "bg-red text-white shadow-red/30"
                          : "bg-gold text-navy shadow-gold/30"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.div>
                    <div className="glass-light rounded-2xl px-6 py-4 flex-1 border border-navy/5">
                      <h3 className="font-display font-semibold text-navy">{step.title}</h3>
                      <p className="mt-1 text-ink/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <FadeUp delay={0.4} className="mt-14 text-center">
            <motion.a
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href={active === "shipper" ? "/for-shippers" : "/for-drivers"}
              className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 text-white font-semibold shadow-lg shadow-red/30"
            >
              {active === "shipper" ? "Request a Truck Now" : "Register as a Driver"} →
            </motion.a>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
