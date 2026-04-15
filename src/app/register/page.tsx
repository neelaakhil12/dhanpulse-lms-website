"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Mail, Lock, Loader2, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/login?registered=true");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-brand-navy/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-brand-navy/5 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white border border-gray-100 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-500 font-medium">Join the DhanPulse trading community</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand-navy transition-colors" />
              <input
                type="text"
                required
                className="w-full bg-slate-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-gray-900 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all font-medium"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand-navy transition-colors" />
              <input
                type="email"
                required
                className="w-full bg-slate-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-gray-900 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all font-medium"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand-navy transition-colors" />
              <input
                type="password"
                required
                minLength={6}
                className="w-full bg-slate-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-gray-900 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none transition-all font-medium"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-navy text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-brand-navy-dark shadow-lg active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
              <>
                Continue <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-sm font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-brand-navy hover:underline font-black">
            Log in here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
