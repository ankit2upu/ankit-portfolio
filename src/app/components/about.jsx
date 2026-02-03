import { motion } from 'motion/react';
import { Code, Palette, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Full Stack Development',
      description: 'Building complete web applications from frontend to backend with modern frameworks.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Responsive Design',
      description: 'Creating mobile-friendly and user-centric interfaces that work across all devices.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Backend Architecture',
      description: 'Developing scalable backend systems with Java and Spring Boot framework.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-foreground/80 mb-4">
              I'm currently pursuing my Master of Computer Applications (MCA), with a strong 
              passion for web development and software engineering. I specialize in building 
              full-stack applications using HTML, CSS, JavaScript, Java, and Spring Boot.
            </p>
            <p className="text-lg text-foreground/80">
              I'm constantly learning and exploring new technologies to enhance my skills and 
              build innovative solutions. My goal is to become a proficient software developer 
              who can create impactful applications that solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
