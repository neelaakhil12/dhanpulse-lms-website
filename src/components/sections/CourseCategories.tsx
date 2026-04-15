"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  Brain, 
  Zap, 
  Clock, 
  ShieldAlert 
} from "lucide-react";

const categories = [
  {
    title: "Technical Analysis",
    description: "Master price action, patterns, and indicators.",
    icon: <TrendingUp className="w-8 h-8 text-brand-green" />,
    href: "/courses?category=technical",
  },
  {
    title: "Options Trading",
    description: "Strategies for consistent income in all markets.",
    icon: <Target className="w-8 h-8 text-gold-highlight" />,
    href: "/courses?category=options",
  },
  {
    title: "Trading Psychology",
    description: "Develop the mindset of a professional elite trader.",
    icon: <Brain className="w-8 h-8 text-brand-green" />,
    href: "/courses?category=psychology",
  },
  {
    title: "Intraday Mastery",
    description: "Scalping and day trading systems for daily profit.",
    icon: <Zap className="w-8 h-8 text-gold-highlight" />,
    href: "/courses?category=intraday",
  },
  {
    title: "Swing Trading",
    description: "Positional strategies for wealth building.",
    icon: <Clock className="w-8 h-8 text-brand-green" />,
    href: "/courses?category=swing",
  },
  {
    title: "Risk Management",
    description: "Protect your capital with SEBI-compliant systems.",
    icon: <ShieldAlert className="w-8 h-8 text-gold-highlight" />,
    href: "/courses?category=risk",
  },
];

export default function CourseCategories() {
  return (
    <section className="py-16 bg-[#2D1B0D] relative overflow-hidden">
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Background Glow (Very Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            Explore <span className="text-gold-highlight">Learning Path</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto font-medium text-lg"
          >
            From basics to institutional strategies, dive into specialized categories designed for Indian stock market success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 inline-block group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <div className="group-hover:text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-navy transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center text-brand-navy text-sm font-bold opacity-0 group-hover:opacity-100 transition-all">
                  Browse Section <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
