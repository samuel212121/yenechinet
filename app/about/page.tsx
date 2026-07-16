"use client";


import { motion } from "framer-motion";

import { ExternalLink } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { team, marketStats } from "@/lib/data";

const values = ["Efficiency", "Transparency", "Trust", "Innovation", "Local Pride"];


export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-navy-deep py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light" />
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full glow-red blur-3xl opacity-30" />
        <div className="relative text-center px-6 mx-auto max-w-3xl">
          <FadeUp>
            <p className="text-gold text-sm font-medium tracking-wide mb-3">About Us</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              We Are Building<br />Ethiopia&apos;s Freight Future
            </h1>
            <p className="mt-6 text-white/60 text-lg leading-relaxed">
              Yene Chinet was built by a team of Ethiopian entrepreneurs and engineers who saw the chaos in
              the logistics sector and decided to fix it — with technology, transparency, and trust.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission / Vision / Values — 3D flip cards */}
      <section className="py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              accent: "red",
              label: "Mission",
              text: "To simplify and digitize logistics services in Ethiopia by connecting transport providers with customers efficiently.",
            },
            {
              accent: "navy",
              label: "Vision",
              text: "To become Ethiopia's leading digital logistics platform — starting from Addis Ababa and expanding nationwide.",
            },
            {
              accent: "gold",
              label: "Values",
              text: null,
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, rotateY: -20, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-navy/5 shadow-glass-light"
            >
              <span
                className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${
                  card.accent === "red"
                    ? "bg-red/10 text-red"
                    : card.accent === "navy"
                    ? "bg-navy/10 text-navy"
                    : "bg-gold/15 text-gold"
                }`}
              >
                {card.label}
              </span>
              {card.text ? (
                <p className="text-ink/70 leading-relaxed">{card.text}</p>
              ) : (
                <div className="flex flex-wrap gap-2 mt-2">
                  {values.map((v) => (
                    <span key={v} className="bg-gold/10 text-gold font-medium text-sm px-3 py-1 rounded-full">
                      {v}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full glow-gold blur-3xl opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">The Team</h2>
            <p className="mt-3 text-white/50">The people building Ethiopia&apos;s logistics future.</p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group glass rounded-2xl p-7 text-center hover:border hover:border-gold/30 transition-all"
              >
                {/* Avatar placeholder */}
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-red to-navy-light flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="font-display text-2xl font-semibold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-white">{member.name}</h3>
                <p className="text-gold text-sm mt-1">{member.title}</p>
                <p className="mt-3 text-white/50 text-sm leading-relaxed">{member.bio}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="mx-auto text-white/50 hover:text-gold" size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market opportunity */}
      <section className="py-24 bg-paper relative overflow-hidden">
        <div className="absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy">
              A Market Ready for Digital Transformation
            </h2>
            <p className="mt-3 text-ink/60">The opportunity is enormous. The timing is now.</p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {marketStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-navy rounded-2xl p-7 text-center"
              >
                <p className="font-display text-3xl font-semibold text-gold">{stat.value}</p>
                <p className="mt-2 text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <FadeUp className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-white font-semibold hover:bg-navy-light transition-colors"
            >
              View Our Investor Deck →
            </a>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
