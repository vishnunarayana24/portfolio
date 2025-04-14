
import React from 'react';
import { Award, BookOpen, Gamepad2, Cpu, Code, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">PLAYER PROFILE: VISHNU NARAYANA</h2>
        
        <div className="gaming-card max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6 rounded-lg overflow-hidden neo-border">
                <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple/20 to-gaming-blue/20"></div>
                <div className="w-full h-full flex items-center justify-center bg-gaming-darkAlt">
                  <Gamepad2 className="w-24 h-24 text-gaming-purple" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 py-1 bg-gaming-darkAlt/80 backdrop-blur-sm text-center">
                  <span className="font-future text-sm">SOFTWARE ENGINEER</span>
                </div>
              </div>
              
              <div className="space-y-2 text-center">
                <div className="font-pixel text-gaming-orange">CLASS: SOFTWARE DEVELOPER</div>
                <div className="font-pixel text-gray-400">TECH STACK: FULL STACK</div>
                <div className="font-pixel text-gray-400">LEVEL: EXPERIENCED</div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-2xl font-future mb-4 text-gaming-purple">Player Bio</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hey, I'm Vishnu Narayana, a passionate software developer with a keen eye for creating innovative and efficient web applications. My journey in tech is driven by curiosity, problem-solving, and a love for turning complex challenges into elegant digital solutions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a solid foundation in full-stack development, I specialize in crafting seamless user experiences and robust backend architectures. I'm constantly expanding my skill set, exploring new technologies, and leveling up my coding prowess.
              </p>
              
              <h3 className="text-2xl font-future mb-4 mt-8 text-gaming-blue">Character Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Award className="text-gaming-orange" />
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="text-gaming-orange" />
                  <span>Continuous Learner</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="text-gaming-orange" />
                  <span>Technical Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="text-gaming-orange" />
                  <span>Clean Coder</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-gaming-orange" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
