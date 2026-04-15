"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Overwhelmed by complex chart patterns and indicators?",
  "Losing money due to emotional trading and lack of discipline?",
  "Confused by conflicting market signals and 'expert' noise?",
  "Struggling to find a consistent, repeatable trading system?"
];

const solutions = [
  "Simplified price-action strategies that actually work.",
  "Deep psychological training to master your trading mindset.",
  "Clear, SEBI-registered research-driven trade signals.",
  "A step-by-step roadmap from beginner to professional trader."
];

export default function ProblemSolution() {
  return (
    <section className="bg-black py-12 lg:py-20 border-y border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
                Confused by <span className="text-red-500 line-through decoration-2">market noise?</span>
              </h2>
              <p className="text-zinc-400 text-lg">
                Most traders fail because they lack a structured system. We identify the traps that keep you from being profitable.
              </p>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
                  <AlertCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 p-6 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-navy/40 to-black border border-brand-navy/20"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
                The <span className="text-gold">DhanPulse</span> System
              </h2>
              <p className="text-zinc-400 text-lg">
                We provide a professional, research-based framework designed to take you from confusion to clarity.
              </p>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-brand-navy shrink-0 mt-0.5" />
                  <p className="text-zinc-200 font-medium">{solution}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="text-brand-navy font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn how it works <span className="text-xl">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
