import React from 'react';
import { Shield, Cpu, Globe, Database, PaintBucket, Server, Wand } from 'lucide-react';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-pixel text-white">{skill}</span>
        <span className="font-pixel text-gaming-orange">{percentage}%</span>
      </div>
      <div className="skill-bar rounded-sm">
        <div className="skill-progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: Array<{name: string; level: number}> }) => {
  return (
    <div className="gaming-card h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-gaming-dark neo-border">
          {icon}
        </div>
        <h3 className="text-xl font-future text-gaming-purple">{title}</h3>
      </div>
      <div>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} percentage={skill.level} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "Express", level: 80 },
    { name: "Java", level: 65 },
  ];

  const databaseSkills = [
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Firebase", level: 85 },
    { name: "Redis", level: 60 },
  ];

  const devopsSkills = [
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "CI/CD", level: 75 },
    { name: "Git", level: 90 },
  ];

  const aiSkills = [
    { name: "Prompt Engineering", level: 85 },
    { name: "ChatGPT", level: 80 },
    { name: "LLM Interaction", level: 75 },
    { name: "AI Workflow Design", level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gaming-darkAlt/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">SKILL TREE</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <SkillCategory 
            title="Frontend" 
            icon={<Globe size={24} className="text-gaming-purple" />} 
            skills={frontendSkills} 
          />
          <SkillCategory 
            title="Backend" 
            icon={<Server size={24} className="text-gaming-blue" />} 
            skills={backendSkills} 
          />
          <SkillCategory 
            title="Database" 
            icon={<Database size={24} className="text-gaming-orange" />} 
            skills={databaseSkills} 
          />
          <SkillCategory 
            title="DevOps" 
            icon={<Shield size={24} className="text-gaming-red" />} 
            skills={devopsSkills} 
          />
          <SkillCategory 
            title="AI & Prompt" 
            icon={<Wand size={24} className="text-gaming-neon" />} 
            skills={aiSkills} 
          />
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-future mb-6 text-gaming-blue">OTHER TECHNOLOGIES</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Redux", "Next.js", "GraphQL", "Tailwind CSS", "Webpack", "Jest", "Cypress", "Kubernetes", "Azure", "RESTful APIs"].map((tech, index) => (
              <span key={index} className="py-2 px-4 bg-gaming-dark/70 neo-border rounded-sm font-pixel">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
