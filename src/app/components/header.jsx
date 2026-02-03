import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold hover:text-primary/80 transition-colors"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-border">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-left text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
