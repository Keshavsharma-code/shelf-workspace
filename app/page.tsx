"use client";

import { motion } from "framer-motion";
import { Download, Github, Shield, Zap, BookOpen, Cpu } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-white/20 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm" />
            </div>
            <span className="font-bold text-xl tracking-tight">SHELF</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Cloud</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Keshavsharma-code/shelf-workspace" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none">
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white opacity-[0.03] blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Shelf v0.1.0 Alpha is now public
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
              The Sovereign <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Workspace Engine.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Linear-style speed meets Notion-style depth. All self-hosted, all private, 
              with a built-in AI co-pilot you actually own.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all">
                Self-Host Now
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Desktop
              </button>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24 max-w-6xl mx-auto"
        >
          <div className="aspect-[16/9] glass rounded-3xl p-4 overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-[#050505] rounded-2xl border border-white/5 flex">
              {/* Sidebar Mockup */}
              <div className="w-64 border-r border-white/5 p-4 hidden md:block">
                <div className="w-full h-8 bg-white/5 rounded-md mb-6" />
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-white/10 rounded" />
                      <div className="h-2 bg-white/5 rounded w-24" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Content Mockup */}
              <div className="flex-1 p-8">
                <div className="max-w-2xl">
                  <div className="h-4 bg-white/10 rounded w-64 mb-8" />
                  <div className="space-y-4">
                    <div className="h-2 bg-white/5 rounded w-full" />
                    <div className="h-2 bg-white/5 rounded w-full" />
                    <div className="h-2 bg-white/5 rounded w-4/5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-12">
                    <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4">
                      <div className="h-2 bg-white/10 rounded w-12" />
                    </div>
                    <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4">
                      <div className="h-2 bg-white/10 rounded w-16" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Features Detail */}
      <section className="py-32 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "Maximum Sovereignty",
                desc: "Your data never leaves your hardware. Local-first architecture with end-to-end encryption."
              },
              {
                icon: Cpu,
                title: "Private AI Co-pilot",
                desc: "Built-in integration for local Ollama/LocalAI instances. AI assistance without tracking."
              },
              {
                icon: Zap,
                title: "High Performance",
                desc: "Built with Rust and Next.js. Sub-50ms interaction latency globally."
              }
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-sm" />
            </div>
            <span className="font-bold tracking-tight">SHELF</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Shelf Workspace. Open Source under MIT License.
          </p>
          <div className="flex items-center gap-6 text-gray-500 hover:text-white transition-colors cursor-pointer">
            <Github className="w-5 h-5" />
            <span className="text-sm font-medium">Twitter</span>
            <span className="text-sm font-medium">Discord</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
