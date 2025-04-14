import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gaming-darkAlt/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">OPEN COMMUNICATION CHANNEL</h2>
        
        <div className="max-w-4xl mx-auto gaming-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-future mb-6 text-gaming-purple">MESSAGE ME</h3>
              
              {submitted ? (
                <div className="bg-gaming-dark/50 p-6 rounded-md neo-border text-center">
                  <div className="text-gaming-blue text-4xl mb-4">
                    <MessageSquare className="w-16 h-16 mx-auto" />
                  </div>
                  <h4 className="text-xl font-future mb-2">MESSAGE SENT!</h4>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll respond to your message as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-pixel text-gray-300">YOUR NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gaming-dark neo-border text-white rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-gaming-purple"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-pixel text-gray-300">YOUR EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gaming-dark neo-border text-white rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-gaming-purple"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-pixel text-gray-300">YOUR MESSAGE</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gaming-dark neo-border text-white rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-gaming-purple"
                      placeholder="Enter your message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-btn w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        SEND MESSAGE
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-future mb-6 text-gaming-blue">CONTACT INFO</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gaming-dark rounded-md neo-border text-gaming-purple">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-future text-white mb-1">EMAIL</h4>
                      <a href="mailto:vishnunarayana2003@gmail.com" className="text-gray-300 hover:text-gaming-purple transition-colors">
                        vishnunarayana2003@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-future mb-6 text-gaming-orange">CONNECT</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/vishnunarayana24" 
                    className="p-3 bg-gaming-dark rounded-md neo-border text-white hover:text-gaming-purple transition-colors"
                    aria-label="Github"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vishnunarayana/" 
                    className="p-3 bg-gaming-dark rounded-md neo-border text-white hover:text-gaming-blue transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
