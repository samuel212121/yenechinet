"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Users, Send, Music2, CheckCircle2 } from "lucide-react";
import { SlideIn, FadeUp } from "@/components/Motion";

const roles = ["Shipper", "Driver", "Investor", "Partner", "Other"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", role: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative bg-navy-deep py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light" />
        <div className="absolute -top-20 right-1/3 h-72 w-72 rounded-full glow-red blur-3xl opacity-40" />
        <FadeUp className="relative text-center px-6">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white">
            Get in Touch · <span className="text-gold">ያነጋግሩን</span>
          </h1>
          <p className="mt-4 text-white/55 max-w-md mx-auto">
            We are always here to help shippers, drivers, and partners.
          </p>
        </FadeUp>
      </section>

      <section className="py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <SlideIn from="left">
            <h2 className="font-display text-2xl font-semibold text-navy mb-8">Contact Information</h2>
            <ul className="space-y-5">
              {[
                { icon: MapPin,  label: "Address", value: "Addis Ababa, Ethiopia" },
                { icon: Phone,   label: "Call Centre", value: "8499 · +251-9 01044871 " },
                { icon: Mail,    label: "Email", value: "info@yenechinet.com" },
                { icon: Clock,   label: "Hours", value: "Mon–Fri 9AM–6PM · Sat 9AM–1PM" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                    <item.icon className="text-red" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-ink/40 font-medium">{item.label}</p>
                    <p className="text-navy font-medium">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              {[{ icon: Users, label: "Facebook" }, { icon: Send, label: "Telegram" }, { icon: Music2, label: "TikTok" }].map((s) => (
                <a key={s.label} aria-label={s.label} href="#"
                  className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-red transition-colors">
                  <s.icon size={16} />
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden h-52 bg-navy/10 flex items-center justify-center border border-navy/10">
              <p className="text-ink/30 text-sm">Map — Addis Ababa, Ethiopia</p>
            </div>
          </SlideIn>

          {/* Right — form */}
          <SlideIn from="right">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-light rounded-3xl p-12 flex flex-col items-center justify-center h-full text-center border border-navy/5"
              >
                <CheckCircle2 className="text-green-500 mb-4" size={48} />
                <h3 className="font-display text-xl font-semibold text-navy">Message Sent!</h3>
                <p className="mt-2 text-ink/60">We will contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <div className="glass-light rounded-3xl p-8 border border-navy/5">
                <h2 className="font-display text-2xl font-semibold text-navy mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: "name", label: "Full Name", type: "text", required: true },
                    { name: "phone", label: "Phone Number", type: "tel", required: true },
                    { name: "email", label: "Email Address (optional)", type: "email", required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="text-xs font-medium text-ink/50 block mb-1">{field.label}</label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-red/30"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-xs font-medium text-ink/50 block mb-1">I am a:</label>
                    <select
                      required
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-red/30"
                    >
                      <option value="">Select role</option>
                      {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-ink/50 block mb-1">Message</label>
                    <textarea
                      required
                      maxLength={200}
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-red/30 resize-none"
                    />
                    <p className="text-right text-ink/30 text-xs mt-1">{form.message.length}/200</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-xl bg-red py-4 text-white font-semibold shadow-lg shadow-red/20"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            )}
          </SlideIn>
        </div>
      </section>
    </main>
  );
}
