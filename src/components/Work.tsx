'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with product listings, cart functionality, and secure checkout process.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    image: '/project1.jpg',
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://ecommerce-demo.example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    category: 'web',
    image: '/project2.jpg',
    github: 'https://github.com/yourusername/task-management',
    demo: 'https://taskapp-demo.example.com',
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    description: 'Mobile app for tracking workouts, nutrition, and fitness progress with data visualization.',
    tags: ['React Native', 'Redux', 'Firebase'],
    category: 'mobile',
    image: '/project3.jpg',
    github: 'https://github.com/yourusername/fitness-tracker',
  },
  {
    id: 4,
    title: 'AI Image Generator',
    description: 'Web application that generates images using AI based on text prompts.',
    tags: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
    category: 'ai',
    image: '/project4.jpg',
    github: 'https://github.com/yourusername/ai-image-generator',
    demo: 'https://ai-image-generator.example.com',
  },
];

const categories = ['all', 'web', 'mobile', 'ai'];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects. Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-xl border border-border bg-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="h-48 bg-muted/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-primary/20 text-primary-foreground rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;
