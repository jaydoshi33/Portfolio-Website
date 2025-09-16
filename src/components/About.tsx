'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FileText, Code, Database, Server, Cpu, Cloud, GitBranch } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Code, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: Server, items: ['Node.js', 'Express', 'Python', 'Django'] },
  { name: 'Mobile', icon: Cloud, items: ['React Native', 'Flutter', 'iOS', 'Android'] },
  { name: 'Database', icon: Database, items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'] },
  { name: 'DevOps', icon: GitBranch, items: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions'] },
  { name: 'AI/ML', icon: Cpu, items: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'] },
];

const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading the frontend development of a SaaS platform using React and TypeScript.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    period: '2020 - 2022',
    description: 'Developed and maintained web applications using Next.js and Node.js.',
  },
  {
    role: 'Frontend Developer',
    company: 'WebCraft Studios',
    period: '2018 - 2020',
    description: 'Created responsive user interfaces and implemented modern web designs.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            I'm a passionate developer with expertise in building exceptional digital experiences.
            With a strong foundation in both frontend and backend development,
            I create seamless, responsive, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center mb-2">
                    <skill.icon className="h-5 w-5 mr-2 text-primary" />
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-6 pb-6 border-l-2 border-border last:border-l-0 last:pb-0">
                  <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-1" />
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">{exp.role}</h4>
                    <p className="text-muted-foreground">{exp.company} • {exp.period}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="mt-6 group">
              View Full Resume
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary/5 p-8 rounded-2xl border border-border"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Let's work together</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
