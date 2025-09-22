'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
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
    title: 'MINDMATE – AI-Powered Mental Health Journal',
    description: 'An AI-powered journal app offering real-time mood analysis and personalized mental health support using DistilRoBERTa and OpenAI GPT APIs.',
    tags: ['Next.js', 'FastAPI', 'HuggingFace', 'OpenAI', 'Tailwind CSS'],
    category: 'ai',
    image: '/mindmate.png',
    github: 'https://github.com/jaydoshi33/mindmate',
    demo: 'https://mindmate-ai-demo.vercel.app',
  },
  {
    id: 2,
    title: 'Fraud Detection System',
    description: 'High-accuracy (99%) fraud detection ML API with FastAPI backend and Streamlit UI for financial transaction analysis.',
    tags: ['FastAPI', 'Streamlit', 'scikit-learn', 'Docker', 'GitHub Actions'],
    category: 'ai',
    image: '/fraud-detection.png',
    github: 'https://github.com/jaydoshi33/Credit-Card-Fraud-Detection',
    demo: 'https://fraud-detection-demo.herokuapp.com',
  },
  {
    id: 3,
    title: 'ML Powered Churn Predictor',
    description: 'Random Forest model achieving 95% accuracy in identifying high-risk banking customers with comprehensive feature importance analysis.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
    category: 'ai',
    image: '/churn-pred.png',
    github: 'https://github.com/jaydoshi33/banking-churn-prediction',
  },
  {
    id: 4,
    title: 'Student Profile Management System',
    description: 'Streamlined document verification workflow reducing approval time from 15 to 3 days for 150+ daily users.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    category: 'web',
    image: '/student-profile.png',
    github: 'https://github.com/jaydoshi33/Student-Profile-Management-System',
  },
  {
    id: 5,
    title: 'AR-Based Learning Application',
    description: 'Real-time 3D AR tool in Unity/C# for simulating surgical procedures, awarded 2nd prize and patented with the Government of India.',
    tags: ['Unity', 'C#', 'ARCore', 'Blender', '3D Modeling'],
    category: 'mobile',
    image: '/AR-dental-2.jpg',
    github: 'https://github.com/jaydoshi33/Augmented-Reality-App',
  },
  {
    id: 6,
    title: 'Cosmos Zone Management System',
    description: 'NSF-funded project for spectrum sharing in NYC/Manhattan with Flask APIs, Redis, and Kubernetes orchestration.',
    tags: ['Python', 'Flask', 'Redis', 'Kubernetes', 'PostgreSQL'],
    category: 'web',
    github: 'https://github.com/jaydoshi33/Cosmos-ZoneManagementSystem',
    image: '/cosmos-logo-new.png',
  },
];

const categories = ['all', 'web', 'ai', 'mobile'];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Research</h2>
          <p className="text-muted-foreground">
            A collection of my technical projects, research work, and contributions. Each project reflects my passion for solving complex problems with innovative solutions.
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
                  : 'text-foreground hover:text-primary'
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
                <div className="relative group overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-primary/20 text-primary-foreground px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-48 bg-background/50 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:underline group-hover:translate-x-1 transition-transform"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github className="h-4 w-4 mr-1" />
                          View Code
                          <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <a href="https://github.com/jaydoshi33" target="_blank" rel="noopener noreferrer">
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
