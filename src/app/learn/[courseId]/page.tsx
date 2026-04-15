"use client";

import { useState } from "react";
import { ChevronLeft, CheckCircle2, Play, Lock, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import VideoPlayer from "@/components/lms/VideoPlayer";
import { motion, AnimatePresence } from "framer-motion";

// Mock data for the MVP learner experience
const courseContent: Record<string, any> = {
  basic: {
    title: "Basic Foundation Course",
    modules: [
      {
        id: "m1",
        title: "Introduction to Markets",
        lessons: [
          { id: "l1", title: "What is the Stock Market?", duration: "12:00", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", completed: true },
          { id: "l2", title: "How Exchanges Work", duration: "15:45", videoUrl: "https://www.youtube.com/watch?v=XqZsoesa55w", completed: false },
        ]
      },
      {
        id: "m2",
        title: "Technical Basics",
        lessons: [
          { id: "l3", title: "Candle Stick Patterns", duration: "22:10", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", completed: false },
          { id: "l4", title: "Support & Resistance", duration: "18:30", videoUrl: "https://www.youtube.com/watch?v=XqZsoesa55w", completed: false },
        ]
      }
    ]
  }
};

export default function LearnPage({ params }: { params: { courseId: string } }) {
  const { courseId } = params;
  const course = courseContent[courseId] || courseContent.basic;
  
  const [activeLesson, setActiveLesson] = useState(course.modules[0].lessons[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-[calc(100vh-80px)] bg-gray-950 overflow-hidden">
      
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full bg-brand-navy text-white shadow-2xl"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar - Course Curriculum */}
      <AnimatePresence>
        {(isSidebarOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed inset-0 lg:relative lg:inset-auto z-40 w-80 bg-gray-900 border-r border-white/5 flex flex-col h-full ${!isSidebarOpen && 'hidden lg:flex'}`}
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <div>
                <Link href="/dashboard" className="text-white/40 hover:text-white flex items-center gap-1 text-xs font-bold uppercase tracking-widest mb-2 transition-colors">
                  <ChevronLeft className="h-4 w-4" /> Back to Dashboard
                </Link>
                <h2 className="text-white font-black text-lg leading-tight">{course.title}</h2>
              </div>
              <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-white/40 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
              {course.modules.map((module: any) => (
                <div key={module.id} className="space-y-2">
                  <h3 className="text-white/30 text-xs font-black uppercase tracking-tighter ml-2 mb-3">{module.title}</h3>
                  <div className="space-y-1">
                    {module.lessons.map((lesson: any) => (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setActiveLesson(lesson);
                          if (window.innerWidth < 1024) setIsSidebarOpen(false);
                        }}
                        className={`w-full text-left p-3 rounded-xl flex items-start gap-3 transition-all ${
                          activeLesson.id === lesson.id 
                            ? "bg-brand-navy/20 border border-brand-navy/30" 
                            : "hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <div className="mt-0.5">
                          {lesson.completed ? (
                            <CheckCircle2 className="h-5 w-5 text-brand-green" />
                          ) : (
                            <Play className={`h-5 w-5 ${activeLesson.id === lesson.id ? 'text-brand-navy' : 'text-white/20'}`} />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${activeLesson.id === lesson.id ? 'text-white' : 'text-white/50'}`}>
                            {lesson.title}
                          </p>
                          <span className="text-[10px] text-white/20 font-bold">{lesson.duration}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content - Video Player & Details */}
      <main className="flex-1 overflow-y-auto bg-gray-950 p-4 lg:p-8 custom-scrollbar">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Header (Desktop) */}
          <div className="hidden lg:block">
            <h1 className="text-2xl font-black text-white mb-2">{activeLesson.title}</h1>
            <p className="text-white/40 text-sm font-medium">Module: Introduction to Markets</p>
          </div>

          {/* Video Area */}
          <VideoPlayer 
            url={activeLesson.videoUrl} 
            onEnded={() => alert("Lesson Completed! Progress updated.")}
          />

          {/* Bottom Controls/Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex gap-4">
                <button className="flex-1 bg-brand-navy text-white font-black py-4 rounded-2xl shadow-lg hover:bg-brand-navy-dark active:scale-95 transition-all">
                  Next Lesson
                </button>
                <button className="px-6 rounded-2xl border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all font-bold">
                  Mark as Complete
                </button>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-black text-white border-b border-white/5 pb-4">About this Lesson</h3>
                <p className="text-white/50 leading-relaxed font-medium">
                  In this session, we deep dive into the core mechanics of how the stock exchange functions. 
                  Understanding the auction process and market participants is vital for any professional trader.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-3xl bg-gray-900 border border-white/5">
                <h4 className="text-white font-black mb-4 flex items-center gap-2">
                  <Download className="h-4 w-4 text-brand-navy" /> Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center justify-between text-sm text-white/40 hover:text-white group transition-colors">
                      Lesson Notes (PDF)
                      <Download className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-sm text-white/40 hover:text-white group transition-colors">
                      Trading Checklist
                      <Download className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
