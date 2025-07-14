
import { Heart, ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:text-gray-700"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      color: "hover:text-sky-500"
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Your Full Name
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Passionate full-stack developer dedicated to creating innovative digital solutions 
                that bridge creativity and technology. Always learning, always building.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${social.color} hover:bg-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Quick Links</h4>
            <nav className="space-y-3">
              {navigationLinks.slice(0, 5).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-purple-400">More</h4>
            <nav className="space-y-3">
              {navigationLinks.slice(5).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
    
        {/* Skills Highlight */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-center">Technologies I Work With</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'Java','JavaScript', 
              'Tailwind CSS', 'MongoDB'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Your Full Name. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-500">
            <span>🚀 50+ projects completed</span>
            <span>•</span>
            <span>☕ 1,000+ cups of coffee consumed</span>
            <span>•</span>
            <span>🌱 Always learning something new</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5 pointer-events-none" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl" />
    </footer>
  );
};

export default Footer;
