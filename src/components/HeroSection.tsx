import React, { useEffect, useState } from 'react';
import { ChevronDown, Terminal, Code, Database, Layers } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [fullText] = useState('DEVELOPER');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-10 overflow-hidden">
      {/* Animated background objects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-gaming-purple/10 animate-float" style={{ animationDelay: '0s' }}>
          <Terminal size={120} />
        </div>
        <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-gaming-blue/10 animate-float" style={{ animationDelay: '2s' }}>
          <Code size={150} />
        </div>
        <div className="absolute top-2/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-gaming-orange/10 animate-float" style={{ animationDelay: '4s' }}>
          <Database size={100} />
        </div>
        <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-gaming-red/10 animate-float" style={{ animationDelay: '1s' }}>
          <Layers size={130} />
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-4 text-gaming-orange font-pixel tracking-widest">
          <span className="inline-block py-1 px-3 border border-gaming-orange rounded-sm">LEVEL 99</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-future font-extrabold mb-6 tracking-wider leading-tight">
          <span className="block">VISHNU NARAYANA</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gaming-purple to-gaming-blue animate-glow">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-8 font-pixel leading-relaxed">
          Full Stack Developer crafting digital experiences with precision and passion.
          Transforming complex challenges into elegant code solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#projects" className="cyber-btn">
            View Projects
          </a>
          <a href="#contact" className="cyber-btn border-gaming-blue">
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
