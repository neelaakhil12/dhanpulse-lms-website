import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Plus, Edit2, Trash2, GripVertical, Video, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function AdminCoursesPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/dashboard");
  }

  const courses = [
    { id: "basic", name: "Basic Foundation", modules: 4, lessons: 15 },
    { id: "silver", name: "Silver Growth", modules: 6, lessons: 22 },
    { id: "gold", name: "Gold Advanced", modules: 8, lessons: 30 },
    { id: "platinum", name: "Platinum Elite", modules: 12, lessons: 45 },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-10 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
           <div className="flex items-center gap-4">
             <Link href="/admin" className="p-2 rounded-xl bg-white border border-gray-200 text-gray-400 hover:text-brand-navy hover:border-brand-navy/20 transition-all shadow-sm">
               <ChevronRight className="h-5 w-5 rotate-180" />
             </Link>
             <div>
               <h1 className="text-3xl font-black text-gray-900">Course Management</h1>
               <p className="text-gray-500 text-sm font-medium">Create and organize your trading curriculum.</p>
             </div>
           </div>
           <button className="flex items-center gap-2 px-6 py-4 rounded-full bg-brand-navy text-white font-black hover:bg-brand-navy-dark transition-all shadow-xl">
             <Plus className="h-5 w-5" />
             Create New Course
           </button>
        </div>

        <div className="space-y-6">
           {courses.map((course) => (
             <div key={course.id} className="p-6 md:p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-brand-navy/20 hover:shadow-md transition-all">
                <div className="flex items-center gap-6">
                   <div className="p-4 rounded-3xl bg-slate-50 border border-gray-100 text-brand-navy">
                      <BookOpen className="h-8 w-8" />
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-gray-900 mb-1">{course.name}</h3>
                      <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                         <span className="flex items-center gap-1"><GripVertical className="h-3 w-3" /> {course.modules} Modules</span>
                         <span className="flex items-center gap-1 text-brand-green"><Video className="h-3 w-3" /> {course.lessons} Lessons</span>
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-3">
                   <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-50 border border-gray-200 text-gray-900 font-bold hover:bg-white hover:border-brand-navy/20 hover:shadow-sm transition-all text-sm">
                      <Edit2 className="h-4 w-4" /> Edit Content
                   </button>
                   <button className="p-3 rounded-2xl border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all">
                      <Trash2 className="h-5 w-5" />
                   </button>
                </div>
             </div>
           ))}
        </div>

        {/* Bulk Actions / Settings Placeholder */}
        <div className="mt-12 p-8 rounded-[3rem] bg-white border-2 border-dashed border-gray-200 text-center shadow-sm">
           <div className="mx-auto w-16 h-16 rounded-full bg-slate-50 border border-gray-100 flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-gray-300" />
           </div>
           <h3 className="text-lg font-black text-gray-900 mb-2">Detailed Analytics per Course</h3>
           <p className="text-gray-400 text-sm max-w-sm mx-auto font-medium">Track completion rates and popular modules for each individual training program.</p>
        </div>

      </div>
    </div>
  );
}

// Helper component for icon
function BookOpen(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
