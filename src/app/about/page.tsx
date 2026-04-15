import { Shield, Target, Eye, Award, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-brand-navy/5 blur-[100px] rounded-full" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight">
            Empowering <span className="text-brand-navy">Traders</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            DhanPulse is a SEBI-registered advisory and education platform dedicated to helping Indian investors achieve long-term consistency through research-backed trading systems.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 lg:py-24 border-b border-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] bg-slate-50 border border-gray-100 overflow-hidden relative shadow-inner">
                 {/* Placeholder for founder image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-2xl uppercase tracking-[0.2em] rotate-12">
                   Ajay Rao Devoor
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-8 rounded-3xl bg-brand-navy text-white shadow-2xl">
                <Award className="h-12 w-12 mb-2 text-gold-highlight" />
                <div className="font-black text-2xl">10+ Years</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Market Experience</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-brand-navy uppercase tracking-[0.3em] mb-4">The Founder</h2>
                <h3 className="text-4xl font-black mb-6">Ajay Rao Devoor</h3>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-medium">
                  <p>
                    With over a decade of experience in the Indian financial markets, Ajay Rao Devoor founded DhanPulse with a singular vision: to bridge the gap between retail confusion and institutional clarity.
                  </p>
                  <p>
                    As a SEBI-registered investment advisor, Ajay combines rigorous technical research with automated trading systems to provide insights that go beyond generic market analysis.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <Shield className="h-6 w-6 text-brand-navy" />
                  <span className="font-bold text-gray-900">SEBI Registered Advisor</span>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-brand-green" />
                  <span className="font-bold text-gray-900">10,000+ Students Mentored</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[3.5rem] bg-slate-50 border border-gray-100 relative group overflow-hidden transition-all hover:bg-white hover:shadow-xl hover:border-brand-navy/10">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Target className="h-32 w-32" />
               </div>
               <h3 className="text-3xl font-black mb-6 flex items-center gap-4 text-gray-900">
                 <Target className="h-8 w-8 text-brand-navy" />
                 Our Mission
               </h3>
               <p className="text-gray-600 text-lg leading-relaxed font-medium">
                 To empower traders with structured, research-driven trading systems that eliminate guesswork and emotional bias from their investment decisions.
               </p>
            </div>

            <div className="p-12 rounded-[3.5rem] bg-slate-50 border border-gray-100 relative group overflow-hidden transition-all hover:bg-white hover:shadow-xl hover:border-brand-navy/10">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Eye className="h-32 w-32" />
               </div>
               <h3 className="text-3xl font-black mb-6 flex items-center gap-4 text-gray-900">
                 <Eye className="h-8 w-8 text-gold" />
                 Our Vision
               </h3>
               <p className="text-gray-600 text-lg leading-relaxed font-medium">
                 To become India's most trusted ecosystem for financial education and trading research, fostering a community of disciplined and profitable investors.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-16 lg:py-24 border-t border-gray-100 bg-slate-50/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-16 text-gray-900">The DhanPulse Standard</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-black text-brand-navy">100%</div>
              <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Transparency</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-gold">SEBI</div>
              <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Compliance</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-brand-green">Elite</div>
              <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Community</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-gold">Real</div>
              <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Research</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
