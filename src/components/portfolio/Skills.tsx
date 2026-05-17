import { motion } from "framer-motion";

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "TanStack", "TypeScript", "Tailwind", "Framer Motion"] },
  { title: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Supabase", "REST / GraphQL"] },
  { title: "AI & Data", items: ["LangChain", "OpenAI", "RAG", "Vector DBs", "LlamaIndex", "Embeddings"] },
  { title: "Automation", items: ["n8n", "Zapier", "Workflows", "Webhooks", "Cron jobs", "CI/CD"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Skills</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">The <span className="text-gradient">toolkit</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-primary mb-4">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gradient-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
