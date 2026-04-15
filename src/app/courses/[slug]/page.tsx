import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Users, Video, BookOpen, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import Link from "next/link";

const coursesDetailedData: Record<string, any> = {
  basic: {
    name: "Basic",
    level: "Foundation",
    headline: "Build a Strong Foundation in the Stock Market",
    description: "Perfect for beginners who want to understand how the market really works without the noise of complex indicators.",
    learnings: [
      "Market terminology and structure",
      "How to read candlestick charts",
      "Identifying major support and resistance",
      "Introduction to risk management",
      "Setting up your trading terminal",
    ],
    modules: [
      { title: "Introduction to Markets", lessons: 4 },
      { title: "Price Action Basics", lessons: 6 },
      { title: "Risk & Money Management", lessons: 3 },
      { title: "Live Q&A Recording", lessons: 2 },
    ],
    price: "₹4,999",
    discountPrice: "₹2,999",
    duration: "4 Weeks",
    access: "Recorded + Live Q&A",
    color: "blue",
  },
  silver: {
    name: "Silver",
    level: "Intermediate",
    headline: "Elevate Your Trading with Professional Price Action",
    description: "Designed for traders who have the basics down but struggle with consistency. Master intraday and swing strategies.",
    learnings: [
      "Advanced price action patterns",
      "Multiple timeframe analysis",
      "Intraday scalp and trend following",
      "Trade journaling and auditing",
      "Position sizing techniques",
    ],
    modules: [
      { title: "Advanced Price Action", lessons: 8 },
      { title: "Intraday Trading Strategies", lessons: 10 },
      { title: "Swing Trading Manual", lessons: 5 },
      { title: "Psychology & Discipline", lessons: 4 },
    ],
    price: "₹12,999",
    discountPrice: "₹7,999",
    duration: "2 Months",
    access: "Live Sessions + Recorded",
    color: "zinc",
  },
  gold: {
    name: "Gold",
    level: "Advanced",
    headline: "Master Derivatives and Complex Trading Systems",
    description: "Deep dive into Futures & Options with a focus on risk-averse strategy building and institutional flow analysis.",
    learnings: [
      "Option Greeks and Hedging",
      "F&O expiry day strategies",
      "Backtested mechanical systems",
      "Volume Profile and Order Flow",
      "Automated trading principles",
    ],
    modules: [
      { title: "Futures & Options Masterclass", lessons: 12 },
      { title: "Strategy Building Workshop", lessons: 6 },
      { title: "Capital Allocation Specialist", lessons: 4 },
      { title: "Institutional Data Analysis", lessons: 5 },
    ],
    price: "₹29,999",
    discountPrice: "₹19,999",
    duration: "3 Months",
    access: "Private Live Cohort",
    color: "gold",
  },
  platinum: {
    name: "Platinum",
    level: "Elite",
    headline: "The Complete Mentorship for Professional Traders",
    description: "The ultimate transformation. Direct access to Ajay Rao Devoor, live trading room access, and portfolio management.",
    learnings: [
      "Full DhanPulse Trading System",
      "Live session market execution",
      "Personal portfolio auditing",
      "Institutional execution methods",
      "Direct weekly mentorship calls",
    ],
    modules: [
      { title: "The DhanPulse Blueprint", lessons: 15 },
      { title: "Live Execution Intensive", lessons: 20 },
      { title: "Portfolio Engineering", lessons: 8 },
      { title: "1-on-1 Performance Coaching", lessons: 10 },
    ],
    price: "₹79,999",
    discountPrice: "₹39,999",
    duration: "6 Months",
    access: "Direct Mentorship + Live",
    color: "platinum",
  },
};

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const course = coursesDetailedData[slug];

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-green/10 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-gold-highlight text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3" />
              <span>{course.level} Level Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              {course.name} <span className="text-brand-green">Course</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              {course.headline}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-zinc-300">
               <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-brand-green" /> {course.duration}</div>
               <div className="flex items-center gap-2"><Video className="h-5 w-5 text-brand-green" /> {course.access}</div>
               <div className="flex items-center gap-2"><Users className="h-5 w-5 text-brand-green" /> Limited Slots</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Learnings */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Trophy className="h-8 w-8 text-gold" />
                What You Will Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learnings.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <CheckCircle2 className="h-6 w-6 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-brand-green" />
                Course Modules
              </h2>
              <div className="space-y-4">
                {course.modules.map((mod: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-4">
                       <span className="text-2xl font-black text-white/10">{i + 1}</span>
                       <h3 className="font-bold text-white text-lg">{mod.title}</h3>
                    </div>
                    <span className="text-zinc-500 text-sm">{mod.lessons} Lessons</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bonuses */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20">
               <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                 <ShieldCheck className="text-gold" />
                 Bonus Access Included
               </h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-400">
                 <li className="flex items-center gap-2">• Lifetime Community Access</li>
                 <li className="flex items-center gap-2">• Trading Journal Templates</li>
                 <li className="flex items-center gap-2">• Weekly Market Outlooks</li>
                 <li className="flex items-center gap-2">• Live Mentorship Access</li>
               </ul>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 shadow-2xl">
              <div className="mb-6">
                <span className="text-zinc-500 line-through text-lg">{course.price}</span>
                <div className="text-5xl font-black text-white">{course.discountPrice}</div>
                <p className="text-brand-green text-sm font-bold mt-2 uppercase tracking-tight">Limited time offer · Enroll today</p>
              </div>

              <div className="space-y-4 mb-8">
                 <button className="w-full py-5 rounded-full bg-brand-green text-white font-bold text-xl hover:bg-brand-green-dark transition-all shadow-lg shadow-brand-green/20">
                   Enroll Now
                 </button>
                 <button className="w-full py-5 rounded-full border border-zinc-700 text-white font-bold hover:bg-zinc-800 transition-all">
                   Download Syllabus
                 </button>
              </div>

              <div className="space-y-4 pt-6 border-t border-zinc-800">
                 <div className="flex items-center gap-3 text-sm text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                    Secure Payment Gateway
                 </div>
                 <div className="flex items-center gap-3 text-sm text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                    Immediate Dashboard Access
                 </div>
                 <div className="flex items-center gap-3 text-sm text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                    GST Invoice Available
                 </div>
              </div>

              {/* Founder Tag */}
              <div className="mt-10 p-4 rounded-2xl bg-black border border-zinc-800 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-zinc-800 shrink-0" />
                 <div>
                   <div className="text-xs text-zinc-500 font-bold uppercase">Mentor</div>
                   <div className="text-sm text-white font-bold">Ajay Rao Devoor</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
