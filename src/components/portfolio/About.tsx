import { motion } from "framer-motion";
import { Code2, Rocket, Brain, Workflow } from "lucide-react";

const pillars = [
  { icon: Code2, title: "Engineering", desc: "Production-grade code with clean architecture." },
  { icon: Brain, title: "AI Native", desc: "LLM agents, RAG pipelines, and intelligent workflows." },
  { icon: Workflow, title: "Automation", desc: "End-to-end systems that scale without friction." },
  { icon: Rocket, title: "Velocity", desc: "Ship fast, iterate faster, deliver results." },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">About</span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              A studio of <span className="text-gradient">one</span>, building like a team of ten.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I help founders, startups, and businesses translate ideas into refined, performant
              software. From AI agents to customer workflows and production web apps — every project
              is engineered with care, taste, and an obsession for the details that matter.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you need a polished MVP, an AI integration, or a custom automation pipeline,
              I bring strategy, design sense, and senior-level engineering to the table.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <p.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
