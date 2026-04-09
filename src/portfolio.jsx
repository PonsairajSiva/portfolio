import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['Python', 'PHP', 'JavaScript'],
    runtimes: ['Node.js'],
    frontend: ['HTML', 'CSS'],
    backend: ['Express.js', 'PHP'],
    databases: ['MySQL', 'PostgreSQL'],
    tools: ['GitHub', 'Jira', 'GitHub Actions', 'Arduino'],
    frameworks: ['Laravel', 'React.js', 'Next.js', 'Tailwind', 'Bootstrap'],
    methodologies: ['Agile'],
    apis: ['REST API']
  };

  const projects = [
    {
      title: 'P2P – Procure-to-Pay Supply Chain',
      tech: ['EJS', 'Express.js', 'MySQL'],
      description: 'End-to-end procurement workflow with dashboards, role-based approvals, and audit trails.',
      highlights: ['PRs & POs Management', 'Invoice Processing', 'Real-time Analytics', 'Compliance Tracking']
    },
    {
      title: 'HELPDESK – Internal Ticketing Tool',
      tech: ['EJS', 'Express.js', 'MySQL'],
      description: 'Lightweight ticketing system with role-based access and full lifecycle tracking.',
      highlights: ['Issue Reporting', 'Assignment & Escalation', 'Role-based Access', 'Analytics Dashboard']
    },
    {
      title: 'PR TRACKING SYSTEM',
      tech: ['PHP', 'MySQL'],
      description: 'PR tracking system for Jeyachandran Industries with approval flows and audit visibility.',
      highlights: ['Request Initiation', 'Approval Workflows', 'Status Tracking', 'Audit Visibility']
    },
    {
      title: 'KODIERP – ERP Tool',
      tech: ['Next.js', 'PostgreSQL'],
      description: 'Responsive Next.js frontend for core ERP modules with API integration.',
      highlights: ['Voucher Management', 'Receipt Processing', 'Master Data', 'Data Validation']
    }
  ];

  const experience = [
    {
      company: 'JEYARAMA INFOTECH',
      role: 'Full Stack Developer, DevOps',
      period: 'Mar 2025 – Present',
      location: 'Chennai, Tamil Nadu',
      achievements: [
        'Delivered end-to-end full stack development for internal enterprise applications',
        'Engineered dashboards with analytics layers for real-time insights',
        'Developed ticketing and service management system with workflow automation'
      ]
    },
    {
      company: 'MEGA MIND COMPUTING SOLUTIONS',
      role: 'Full Stack Developer, Intern',
      period: 'Jun 2024 – Feb 2025',
      location: 'Chennai, Tamil Nadu',
      achievements: [
        'Developed multiple web application modules using Node.js and Express.js',
        'Built responsive interfaces with MySQL database integration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            PS
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'experience', 'projects', 'skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 ${
                  activeSection === item ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-cyan-500/20 p-4 space-y-4">
            {['home', 'about', 'experience', 'projects', 'skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-50"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Ponsairaj S
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
                Full Stack Developer & DevOps Engineer
              </p>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Building scalable web applications with modern technologies. Specialized in full-stack development, 
              enterprise solutions, and DevOps practices.
            </p>

            <div className="flex gap-4 justify-center md:justify-start pt-8">
              <a href="mailto:ponsairajsiva@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Mail size={20} />
                Get in Touch
              </a>
              <a href="https://github.com/PonsairajSiva" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">
                <ExternalLink size={20} />
                GitHub
              </a>
            </div>

            <div className="flex gap-6 text-gray-400 justify-center md:justify-start pt-4">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a Full Stack Developer with 1+ years of experience building enterprise applications. 
                With a strong foundation in computer science and hands-on experience across the entire development stack, 
                I specialize in creating scalable, user-centric solutions.
              </p>

              <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-white">BE in Computer Science</p>
                    <p className="text-gray-400">Apollo Engineering College</p>
                    <p className="text-gray-500 text-sm">2020 – 2024 | CGPA: 8.4</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">HSC</p>
                    <p className="text-gray-400">St. Mary's Mat Hr Sec School</p>
                    <p className="text-gray-500 text-sm">2018 – 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">1+</h3>
                <p className="text-gray-300">Years of Experience</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">4</h3>
                <p className="text-gray-300">Major Projects Completed</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Full Stack</h3>
                <p className="text-gray-300">Frontend to Backend & DevOps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="group relative bg-slate-800/30 border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg p-8 transition-all duration-300 hover:bg-slate-800/50">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-500 mb-4 flex items-center gap-2">
                    <MapPin size={16} /> {exp.location}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3">{project.title}</h3>
                  
                  <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-cyan-400">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/30 border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-8 text-center">
            <p className="text-gray-300 mb-6">
              Let's build something amazing together. I'm always interested in taking on new challenges and learning new technologies.
            </p>
            <a href="mailto:ponsairajsiva@gmail.com" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold">
              <Mail size={20} />
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© 2026 Ponsairaj S. All rights reserved. Built with React.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
