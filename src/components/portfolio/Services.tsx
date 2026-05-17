import { motion } from "framer-motion";
import { Globe, Smartphone, Bot, Cog, Database, Layers } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Modern, fast, SEO-optimized web apps built with React, Next.js, and TanStack." },
  { icon: Smartphone, title: "Mobile & PWA", desc: "Cross-platform apps that feel native — built once, deployed everywhere." },
  { icon: Bot, title: "AI Agents & RAG", desc: "Custom GPTs, retrieval pipelines, and intelligent assistants that ship value." },
  { icon: Cog, title: "Automation", desc: "n8n, Zapier, and bespoke pipelines to eliminate repetitive work." },
  { icon: Database, title: "Backend & APIs", desc: "Scalable APIs, databases, and auth — production-ready from day one." },
  { icon: Layers, title: "UI / UX Engineering", desc: "Polished, accessible interfaces with a designer's eye for detail." },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Services</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">What I <span className="text-gradient">build</span></h2>
          <p className="mt-4 text-muted-foreground">
            Full-spectrum software services — strategy, design, and engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              className="group glass rounded-2xl p-6 relative overflow-hidden hover:shadow-glow transition-all"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-primary blur-3xl -z-10" style={{ opacity: 0.08 }} />
              <s.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
