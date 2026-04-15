"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart2, Shield, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Glows (Softer for Light Mode) */}
      <div className="absolute top-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-brand-green/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-brand-navy/5 px-4 py-1.5 text-sm font-semibold text-brand-navy"
          >
            <Shield className="h-4 w-4" />
            <span>SEBI-Registered Investment Advisory</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            Learn & Trade with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-green">
              Expert Institutional
            </span> Guidance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg text-gray-600 md:text-xl leading-relaxed"
          >
            Master the Indian stock market with research-driven systems. Guided by Ajay Rao Devoor, we help you achieve consistency through structured learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/courses"
              className="flex items-center justify-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-navy-dark hover:scale-105 active:scale-95 shadow-lg"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/courses"
              className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-300"
            >
              View Courses
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 shadow-sm border border-slate-100">
                <BarChart2 className="h-6 w-6 text-brand-navy" />
              </div>
              <span className="text-sm font-bold text-gray-600">Advanced Analysis</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 shadow-sm border border-slate-100">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <span className="text-sm font-bold text-gray-600">Risk Management</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 shadow-sm border border-slate-100">
                <TrendingUp className="h-6 w-6 text-brand-green" />
              </div>
              <span className="text-sm font-bold text-gray-600">Growth Strategy</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 shadow-sm border border-slate-100">
                <BarChart2 className="h-6 w-6 text-gold" />
              </div>
              <span className="text-sm font-bold text-gray-600">Expert Mentorship</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
