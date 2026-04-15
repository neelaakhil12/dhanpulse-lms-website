"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight, CheckCircle } from "lucide-react";

export default function LeadMagnet() {
  return (
    <section className="bg-zinc-950 py-20 lg:py-32 border-y border-zinc-900 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6">
               Limited Free Access
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Download Our <span className="text-brand-green">Professional Trading</span> PDF for Free
            </h2>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
              Not ready to enroll? Start with Ajay Rao Devoor's personal checklist for high-probability intraday setups. Used by over 5,000 traders.
            </p>
            
            <ul className="space-y-4 mb-10">
               <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="h-5 w-5 text-brand-green" /> 3 Core Entry Patterns
               </li>
               <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="h-5 w-5 text-brand-green" /> Risk Management Calculator
               </li>
               <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="h-5 w-5 text-brand-green" /> Trade Journal Sample
               </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md p-10 rounded-[3rem] bg-zinc-900 border border-zinc-800 shadow-2xl"
          >
            <div className="text-center mb-8">
               <FileText className="h-12 w-12 text-zinc-400 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-white">Join the Newsletter</h3>
               <p className="text-sm text-zinc-500">Get the PDF instantly in your email.</p>
            </div>
            
            <form className="space-y-4">
               <input 
                 type="text" 
                 placeholder="Your Name"
                 className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:border-brand-green outline-none transition-all"
               />
               <input 
                 type="email" 
                 placeholder="Email Address"
                 className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:border-brand-green outline-none transition-all"
               />
               <button className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-brand-green hover:text-white transition-all flex items-center justify-center gap-2 group">
                 Send My Free PDF
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </form>
            <p className="text-[10px] text-zinc-600 text-center mt-6 uppercase tracking-widest font-bold">
               We respect your privacy. No spam, ever.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
