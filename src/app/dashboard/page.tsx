import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import Link from "next/link";
import { BookOpen, Trophy, Clock, PlayCircle, ArrowRight, Star } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  await connectToDatabase();
  const userData = await User.findOne({ email: session.user.email });

  const enrolledCourses = userData?.enrolledCourses || [];

  return (
    <div className="bg-white min-h-screen pt-12 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Welcome Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2">
            Welcome back, <span className="text-brand-navy underline decoration-brand-navy/20 decoration-4 underline-offset-8">{session.user.name.split(' ')[0]}!</span>
          </h1>
          <p className="text-gray-500 font-medium">Track your progress and continue your trading mastery.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-brand-navy/5 text-brand-navy">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Enrolled Courses</div>
             </div>
             <div className="text-3xl font-black text-gray-900">{enrolledCourses.length}</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-gold/10 text-gold">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Achievement Points</div>
             </div>
             <div className="text-3xl font-black text-gray-900">450</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-brand-green/5 text-brand-green">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Learning Hours</div>
             </div>
             <div className="text-3xl font-black text-gray-900">12.5h</div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-black text-gray-900">My Learning Path</h2>
          {enrolledCourses.length > 0 && (
            <Link href="/courses" className="text-brand-navy text-sm font-bold hover:underline">Browse More</Link>
          )}
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="p-16 rounded-[3rem] bg-slate-50 border-2 border-dashed border-gray-200 text-center">
             <div className="mx-auto w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <PlayCircle className="h-10 w-10 text-gray-300" />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">No courses enrolled yet</h3>
             <p className="text-gray-500 mb-8 max-w-sm mx-auto font-medium">Start your journey today with our Foundation course and master the markets.</p>
             <Link 
               href="/courses" 
               className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-10 py-4 rounded-full hover:bg-brand-navy-dark transition-all shadow-xl"
             >
               Explore Courses <ArrowRight className="h-5 w-5" />
             </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enrolledCourses.map((courseId: string) => (
              <div key={courseId} className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-brand-navy/20 hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-gray-100 text-brand-navy uppercase text-[10px] font-black tracking-[0.2em]">
                    Premium Access
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-3 w-3 fill-gold text-gold" />)}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 capitalize">{courseId} Mastery Course</h3>
                <div className="w-full h-2 bg-slate-100 rounded-full mb-4 overflow-hidden">
                  <div className="h-full bg-brand-green w-1/3 rounded-full" />
                </div>
                <div className="flex justify-between items-center text-sm mb-8">
                  <span className="text-gray-500 font-bold">35% Completed</span>
                  <span className="text-gray-900 font-black">12 / 34 Lessons</span>
                </div>
                <Link 
                  href={`/learn/${courseId}`}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-brand-navy text-white font-black hover:bg-brand-navy-dark transition-all shadow-lg active:scale-95"
                >
                  Continue Learning
                  <PlayCircle className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
