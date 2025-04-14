import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Gamepad2 } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled 
        ? "bg-gaming-dark/90 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2 font-future text-xl font-bold">
          <Gamepad2 className="text-gaming-purple" />
          <span className="animate-glow">PORTFOLIO</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="link-hover">ABOUT</a>
          <a href="#skills" className="link-hover">SKILLS</a>
          <a href="#projects" className="link-hover">PROJECTS</a>
          <a href="#contact" className="link-hover">CONTACT</a>
        </div>
        
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gaming-darkAlt/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 pt-20">
          <a href="#about" className="text-xl link-hover" onClick={toggleMobileMenu}>ABOUT</a>
          <a href="#skills" className="text-xl link-hover" onClick={toggleMobileMenu}>SKILLS</a>
          <a href="#projects" className="text-xl link-hover" onClick={toggleMobileMenu}>PROJECTS</a>
          <a href="#contact" className="text-xl link-hover" onClick={toggleMobileMenu}>CONTACT</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
