import { motion } from "framer-motion";
import { ArrowUpRight, Github, Brain, Workflow, Headphones, Database } from "lucide-react";

const projects = [
  {
    title: "Research Analysis Agent",
    blurb: "An AI agent that autonomously researches topics, synthesizes findings, and produces structured reports — built on LLM orchestration and tool-calling.",
    tech: ["Python", "LangChain", "OpenAI", "Agents"],
    skills: ["LLM orchestration", "Tool-use", "Prompt engineering"],
    href: "https://github.com/altamashsadiq/RESEARCH-ANALYISIS-AGENT-",
    icon: Brain,
    span: "md:col-span-2 md:row-span-2",
    accent: "from-cyan-400/20 to-violet-500/20",
  },
  {
    title: "RAG Pipeline",
    blurb: "Retrieval-augmented generation pipeline with chunking, embeddings, and vector search for grounded, source-cited answers.",
    tech: ["Python", "Embeddings", "Vector DB", "RAG"],
    skills: ["Retrieval", "Semantic search", "Context engineering"],
    href: "https://github.com/altamashsadiq/RAG-Pipeline",
    icon: Database,
    span: "md:col-span-1",
  },
  {
    title: "Customer Support Workflow",
    blurb: "Automated customer support pipeline that triages, routes, and responds to incoming tickets using an intelligent rule + AI hybrid.",
    tech: ["Automation", "Workflows", "AI", "Integrations"],
    skills: ["Workflow design", "Integrations", "Ops automation"],
    href: "https://github.com/altamashsadiq/CUSTOMER-SUPPORT-WORKFLOW",
    icon: Headphones,
    span: "md:col-span-1",
  },
  {
    title: "Personal Productivity Manager",
    blurb: "A focused productivity manager that organizes tasks, priorities, and routines with a clean, distraction-free interface.",
    tech: ["TypeScript", "React", "UI/UX"],
    skills: ["Product thinking", "State management", "Clean UI"],
    href: "https://github.com/altamashsadiq/PERSONAL-PRODUCTIVITY-MANAGER",
    icon: Workflow,
    span: "md:col-span-2",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Selected work</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Featured <span className="text-gradient">projects</span></h2>
          </div>
          <a
            href="https://github.com/altamashsadiq"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            See all on GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 md:auto-rows-[minmax(220px,auto)] gap-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative glass rounded-3xl p-7 overflow-hidden hover:shadow-glow transition-all ${p.span || ""}`}
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <p.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-surface-elevated text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Github className="w-3.5 h-3.5" /> View repository
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
