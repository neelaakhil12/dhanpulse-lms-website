import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Users, BookOpen, CreditCard, TrendingUp, ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/dashboard"); // Redirect regular users to User Dashboard
  }

  // Mock data for Admin analytics
  const stats = [
    { label: "Total Revenue", value: "₹2,45,000", change: "+12.5%", icon: CreditCard, color: "text-brand-green" },
    { label: "Total Students", value: "1,248", change: "+18%", icon: Users, color: "text-blue-400" },
    { label: "Active Courses", value: "4", change: "0%", icon: BookOpen, color: "text-gold" },
    { label: "New Enrollments", value: "32", change: "+5%", icon: TrendingUp, color: "text-purple-400" },
  ];

  const recentUsers = [
    { name: "Rahul Singh", email: "rahul@example.com", course: "Basic Foundation", date: "2 horas atrás" },
    { name: "Priya Sharma", email: "priya@example.com", course: "Platinum Mentorship", date: "5 horas atrás" },
    { name: "Vikram Mehta", email: "vikram@example.com", course: "Silver Growth", date: "Yesterday" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-10 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">Admin Control Center</h1>
            <p className="text-gray-500 font-medium">Monitoring platform growth and student success at DhanPulse.</p>
          </div>
          <div className="flex gap-3">
             <Link 
               href="/admin/courses" 
               className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 transition-all text-sm shadow-sm"
             >
               Manage Courses
             </Link>
             <button className="px-6 py-3 rounded-xl bg-brand-navy text-white font-bold hover:bg-brand-navy-dark transition-all text-sm">
               Platform Settings
             </button>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="h-16 w-16" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                 <stat.icon className={`h-5 w-5 ${stat.color}`} />
                 <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-black text-gray-900">{stat.value}</div>
                <div className="text-brand-green text-xs font-bold flex items-center">
                  <ArrowUpRight className="h-3 w-3" /> {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Enrollments Table */}
          <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-gray-900">Recent Enrollments</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search students..." 
                  className="bg-slate-50 border border-gray-200 rounded-full pl-10 pr-4 py-2 text-xs text-gray-900 outline-none focus:border-brand-navy transition-all"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 text-xs font-bold uppercase tracking-widest">
                       <th className="pb-4 pt-2 px-2">Student</th>
                       <th className="pb-4 pt-2">Course</th>
                       <th className="pb-4 pt-2">Date</th>
                       <th className="pb-4 pt-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentUsers.map((user, i) => (
                      <tr key={i} className="group hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-2">
                          <div className="text-gray-900 font-black text-sm">{user.name}</div>
                          <div className="text-gray-400 text-xs">{user.email}</div>
                        </td>
                        <td className="py-4">
                           <span className="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-[10px] font-bold uppercase tracking-tighter border border-brand-navy/10">
                             {user.course}
                           </span>
                        </td>
                        <td className="py-4 text-gray-500 text-sm">{user.date}</td>
                        <td className="py-4 text-right">
                          <button className="text-gray-400 hover:text-brand-navy transition-colors font-bold text-sm">Manage</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
          </div>

          {/* Quick Actions / Activity */}
          <div className="lg:col-span-1 space-y-6">
             <div className="p-8 rounded-[2.5rem] bg-brand-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <TrendingUp className="h-24 w-24" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-black mb-2">Platform Health</h3>
                  <p className="text-white/60 text-sm mb-6">Database connected and video streaming services operational.</p>
                  <div className="flex items-center gap-2 text-brand-green text-sm font-bold">
                     <div className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
                     System Status: Excellent
                  </div>
                </div>
             </div>

             <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm">
                <h3 className="text-lg font-black text-gray-900 mb-6">Course Quick Tools</h3>
                <div className="space-y-4">
                   <button className="w-full p-4 rounded-2xl bg-slate-50 border border-gray-100 text-left hover:border-brand-navy/20 hover:shadow-sm transition-all group">
                     <span className="block text-gray-900 font-black text-sm mb-1">Add New Module</span>
                     <span className="text-gray-400 text-xs">Update existing course curriculum</span>
                   </button>
                   <button className="w-full p-4 rounded-2xl bg-slate-50 border border-gray-100 text-left hover:border-gold/30 hover:shadow-sm transition-all group">
                     <span className="block text-gray-900 font-black text-sm mb-1">Broadcast Message</span>
                     <span className="text-gray-400 text-xs">Email all enrolled students</span>
                   </button>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
