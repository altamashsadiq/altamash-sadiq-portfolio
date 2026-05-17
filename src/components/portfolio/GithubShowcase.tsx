import { motion } from "framer-motion";
import { Github, Star, GitBranch, Users } from "lucide-react";

export function GithubShowcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-strong rounded-3xl p-8 sm:p-14 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{ background: "var(--gradient-radial)" }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary">Open source</span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
                Building in <span className="text-gradient">public</span>.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Explore my open-source experiments — from AI agents to automation pipelines and
                production utilities. Every commit pushes the craft a little further.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://github.com/altamashsadiq"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
                >
                  <Github className="w-4 h-4" /> Visit GitHub
                </a>
                <a
                  href="https://github.com/altamashsadiq?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-surface-elevated transition-colors"
                >
                  Browse repositories
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GitBranch, label: "Active repos", value: "4+" },
                { icon: Star, label: "Focus", value: "AI / Web" },
                { icon: Users, label: "Open to", value: "Collab" },
                { icon: Github, label: "Handle", value: "@altamashsadiq" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-5"
                >
                  <s.icon className="w-5 h-5 text-primary mb-3" />
                  <div className="font-semibold truncate">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
