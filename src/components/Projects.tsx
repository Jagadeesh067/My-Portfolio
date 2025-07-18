
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Nxt Trendz E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Features include product catalog, shopping cart, order management, and real-time inventory tracking.",
      image: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      githubUrl: "https://github.com/Jagadeesh067/Nxt-Trendz-E-Commerce-Platform",
      liveUrl: "https://jagadeeshtrendz.ccbp.tech/",
      featured: true
    },
    {
  title: "Jobby App",
  description: "A feature-rich job portal with login authentication, job filtering, detailed job views, and failure handling. Implements real-time search and secure routing for a seamless user experience.",
  image: "https://assets.ccbp.in/frontend/react-js/home-lg-bg.png",
  technologies: ["React.js", "React Router", "JWT", "REST APIs", "CSS3"],
  githubUrl: "https://github.com/Jagadeesh067/Enhancement-of-Jobby-App/tree/main",
  liveUrl: "https://JagguJobbyApp.ccbp.tech",
  featured: false
}
,
    {
  title: "IPL Dashboard App",
  description: "An interactive IPL dashboard app that displays team details, recent matches, and live match cards. Implements dynamic routing, loader states, and API integration for a real-time experience.",
  image: "https://exchange4media.gumlet.io/news-photo/139188-IPL.jpg",
  technologies: ["React.js", "React Router", "REST APIs", "CSS3"],
  githubUrl: "https://github.com/Jagadeesh067/Enhancement-of-IPL-Dashboard-App",
  liveUrl: "https://IPLdashboarddj.ccbp.tech",
  featured: false
}
,
    {
  title: "Movies App",
  description: "Built a responsive movies app using React JS to explore trending films, view detailed info, and search by title. Used React Router for navigation and dynamic rendering. Ensured accessibility and mobile-friendly design.",
  image: "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F12038776%2Fdbabda1e8f2d39e88b030173303b2724%2FNetflix.jpg?generation=1713257307281984&alt=media",
  technologies: ["React", "JavaScript", "CSS", "React Router"],
  githubUrl: "https://github.com/Jagadeesh067/Jaggu-Movies-App",
  liveUrl: "https://jaggumoviesapp.ccbp.tech",
  featured: true
}
,
    {
      title: "Resto Cafe App",
      description: "Enhanced restaurant app with login, authentication, and cart features. Supports adding/removing items, protected routes, and persistent cart using Context API and js-cookie.",
      image: "https://lvivity.com/wp-content/uploads/2018/11/mobile-app-for-restaurant.jpg",
      technologies: ["React", "React Router", "Context API", "js-cookie", "Tailwind CSS"],
      githubUrl: "https://github.com/Jagadeesh067/restaurant-app-enhancement/tree/main/enancement_of_restaurent_app-main",
      liveUrl: "https://restoCafeApp.ccbp.tech",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with cutting-edge technologies. Features dark mode, smooth animations, and optimized performance across all devices.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com/Jagadeesh067/My-Portfolio",
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A showcase of my best work and creative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-gray-600 hover:text-blue-600"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-gray-600 hover:text-blue-600"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
  <a
    href="https://github.com/Jagadeesh067"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="outline"
      size="lg"
      className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      <Github className="w-5 h-5 mr-2" />
      View More on GitHub
    </Button>
  </a>
</div>

      </div>
    </section>
  );
};

export default Projects;
