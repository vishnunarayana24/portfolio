
import React from 'react';
import { Heart, Code, Cpu } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gaming-darkAlt">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 font-future text-xl font-bold">
              <Cpu className="text-gaming-purple" />
              <span>VISHNU NARAYANA</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {currentYear} Vishnu Narayana. All rights reserved</span>
            <span className="px-2">|</span>
            <span className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-gaming-red" /> and <Code size={14} className="mx-1 text-gaming-blue" />
            </span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="#hero" className="font-pixel text-gray-400 hover:text-white transition-colors">
              BACK TO TOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
