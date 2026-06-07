import { motion } from 'motion/react';
import { SkillBar } from '@/app/components/skill-bar';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'Tailwind' ,'JavaScript', 'React' ,'Responsive Design',],
    },
    {
      category: 'Backend',
      skills: ['Java', 'jdbc', 'Servlet', 'Spring' ,'Spring Boot', 'Spring ai', 'REST APIs', 'MySQL', 'Hibernate'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code','Postman', 'Eclipse', 'Render', 'Railways', 'Netlify', 'Aiven'],
    },
  ];

  const skillLevels = [
    { skill: 'HTML/CSS', percentage: 90 },
    { skill: 'JavaScript', percentage: 85 },
    { skill: 'Java', percentage: 80 },
    { skill: 'Spring', percentage: 80 },
    { skill: 'Spring Boot', percentage: 65 },
    { skill: 'Spring ai', percentage: 45 },
    {skill: 'React', percentage:80},
    { skill: 'MySQL', percentage: 75 },
    { skill: 'Git/GitHub', percentage: 85 },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl text-center mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          {/* Skill Progress Bars */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl text-center mb-8">Proficiency Levels</h3>
            <div className="bg-card p-8 rounded-lg border border-border">
              {skillLevels.map((item, index) => (
                <SkillBar
                  key={index}
                  skill={item.skill}
                  percentage={item.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <h3 className="text-xl mb-6 text-center">{category.category}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
