"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-gray-100 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-navy/5 blur-[130px] rounded-full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight">
            Get in <span className="text-brand-navy">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about our courses or advisory services? We're here to help you navigate your trading journey.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-6 group">
                     <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all">
                       <Mail className="h-6 w-6" />
                     </div>
                     <div>
                       <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Email Support</div>
                       <a href="mailto:support@dhanpulse.co.in" className="text-lg md:text-xl font-black hover:text-brand-navy transition-colors break-all">support@dhanpulse.co.in</a>
                     </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                     <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all">
                       <MessageCircle className="h-6 w-6" />
                     </div>
                     <div>
                       <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">WhatsApp Chat</div>
                       <Link href="https://wa.me/910000000000" className="text-xl font-black hover:text-brand-navy transition-colors">+91 00000-00000</Link>
                     </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                     <div className="p-4 rounded-2xl bg-slate-50 border border-gray-100 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all">
                       <MapPin className="h-6 w-6" />
                     </div>
                     <div>
                       <div className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Office Location</div>
                       <div className="text-xl font-black">Bangalore, Karnataka, India</div>
                     </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-brand-navy text-white shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                   <MessageCircle className="h-24 w-24" />
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-xl font-black mb-4">Immediate Assistance?</h3>
                   <p className="text-white/70 mb-6 font-medium">
                     Chat with our support team on WhatsApp for the fastest response regarding enrollment and course access.
                   </p>
                   <Link 
                     href="https://wa.me/910000000000"
                     className="inline-flex items-center gap-2 bg-white text-brand-navy hover:bg-gray-100 font-black px-8 py-3 rounded-full transition-all"
                    >
                     <MessageCircle className="h-5 w-5" />
                     Start WhatsApp Chat
                   </Link>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-5 md:p-8 lg:p-12 rounded-2xl md:rounded-[3.5rem] bg-slate-50 border border-gray-100 relative overflow-hidden shadow-sm">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <Send className="h-48 w-48 text-brand-navy" />
               </div>
               
               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                     <input 
                       type="text" 
                       required
                       className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all text-gray-900 font-medium"
                       placeholder="Ajay Sharma"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                     <input 
                       type="tel" 
                       required
                       className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all text-gray-900 font-medium"
                       placeholder="+91 99999-99999"
                     />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                   <input 
                     type="email" 
                     required
                     className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all text-gray-900 font-medium"
                     placeholder="ajay@example.com"
                   />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Interest</label>
                   <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all appearance-none cursor-pointer text-gray-900 font-medium">
                     <option>Select a Program</option>
                     <option>Basic Course</option>
                     <option>Silver Course</option>
                     <option>Gold Course</option>
                     <option>Platinum Mentorship</option>
                     <option>SEBI Advisory Services</option>
                   </select>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                   <textarea 
                     rows={4}
                     className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all resize-none text-gray-900 font-medium"
                     placeholder="Tell us a bit about your trading experience..."
                   />
                 </div>

                 <button className="w-full py-5 rounded-full bg-brand-navy text-white font-black text-lg hover:bg-brand-navy-dark transition-all active:scale-95 shadow-lg">
                   Send Message
                 </button>
               </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
