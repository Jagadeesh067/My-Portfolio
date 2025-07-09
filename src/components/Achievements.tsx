
import { Trophy, Award, Medal, Star, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "1st Place at University Code Challenge 2023",
      details: "Led a team of 4 developers to create an innovative solution for campus resource management. Built a full-stack web application in 48 hours using React, Node.js, and MongoDB.",
      date: "March 2023",
      category: "Competition",
      color: "gold"
    },
    {
      icon: Medal,
      title: "Dean's List",
      description: "Academic Excellence Recognition",
      details: "Achieved Dean's List status for consecutive semesters (Fall 2022, Spring 2023) maintaining a GPA above 3.5 while taking advanced computer science courses.",
      date: "2022-2023",
      category: "Academic",
      color: "blue"
    },
    {
      icon: Award,
      title: "Open Source Contributor",
      description: "Contributed to 15+ GitHub repositories",
      details: "Active contributor to open source projects with over 100 contributions. Helped fix bugs, add features, and improve documentation for various web development tools and libraries.",
      date: "2022-Present",
      category: "Community",
      color: "green"
    },
    {
      icon: Star,
      title: "Coding Bootcamp Mentor",
      description: "Volunteer Instructor for Local Coding Bootcamp",
      details: "Mentored 25+ students in web development fundamentals. Taught HTML, CSS, and JavaScript basics while helping students build their first web projects.",
      date: "Summer 2023",
      category: "Leadership",
      color: "purple"
    },
    {
      icon: Target,
      title: "Perfect Project Score",
      description: "100% on Capstone Project",
      details: "Developed a comprehensive e-learning platform as final year project. Received perfect scores on design, implementation, and presentation from all three professors.",
      date: "Spring 2023",
      category: "Academic",
      color: "red"
    },
    {
      icon: Zap,
      title: "Innovation Award",
      description: "Best Technical Innovation at Tech Fair",
      details: "Created an AI-powered study assistant app that helps students optimize their learning schedule. Won the innovation award among 50+ competing projects.",
      date: "November 2022",
      category: "Innovation",
      color: "orange"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: "☁️",
      date: "2023"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      icon: "📊",
      date: "2023"
    },
    {
      name: "Meta Front-End Developer",
      issuer: "Meta",
      icon: "⚛️",
      date: "2022"
    },
    {
      name: "JavaScript Algorithms Certification",
      issuer: "freeCodeCamp",
      icon: "🏆",
      date: "2022"
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      icon: "📱",
      date: "2021"
    },
    {
      name: "Git & GitHub Certification",
      issuer: "GitHub",
      icon: "🐙",
      date: "2021"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      gold: "from-yellow-400 to-orange-500",
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-500 to-emerald-500",
      purple: "from-purple-500 to-pink-500",
      red: "from-red-500 to-rose-500",
      orange: "from-orange-500 to-amber-500"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getCategoryColor = (category: string) => {
    const categoryColors: { [key: string]: string } = {
      Competition: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      Academic: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Community: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Leadership: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      Innovation: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    };
    return categoryColors[category] || categoryColors.Academic;
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Milestones and accomplishments in my journey
          </p>
        </div>

        {/* Major Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${getColorClasses(achievement.color)} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(achievement.category)}`}>
                      {achievement.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {achievement.description}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {achievement.details}
              </p>
              
              <div className="mt-4 h-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${getColorClasses(achievement.color)} rounded-full transform translate-x-0 group-hover:translate-x-full transition-transform duration-1000 ease-in-out`} />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Professional Certifications
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in border border-blue-100 dark:border-gray-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {cert.icon}
                  </div>
                  
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.name}
                  </h4>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Earned in {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Projects Completed", icon: "🚀" },
            { number: "100+", label: "GitHub Contributions", icon: "💻" },
            { number: "6", label: "Certifications Earned", icon: "🏆" },
            { number: "25+", label: "Students Mentored", icon: "👥" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Motivation Quote */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
              "Success is not the key to happiness. Happiness is the key to success. 
              If you love what you are doing, you will be successful."
            </blockquote>
            <cite className="text-blue-200">- Albert Schweitzer</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
