"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CourseCardProps {
  id: string;
  name: string;
  level: string;
  price: string;
  duration: string;
  access: string;
  features: string[];
  color: "blue" | "zinc" | "gold" | "platinum";
}

const colorMap = {
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    text: "text-blue-400",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.1)]",
  },
  zinc: {
    border: "border-zinc-400/30",
    bg: "bg-zinc-400/5",
    text: "text-zinc-300",
    glow: "shadow-[0_0_30px_rgba(161,161,170,0.1)]",
  },
  gold: {
    border: "border-gold/30",
    bg: "bg-gold/5",
    text: "text-gold",
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.1)]",
  },
  platinum: {
    border: "border-gold-highlight/30",
    bg: "bg-gold-highlight/5",
    text: "text-gold-highlight",
    glow: "shadow-[0_0_40px_rgba(255,215,0,0.2)]",
  },
};

export default function CourseCard({
  id,
  name,
  level,
  price,
  duration,
  access,
  features,
  color,
}: CourseCardProps) {
  const styles = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col h-full p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:border-brand-navy/10`}
      id={id}
    >
      <div className="mb-8">
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${styles.border.replace('border-', 'border-').replace('/30', '/10')} ${styles.bg.replace('/5', '/10')} ${styles.text}`}>
          {level}
        </span>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{name} Course</h3>
        <p className="text-gray-600 text-sm">{access} · {duration}</p>
      </div>

      <div className="flex-1 space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`mt-1 p-0.5 rounded-full bg-slate-50 border border-gray-100`}>
              <Check className={`h-4 w-4 ${styles.text}`} />
            </div>
            <span className="text-gray-700 text-sm leading-snug font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-8 border-t border-gray-50">
        <div className="text-3xl font-extrabold text-brand-navy mb-6">
          {price}
        </div>
        <Link
          href={`/courses/${id}`}
          className={`flex items-center justify-center gap-2 w-full py-4 rounded-full text-lg font-bold transition-all ${
            color === "platinum" 
              ? "bg-brand-navy text-white hover:bg-brand-navy-dark" 
              : "bg-slate-50 border border-gray-200 text-brand-navy hover:bg-brand-navy hover:text-white"
          }`}
        >
          Enroll Now
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </motion.div>
  );
}
