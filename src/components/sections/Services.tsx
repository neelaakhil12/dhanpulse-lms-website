"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Video, 
  Cpu, 
  PieChart, 
  UserRound, 
  Users 
} from "lucide-react";

const services = [
  {
    title: "Registered Advisory",
    description: "Expert stock recommendations backed by SEBI-registered advisory standards.",
    icon: <BarChart3 className="w-8 h-8 text-brand-green" />,
  },
  {
    title: "Live Trading Floor",
    description: "Real-time market analysis and trade setups every trading day with Ajay Rao Devoor.",
    icon: <Video className="w-8 h-8 text-gold-highlight" />,
  },
  {
    title: "Algorithm Trading",
    description: "Scale your trading with institutional-grade automated systems and logic.",
    icon: <Cpu className="w-8 h-8 text-brand-green" />,
  },
  {
    title: "Portfolio Review",
    description: "Get your investment portfolio audited for risk, diversification, and growth potential.",
    icon: <PieChart className="w-8 h-8 text-gold-highlight" />,
  },
  {
    title: "One-on-One Mentorship",
    description: "Direct personalized sessions to break through your trading plateaus.",
    icon: <UserRound className="w-8 h-8 text-brand-green" />,
  },
  {
    title: "Premium Community",
    description: "Access exclusive research reports and a community of professional traders.",
    icon: <Users className="w-8 h-8 text-gold-highlight" />,
  },
];

export default function Services() {
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
            Our Exclusive <span className="text-gold-highlight">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto font-medium text-lg"
          >
            Elevate your trading journey with professional solutions designed for consistency, accuracy, and long-term wealth creation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 inline-block group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <div className="group-hover:text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-navy transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-brand-navy text-sm font-bold opacity-0 group-hover:opacity-100 transition-all">
                  Get Started <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
