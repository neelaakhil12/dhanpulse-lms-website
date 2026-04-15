"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Fingerprint, ShieldCheck } from "lucide-react";

const trustPoints = [
  {
    icon: Award,
    title: "SEBI Registered",
    description: "Operate with the highest standards of regulatory compliance and integrity."
  },
  {
    icon: BookOpen,
    title: "Structured Learning",
    description: "Courses designed to take you from basics to professional systems systematically."
  },
  {
    icon: ShieldCheck,
    title: "Research-Based",
    description: "Every strategy is backed by deep market research and backtested data."
  },
  {
    icon: Fingerprint,
    title: "Real Market Insights",
    description: "Learn from Ajay Rao Devoor's years of experience in the Indian stock market."
  }
];

export default function TrustSection() {
  return (
    <section className="bg-white py-12 lg:py-20 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl"
          >
            Why Traders Choose <span className="text-brand-navy">DhanPulse</span>
          </motion.h2>
          <p className="text-gray-600 text-lg font-medium">
            Built on transparency, expert research, and an unwavering commitment to your trading success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 lg:p-8 rounded-[2.5rem] bg-[#5D0E11] border border-white/5 shadow-xl hover:shadow-[#5D0E11]/20 hover:-translate-y-1 transition-all"
            >
              <div className="mb-6 p-4 rounded-full bg-white/10 border border-white/20">
                <point.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed font-medium">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 p-6 lg:p-16 rounded-[3rem] bg-[#E9F5E9] border border-green-200/50 relative overflow-hidden"
        >
          {/* Subtle green glow behind founder area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-green-500/5 blur-[100px]" />
          
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10 text-center md:text-left">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-white shadow-xl border-4 border-white shrink-0 overflow-hidden ring-1 ring-green-200/50">
               {/* Placeholder for founder image */}
               <div className="w-full h-full flex items-center justify-center text-green-700 font-black text-sm">
                 AJAY RAO DEVOOR
               </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Your Mentor</h3>
               <h4 className="text-green-700 font-bold mb-4 tracking-wide uppercase text-sm">Ajay Rao Devoor</h4>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic font-medium">
                "My mission is to empower every individual with the right knowledge and tools to navigate the stock market with confidence and discipline."
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="px-4 py-2 rounded-xl bg-white border border-green-100 text-green-700 text-xs font-bold uppercase tracking-widest shadow-sm">
                  SEBI Registered
                </div>
                <div className="px-4 py-2 rounded-xl bg-white border border-green-100 text-green-700 text-xs font-bold uppercase tracking-widest shadow-sm">
                  Research Expert
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
