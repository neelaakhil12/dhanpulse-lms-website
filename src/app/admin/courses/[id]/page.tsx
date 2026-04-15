import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Plus, Play, MoreVertical, Edit, Trash, ChevronRight, Save } from "lucide-react";
import Link from "next/link";

export default async function CourseEditPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const { id } = await params;

  if (!session || session.user.role !== "admin") {
    redirect("/dashboard");
  }

  // Mock course data for editing
  const course = {
    id,
    name: id.toUpperCase() + " Mastery",
    modules: [
      { id: "m1", title: "Introduction", lessons: [{ id: "l1", title: "Welcome", duration: "05:00" }] },
      { id: "m2", title: "Core Strategies", lessons: [{ id: "l2", title: "Pattern Analysis", duration: "15:00" }, { id: "l3", title: "Execution", duration: "12:00" }] },
    ]
  };

  return (
    <div className="bg-black min-h-screen pt-10 pb-20 text-white">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8">
           <Link href="/admin/courses" className="hover:text-white transition-colors">Courses</Link>
           <ChevronRight className="h-3 w-3" />
           <span className="text-zinc-300">Edit {course.name}</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
           <div className="flex-1">
             <h1 className="text-4xl font-black mb-4 italic">Edit Curriculum</h1>
             <p className="text-zinc-500 max-w-xl">Organize modules, upload videos, and manage specific lesson outcomes for the {course.name} program.</p>
           </div>
           <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white font-bold hover:bg-zinc-800 transition-all">
                 Discard
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-brand-green text-white font-bold hover:bg-brand-green-dark transition-all shadow-lg shadow-brand-green/20">
                 <Save className="h-5 w-5" />
                 Save Changes
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           
           {/* Curriculum Editor */}
           <div className="lg:col-span-2 space-y-8">
             {course.modules.map((module, mIdx) => (
               <div key={module.id} className="p-8 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 relative group">
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center font-black text-xs border border-zinc-800 transition-all group-hover:border-brand-green/50">
                           {mIdx + 1}
                        </div>
                        <input 
                          type="text" 
                          defaultValue={module.title}
                          className="bg-transparent text-xl font-bold text-white border-b border-transparent focus:border-brand-green outline-none transition-all px-1"
                        />
                     </div>
                     <button className="p-2 text-zinc-600 hover:text-white"><MoreVertical className="h-5 w-5" /></button>
                  </div>

                  <div className="space-y-3">
                     {module.lessons.map((lesson) => (
                        <div key={lesson.id} className="flex items-center justify-between p-5 rounded-2xl bg-black border border-zinc-800 group/lesson hover:border-zinc-700 transition-all">
                           <div className="flex items-center gap-4">
                              <Play className="h-4 w-4 text-zinc-700 group-hover/lesson:text-brand-green" />
                              <span className="text-sm font-bold text-zinc-300 group-hover/lesson:text-white transition-colors">{lesson.title}</span>
                              <span className="text-[10px] text-zinc-600 font-bold uppercase">{lesson.duration}</span>
                           </div>
                           <div className="flex gap-2 opacity-0 group-hover/lesson:opacity-100 transition-opacity">
                              <button className="p-2 hover:text-brand-green transition-colors"><Edit className="h-4 w-4" /></button>
                              <button className="p-2 hover:text-red-500 transition-colors"><Trash className="h-4 w-4" /></button>
                           </div>
                        </div>
                     ))}
                     <button className="w-full py-4 mt-2 rounded-2xl border border-zinc-800 border-dashed text-sm font-bold text-zinc-500 hover:border-brand-green hover:text-brand-green transition-all flex items-center justify-center gap-2">
                        <Plus className="h-4 w-4" />
                        Add Lesson
                     </button>
                  </div>
               </div>
             ))}

             <button className="w-full py-8 rounded-[2.5rem] bg-zinc-900 border-2 border-dashed border-zinc-800 text-zinc-500 font-bold hover:border-brand-green hover:text-brand-green transition-all flex flex-col items-center justify-center gap-2">
                <Plus className="h-8 w-8 mb-2" />
                Add New Module
             </button>
           </div>

           {/* Sidebar - Course Settings */}
           <div className="lg:col-span-1 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800">
                <h3 className="text-lg font-bold mb-6">Course Settings</h3>
                <div className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Base Price (₹)</label>
                      <input type="text" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-brand-green" defaultValue="4999" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Discounted Price (₹)</label>
                      <input type="text" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-brand-green" defaultValue="2999" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Course Visibility</label>
                      <select className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-brand-green">
                         <option>Published</option>
                         <option>Draft</option>
                         <option>Archived</option>
                      </select>
                   </div>
                </div>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
}
