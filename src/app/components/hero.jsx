import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { TypingAnimation } from "@/app/components/typing-animation";
 import user from '../../assets/user-3.jpg'

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 my-5">
            {/* <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground text-4xl mb-6">
            </div> */}
            <img
              src={user}
              className="w-35 h-35 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground text-4xl mb-6"
              alt=""
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
            Hi, I'm <span className="text-primary">Ankit Gupta</span>
          </h1>

          <div className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto h-8">
            <TypingAnimation
              texts={[
                "MCA Student",
                "Full Stack Developer",
                "Java & Spring Boot Developer",
                "React Developer",
                "Web Developer",
              ]}
            />
          </div>

          <p className="text-base sm:text-lg text-foreground/70 mb-12 max-w-xl mx-auto">
            Aspiring full-stack developer focused on modern web technologies and
            clean coding practices. Entry-level web developer crafting modern
            web applications with a passion for clean code.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://github.com/ankit2upu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit2upu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ankitgpt2345@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.instagram.com/__a_n_k_i__t_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={() => scrollToSection("about")}
          className="mt-16 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} className="text-muted-foreground" />
        </motion.button>
      </div>
    </section>
  );
}
