import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass-strong shadow-elegant" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-block w-7 h-7 rounded-lg bg-gradient-primary shadow-glow" />
            <span className="text-gradient">Altamash</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
          >
            Hire me
          </a>
        </div>
      </div>
    </motion.header>
  );
}
