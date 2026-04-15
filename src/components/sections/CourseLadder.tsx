"use client";

import { motion } from "framer-motion";
import { GraduationCap, TrendingUp, Trophy, Zap } from "lucide-react";
import Link from "next/link";

const ladderSteps = [
  {
    name: "Basic",
    title: "Foundation",
    icon: GraduationCap,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    description: "Master the fundamentals of market mechanics and chart reading.",
    price: "₹2,999 - ₹4,999"
  },
  {
    name: "Silver",
    title: "Growth",
    icon: TrendingUp,
    color: "text-zinc-300",
    bgColor: "bg-zinc-300/10",
    borderColor: "border-zinc-300/20",
    description: "Advanced price action and intraday trading strategies.",
    price: "₹7,999 - ₹12,999"
  },
  {
    name: "Gold",
    title: "Advanced",
    icon: Trophy,
    color: "text-gold",
    bgColor: "bg-gold/10",
    borderColor: "border-gold/20",
    description: "F&O strategies, capital allocation, and trading psychology.",
    price: "₹19,999 - ₹29,999"
  },
  {
    name: "Platinum",
    title: "Elite",
    icon: Zap,
    color: "text-gold-highlight",
    bgColor: "bg-gold-highlight/10",
    borderColor: "border-gold-highlight/20",
    description: "Direct mentorship, live sessions, and portfolio management.",
    price: "₹39,999 - ₹79,999"
  }
];

export default function CourseLadder() {
  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl"
          >
            Your Path to <span className="text-brand-navy">Consistency</span>
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            From absolute beginner to professional trader, our structured curriculum guides you every step of the way.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) - Light Mode */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ladderSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 lg:p-8 rounded-[2.5rem] bg-[#FCF5D8] border border-yellow-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6 inline-flex p-4 rounded-3xl bg-white/50 border border-yellow-200">
                  <step.icon className={`h-8 w-8 ${step.color.replace('text-gold', 'text-brand-navy').replace('text-blue-400', 'text-brand-navy')}`} />
                </div>
                
                <div className="mb-4">
                  <span className={`text-sm font-bold tracking-widest uppercase text-brand-navy`}>
                    {step.name}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-sm mb-6 leading-relaxed font-medium">
                  {step.description}
                </p>

                <div className="mt-auto pt-6 border-t border-yellow-200">
                  <div className="text-brand-navy font-black text-2xl mb-4">{step.price}</div>
                  <Link
                    href={`/courses#${step.name.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:gap-3 transition-all"
                  >
                    Enroll Now <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
