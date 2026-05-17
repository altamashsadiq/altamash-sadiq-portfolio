import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.18 200 / 0.5), transparent 70%)" }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.22 295 / 0.5), transparent 70%)" }}
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          Available for new projects · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02]"
        >
          Crafting digital <br />
          products with <span className="text-gradient">precision</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          I'm <span className="text-foreground font-medium">Altamash Sadiq</span> — a software
          engineer building modern web apps, AI agents, and automation pipelines that move businesses forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-medium hover:bg-surface-elevated transition-colors"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/altamashsadiq"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-medium hover:bg-surface-elevated transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 max-w-2xl mx-auto gap-4"
        >
          {[
            { v: "20+", l: "Projects shipped" },
            { v: "5★", l: "Client rating" },
            { v: "AI-first", l: "Workflow" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl py-5 px-3">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
