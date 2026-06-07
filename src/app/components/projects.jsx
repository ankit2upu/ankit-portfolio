import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import ems from '../../assets/ems.png'
import tools from '../../assets/tools.png'
import x from '../../assets/college.png'
import chatbot from '../../assets/chatbot.png'
import tic from '../../assets/tic.png'
import arcl from '../../assets/arcl.png'

export function Projects() {
  const projects = [
    {
      title: 'You Tube Tools',
      description:
        'Full Stack YouTube Tools web app using Spring Boot, Thymeleaf & Tailwind CSS with YouTube Data API integration for SEO tags, thumbnails & video analytics.',
      image:tools,
      tags: ['Thymeleaf', 'Spring Boot', 'Mysql' ],
      github: 'https://github.com/ankit2upu/YouTubeTools',
      demo: 'https://youtubetools-6u2l.onrender.com/',
    },

    {  title: 'Employee Management System',
      description:
        'Full Stack Employee Management System built using React.js, Spring Boot, REST APIs, Axios, Spring Data JPA, and MySQL.',
      image:ems,
      tags: ['React', 'Spring Boot', 'Mysql','Tailwind'],
      github: 'https://github.com/ankit2upu/Employee-Management-System',
      demo: 'https://emsfrontendd.netlify.app/',
      
    },
    { title: 'A Simple Chatbot',
      description:
        'This project demonstrates how to build an AI-powered backend using Spring AI in a Spring Boot application. It integrates with a locally running LLM via Ollama and uses the Qwen(qwen2.5:3b) model to generate intelligent responses',
      image:chatbot,
      tags: ['Spring Boot', 'Spring ai', 'html','css', 'Ollama', 'Qwen'],
      github: 'https://github.com/ankit2upu/springboot-ollama-qwen-integration',
      demo: 'https://springboot-ollama-qwen-integration.onrender.com/',
      
    },
     { title: 'University-landing Page Website',
      description:
        'A simple and responsive website built using React.js, JavaScript, and CSS as part of my college project.',
      image:x,
      tags: ['JavaScript', 'React.js', 'css','html',],
      github: 'https://github.com/ankit2upu/simple_react_app',
      demo: 'https://ankitrupubasicreact.netlify.app/',
      
    },
    
     { title: 'ARCL Instruments',
      description: 'ARCL Instruments is a full-stack web application for scientific equipment management.Allows product search, filtering, quotation requests, and order management.',
      image:arcl,
      tags: ['React.js', 'Tailwind', 'css','MongoDB', 'Node.js', 'Express.js'],
      github: 'https://github.com/ankit2upu/simple_react_app',
      demo: 'https://ankitrupubasicreact.netlify.app/',
      
    },
     { title: 'Tic Toc Toe',
      description:'A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. This project demonstrates core front-end development concepts like DOM manipulation, game logic, and responsive UI design.',
      image:tic,
      tags: ['JavaScript','css','html', 'DOM'],
      github: 'https://github.com/ankit2upu/tic-tac-toe/',
      demo: 'https://ankit2upu.github.io/tic-tac-toe/',
      
    },
  ];

  return (
    
   

    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl text-center mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
              
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
