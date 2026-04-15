"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  TrendingUp, 
  Trophy, 
  Zap, 
  ShieldCheck, 
  Users,
  X,
  ChevronRight,
  Info
} from "lucide-react";

const services = [
  {
    id: "basic",
    title: "Basic Course",
    subtitle: "Foundation Level",
    description: "Master the absolute fundamentals of the stock market and start your trading journey with confidence.",
    detailedDescription: "The DhanPulse Foundation program is specifically designed for absolute beginners. We cover everything from setting up your first demat account to understanding how the stock market actually works. You will learn basic candle patterns, support/resistance, and how to read market trends without confusion. It is the perfect first step to avoid common beginner mistakes.",
    icon: <BookOpen className="w-8 h-8 text-brand-green" />,
    features: ["Market Basics", "Chart Reading", "Terminology", "Platform Setup"]
  },
  {
    id: "silver",
    title: "Silver Course",
    subtitle: "Intermediate Level",
    description: "Step up your analysis skills with advanced price action and technical strategies.",
    detailedDescription: "The Silver program dives deep into the 'Why' behind price movements. You'll master advanced technical analysis, high-probability chart patterns, and learn specific intraday setups designed for Nifty and Bank Nifty. We focus on teaching you how to filter out market noise and trade only when the odds are in your favor.",
    icon: <TrendingUp className="w-8 h-8 text-gold-highlight" />,
    features: ["Advanced Price Action", "Intraday Setups", "Pattern Mastery", "Indicator Logic"]
  },
  {
    id: "gold",
    title: "Gold Course",
    subtitle: "Advanced Strategies",
    description: "Professional strategies for F&O, hedging, and sophisticated capital management.",
    detailedDescription: "The Gold program is for serious traders looking for consistent income. We explore the complex world of Options and Futures with a focus on Option Greeks, Hedging, and Adjustment strategies. More importantly, we implement institutional-grade risk management systems to ensure your capital is protected while you scale your profits.",
    icon: <Trophy className="w-8 h-8 text-brand-green" />,
    features: ["Options & Futures", "Option Greeks", "Hedging Logic", "Risk Systems"]
  },
  {
    id: "platinum",
    title: "Platinum Course",
    subtitle: "Premium / Pro Level",
    description: "Elite institutional-grade mentorship and direct guidance for career traders.",
    detailedDescription: "Our Platinum program is the pinnacle of the DhanPulse experience. This is not just a course; it's a mentorship. You get direct access to live trading sessions, one-on-one strategy reviews with Ajay Rao Devoor, and advanced portfolio management techniques used by professional fund managers. Designed for those who want to trade full-time.",
    icon: <Zap className="w-8 h-8 text-gold-highlight" />,
    features: ["1-on-1 Mentorship", "Direct Live Access", "Portfolio Architect", "Full-time Career Path"]
  },
  {
    id: "advisory",
    title: "Investment Advisory",
    subtitle: "SEBI-Registered",
    description: "Compliant, expert stock recommendations and long-term investment guidance.",
    detailedDescription: "Get access to professional, SEBI-registered advisory services. We provide researched stock picks for short-term and long-term growth, along with clear entry, target, and stop-loss levels. Our goal is to help you build a resilient equity portfolio that beats the market benchmarks consistently over time.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
    features: ["Registered Research", "Portfolio Audit", "Real-time Alerts", "Growth Picks"]
  },
  {
    id: "community",
    title: "Premium Community",
    subtitle: "Membership Access",
    description: "Join an elite group of active traders for real-time collaboration and research.",
    detailedDescription: "The DhanPulse Elite community is a thriving network of dedicated traders. Membership gives you access to our private discussion groups, daily pre-market and post-market research sessions, shared trade journals, and exclusive market insights that aren't available to the general public.",
    icon: <Users className="w-8 h-8 text-gold-highlight" />,
    features: ["Elite Network", "Daily Research", "Exclusive Group", "Signal Insights"]
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="py-20 bg-[#2D1B0D] relative overflow-hidden">
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Our Exclusive <span className="text-gold-highlight">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto font-medium text-lg leading-relaxed"
          >
            A comprehensive ecosystem designed to transform your trading account into a professional business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gold/30 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="mb-6 p-5 rounded-3xl bg-slate-50 inline-block group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-highlight">
                  {service.subtitle}
                </span>
                <h3 className="text-2xl font-black text-gray-900 mt-1">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8">
                {service.description}
              </p>

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                <button 
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-2 text-brand-navy text-xs font-black uppercase tracking-widest hover:gap-3 transition-all"
                >
                  View Details <Info className="h-4 w-4" />
                </button>
                <div className="h-2 w-2 rounded-full bg-gold/30 group-hover:bg-gold group-hover:scale-150 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-brand-navy/80 backdrop-blur-sm z-[100] cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white z-[110] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-12 pb-6 flex justify-between items-start">
                <div className="flex items-center gap-6">
                  <div className="p-5 rounded-3xl bg-slate-50 text-brand-navy">
                    {selectedService.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-highlight">
                      {selectedService.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-3 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="px-8 md:px-12 pb-12 overflow-y-auto">
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 text-lg leading-relaxed font-medium mb-8">
                    {selectedService.detailedDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {selectedService.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-gray-100">
                      <ChevronRight className="h-4 w-4 text-gold-highlight font-bold" />
                      <span className="text-sm font-bold text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-full mt-10 bg-brand-navy text-white font-black py-5 rounded-2xl hover:bg-brand-navy/90 transition-all flex items-center justify-center gap-3"
                >
                  Enroll or Learn More <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
