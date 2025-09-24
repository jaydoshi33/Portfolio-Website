'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, GitBranch, GraduationCap, Briefcase, BrainCircuit, CpuIcon, Cloud, Code2 } from 'lucide-react';

const education = [
  {
    degree: 'Masters in Computer Science',
    institution: 'Syracuse University, NY, USA',
    period: 'Expected May 2026',
    gpa: 'GPA: 3.67',
  },
  {
    degree: 'Bachelors in Computer Engineering',
    institution: 'University of Mumbai, Mumbai, India',
    period: 'Jun 2018 - May 2022',
    gpa: 'GPA: 3.83',
  },
];

const skills = [
  { 
    name: 'Languages', 
    icon: Code2, 
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'Bash', 'C++', 'HTML/CSS'] 
  },
  { 
    name: 'Frameworks', 
    icon: Code, 
    items: ['React', 'Next.js', 'Spring Boot', 'Flask', 'FastAPI'] 
  },
  { 
    name: 'AI/ML', 
    icon: BrainCircuit, 
    items: ['OpenAI GPT', 'HuggingFace', 'Transformers', 'T5', 'LangChain'] 
  },
  { 
    name: 'Cloud & DevOps', 
    icon: Cloud, 
    items: ['AWS', 'Docker', 'Kubernetes', 'RedHat OpenShift', 'Jenkins', 'Git', 'GitHub Actions'] 
  },
  { 
    name: 'Database', 
    icon: Database, 
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'] 
  },
  { 
    name: 'Testing & Tools', 
    icon: CpuIcon, 
    items: ['Selenium', 'Pytest', 'JIRA', 'Postman', 'CI/CD Pipelines'] 
  },
];

import type { Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 15
    }
  }
};

const skillItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

const experience = [
  {
    id: 1,
    role: 'Research Assistant (Software Engineering)',
    company: 'Syracuse University, NY, USA',
    period: 'Apr 2025 - Present',
    description: 'NSF-Funded Cosmos Zone Management System for Spectrum Sharing',
    achievements: [
      'Built the first-of-its-kind RF interference monitoring and management system, enabling seamless spectrum sharing for 3,000+ devices across NYC under the NSF-funded NRDZ project',
    ],
    icon: BrainCircuit,
    color: 'text-purple-500'
  },
  {
    id: 2,
    role: 'Program Manager',
    company: 'iConsult Collaborative (Nonprofit), NY, USA',
    period: 'Mar 2025 - Present',
    description: 'Web Platform Development for Poverty-Alleviation Programs',
    achievements: [
      'Delivered multiple community development web apps under tight deadlines, optimizing performance and collaborating with design teams to ensure accessibility; ran sprint demos and iterated on UI/UX with stakeholders, driving smooth adoption and real impact for community programs',
    ],
    icon: GitBranch,
    color: 'text-blue-500'
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'Cognizant Technology Solutions, Mumbai, India',
    period: 'Dec 2021 - Jul 2024',
    description: 'Insurance Automation Platform',
    achievements: [
      'Engineered enterprise web solutions with Java/Spring Boot microservices + React, delivering 25+ production-ready features — including an automated insurance renewal system that cut manual errors by 65% and saved 20+ hours/month — with Dockerized services deployed to AWS via CI/CD',
    ],
    icon: Code,
    color: 'text-green-500'
  },
];

const experienceItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }),
  hover: {
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15
    }
  }
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Passionate Computer Science graduate student with expertise in full-stack development, AI/ML, and distributed systems.
            Experienced in building scalable applications and leading technical teams to deliver high-impact solutions.
            Strong background in software engineering, cloud technologies, and data-driven development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <p className="text-sm text-primary mt-1">{edu.gpa}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={container}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Code className="h-6 w-6 mr-2 text-primary" />
              </motion.div>
              Technical Skills
            </h3>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover="hover"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="p-4 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <skill.icon className="h-5 w-5 mr-2 text-primary" />
                      </motion.div>
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={container}
                    >
                      {skill.items.map((item, i) => (
                        <motion.span
                          key={i}
                          custom={i}
                          variants={skillItem}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          className="inline-block text-xs px-3 py-1.5 bg-background rounded-full text-foreground/90 hover:text-foreground transition-colors cursor-default border border-border hover:border-primary/30"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Briefcase className="h-6 w-6 mr-2 text-primary" />
            </motion.div>
            Professional Experience
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 z-0" />
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  custom={index}
                  variants={experienceItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative pl-12 group overflow-visible`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-4 w-8 h-8 rounded-full flex items-center justify-center ${exp.color} bg-background border-2 border-primary/20 transition-colors`}>
                    <exp.icon className="w-4 h-4" />
                  </div>
                  
                  <motion.div 
                    className="relative z-10 p-6 bg-background rounded-xl border border-border shadow-sm transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <span className="text-sm px-3 py-1 bg-background rounded-full border border-border">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                    <p className="text-sm text-muted-foreground italic mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { 
                              delay: 0.1 * i,
                              duration: 0.3 
                            } 
                          }}
                          viewport={{ once: true }}
                          className="flex items-start text-sm"
                        >
                          <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 ${exp.color}`} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
