import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-block w-6 h-6 rounded-md bg-gradient-primary" />
          <span className="font-display font-semibold text-gradient">Altamash Sadiq</span>
          <span className="text-muted-foreground">— Software studio</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="https://github.com/altamashsadiq" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/altamash-sadiq-9a758336b/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:altamashbhatti02@gmail.com" className="hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Altamash Sadiq. All rights reserved.</div>
      </div>
    </footer>
  );
}
