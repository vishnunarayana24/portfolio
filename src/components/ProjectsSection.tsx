import React, { useState } from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Server, Layers } from 'lucide-react';
import { ProjectPlaceholder } from './ProjectPlaceholder';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="gaming-card h-full flex flex-col">
      <div className="relative h-48 mb-4 overflow-hidden rounded-md neo-border">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <ProjectPlaceholder
            title={project.title}
            category={project.category}
            id={project.id}
          />
        )}
        <div className="absolute bottom-0 left-0 py-1 px-3 bg-gaming-dark/90 text-xs font-pixel text-gaming-orange">
          LEVEL {project.id}
        </div>
      </div>
      
      <h3 className="text-xl font-future text-gaming-purple mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="text-xs py-1 px-2 bg-gaming-dark rounded-sm text-gaming-blue font-pixel">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3 mt-auto">
        <a 
          href={project.demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-pixel text-white hover:text-gaming-purple transition-colors"
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </a>
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-pixel text-white hover:text-gaming-blue transition-colors"
        >
          <Github size={16} />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
      image: "",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration.",
      image: "",
      tags: ["TypeScript", "React", "Firebase", "Redux"],
      demoUrl: "#",
      githubUrl: "#",
      category: "frontend"
    },
    {
      id: 3,
      title: "Real-time Chat API",
      description: "A scalable backend service for handling real-time messaging with WebSockets.",
      image: "",
      tags: ["Node.js", "Express", "Socket.io", "Redis"],
      demoUrl: "#",
      githubUrl: "#",
      category: "backend"
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      description: "A mobile application for tracking workouts, nutrition, and fitness progress.",
      image: "",
      tags: ["React Native", "GraphQL", "AWS Amplify"],
      demoUrl: "#",
      githubUrl: "#",
      category: "mobile"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A beautiful weather visualization app with forecasts and historical data.",
      image: "",
      tags: ["React", "D3.js", "OpenWeather API"],
      demoUrl: "#",
      githubUrl: "#",
      category: "frontend"
    },
    {
      id: 6,
      title: "Content Management System",
      description: "A custom CMS with a rich text editor, media management, and user permissions.",
      image: "",
      tags: ["Next.js", "PostgreSQL", "S3", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      category: "fullstack"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">PROJECT INVENTORY</h2>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button 
            className={`px-5 py-2 rounded-sm font-pixel text-sm transition-all ${activeFilter === 'all' ? 'bg-gaming-purple text-white' : 'bg-gaming-dark neo-border hover:bg-gaming-darkAlt'}`}
            onClick={() => setActiveFilter('all')}
          >
            ALL PROJECTS
          </button>
          <button 
            className={`px-5 py-2 rounded-sm font-pixel text-sm transition-all ${activeFilter === 'frontend' ? 'bg-gaming-purple text-white' : 'bg-gaming-dark neo-border hover:bg-gaming-darkAlt'}`}
            onClick={() => setActiveFilter('frontend')}
          >
            <Monitor size={14} className="inline mr-1" /> FRONTEND
          </button>
          <button 
            className={`px-5 py-2 rounded-sm font-pixel text-sm transition-all ${activeFilter === 'backend' ? 'bg-gaming-blue text-white' : 'bg-gaming-dark neo-border hover:bg-gaming-darkAlt'}`}
            onClick={() => setActiveFilter('backend')}
          >
            <Server size={14} className="inline mr-1" /> BACKEND
          </button>
          <button 
            className={`px-5 py-2 rounded-sm font-pixel text-sm transition-all ${activeFilter === 'fullstack' ? 'bg-gaming-orange text-white' : 'bg-gaming-dark neo-border hover:bg-gaming-darkAlt'}`}
            onClick={() => setActiveFilter('fullstack')}
          >
            <Layers size={14} className="inline mr-1" /> FULLSTACK
          </button>
          <button 
            className={`px-5 py-2 rounded-sm font-pixel text-sm transition-all ${activeFilter === 'mobile' ? 'bg-gaming-red text-white' : 'bg-gaming-dark neo-border hover:bg-gaming-darkAlt'}`}
            onClick={() => setActiveFilter('mobile')}
          >
            <Smartphone size={14} className="inline mr-1" /> MOBILE
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
