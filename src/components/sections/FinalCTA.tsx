"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-white py-12 lg:py-20 relative overflow-hidden">
      {/* Background Decor - Light Mode Refined */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-navy/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-brand-navy/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto rounded-[3rem] sm:rounded-[4rem] bg-gradient-to-br from-brand-navy to-brand-navy-dark p-6 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Circle Icon within CTA */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
             <Sparkles className="h-40 w-40 text-white" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex p-4 rounded-3xl bg-white/10 backdrop-blur-md mb-8">
              <Sparkles className="h-8 w-8 text-gold-highlight" />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
              Ready to Transform Your <br /> Trading Journey?
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join thousands of students who have mastered the art of consistent trading with our SEBI-registered guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/courses"
                className="bg-white text-brand-navy font-black text-lg px-12 py-5 rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Get Started Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/30 text-white font-black text-lg px-12 py-5 rounded-full hover:bg-white/10 transition-all"
              >
                Have Questions?
              </Link>
            </div>

            <p className="mt-10 text-white/60 text-sm font-bold tracking-widest uppercase">
              Start with our Foundation course for just ₹2,999
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
