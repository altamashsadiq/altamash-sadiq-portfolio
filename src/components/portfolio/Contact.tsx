import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "altamashbhatti02@gmail.com", href: "mailto:altamashbhatti02@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 339 4731386", href: "tel:+923394731386" },
  { icon: Github, label: "GitHub", value: "github.com/altamashsadiq", href: "https://github.com/altamashsadiq" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/altamash-sadiq", href: "https://www.linkedin.com/in/altamash-sadiq-9a758336b/" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Contact</span>
          <h2 className="mt-3 text-4xl sm:text-6xl font-bold leading-tight">
            Let's build something <span className="text-gradient">exceptional</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Have a project, role, or idea worth exploring? I reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-glow transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="text-sm font-medium truncate">{c.value}</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:altamashbhatti02@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
          >
            Start a conversation <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
