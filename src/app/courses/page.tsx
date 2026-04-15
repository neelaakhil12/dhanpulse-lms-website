import CourseCard from "@/components/ui/CourseCard";
import { Sparkles } from "lucide-react";

const coursesData = [
  {
    id: "basic",
    name: "Basic",
    level: "Foundation",
    price: "₹2,999 – ₹4,999",
    duration: "2–4 weeks",
    access: "Recorded + Live Q&A",
    color: "blue" as const,
    features: [
      "Market basics from scratch",
      "Core chart reading techniques",
      "Essential risk management",
      "Basic entry/exit strategies",
      "Weekly live Q&A sessions",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    level: "Intermediate",
    price: "₹7,999 – ₹12,999",
    duration: "1–2 months",
    access: "Live + Recorded",
    color: "zinc" as const,
    features: [
      "Advanced price action concepts",
      "Proven intraday strategies",
      "Swing trading masterclass",
      "Professional trade journaling",
      "Direct group support access",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    level: "Advanced",
    price: "₹19,999 – ₹29,999",
    duration: "2–3 months",
    access: "Live + Support",
    color: "gold" as const,
    features: [
      "Complex F&O strategies",
      "Custom strategy building",
      "Efficient capital allocation",
      "Mastering trading psychology",
      "Lifetime community access",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    level: "Premium",
    price: "₹39,999 – ₹79,999",
    duration: "3–6 months",
    access: "Mentorship + Live",
    color: "platinum" as const,
    features: [
      "Complete trading system",
      "Personal 1-on-1 mentorship",
      "Live trading floor sessions",
      "Portfolio management guidance",
      "Institutional trading secrets",
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-white min-h-screen pb-16 pt-12 lg:pt-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-sm font-bold mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Master the Markets</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Our Trading <span className="text-brand-navy">Programs</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Choose a path that fits your current experience level. Every course is designed to take you to the next tier of trading consistency.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Comparison CTA */}
        <div className="mt-24 p-8 lg:p-16 rounded-[3rem] bg-brand-navy text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Sparkle */}
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Sparkles className="h-48 w-48 text-white" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black mb-4">Not sure which one is for you?</h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto font-medium text-lg">
              Schedule a free 15-minute consultation call with our experts to find the perfect learning path for your goals.
            </p>
            <button className="px-10 py-5 rounded-full bg-white text-brand-navy font-black text-lg hover:bg-gray-100 transition-all shadow-lg active:scale-95">
              Book a Free Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
