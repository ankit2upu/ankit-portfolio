import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/20 py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/ankit2upu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ankitgpt2345@gmail.com"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-foreground/70 text-center flex items-center gap-2">
            Made with <Heart size={16} className="text-destructive fill-destructive" /> by Ankit Gupta
          </p>

          <p className="text-foreground/50 text-sm">
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
