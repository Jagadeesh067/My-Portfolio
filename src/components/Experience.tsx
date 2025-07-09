
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechStart Solutions",
      location: "San Francisco, CA",
      duration: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: [
        "Developed responsive web applications using React and TypeScript, improving user experience by 25%",
        "Collaborated with senior developers to implement new features and optimize existing codebase",
        "Participated in code reviews and learned best practices for maintainable, scalable code",
        "Built reusable UI components that reduced development time by 30% across multiple projects"
      ],
      technologies: ["React", "TypeScript", "CSS3", "Git", "Agile"],
      website: "#"
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      location: "Remote",
      duration: "Jan 2023 - Present",
      type: "Freelance",
      description: [
        "Created custom websites for small businesses, resulting in an average 40% increase in online engagement",
        "Managed full project lifecycle from client consultation to deployment and maintenance",
        "Implemented SEO best practices and responsive design principles for optimal user experience",
        "Delivered projects on time and within budget, maintaining 100% client satisfaction rate"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Figma"],
      website: "#"
    },
    {
      title: "Research Assistant",
      company: "University Computer Science Lab",
      location: "University Campus",
      duration: "Sep 2022 - May 2023",
      type: "Part-time",
      description: [
        "Assisted graduate students with machine learning research projects focused on natural language processing",
        "Collected and preprocessed large datasets for training ML models, improving data quality by 20%",
        "Documented research findings and contributed to academic papers and presentations",
        "Gained hands-on experience with Python, TensorFlow, and data analysis tools"
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Jupyter"],
      website: "#"
    },
    {
      title: "IT Support Volunteer",
      company: "Local Community Center",
      location: "Community Center",
      duration: "Jun 2022 - Aug 2022",
      type: "Volunteer",
      description: [
        "Provided technical support to community members, helping with computer literacy and basic troubleshooting",
        "Set up and maintained computer lab equipment for educational programs",
        "Taught basic web development skills to teenagers in summer coding bootcamp",
        "Developed problem-solving skills while working with diverse age groups and technical skill levels"
      ],
      technologies: ["Windows", "Microsoft Office", "Basic HTML/CSS", "Troubleshooting"],
      website: "#"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Freelance':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Part-time':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Volunteer':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block" />

                <div className="md:ml-20">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {exp.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span>{exp.company}</span>
                          {exp.website && (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 hover:scale-110 transition-transform duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{exp.duration}</span>
                          </div>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {exp.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Looking for New Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm actively seeking internship and entry-level positions where I can contribute my skills 
              and continue learning from experienced professionals in the tech industry.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
