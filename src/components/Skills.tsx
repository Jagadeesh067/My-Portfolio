
import { Code, Database, Globe, Smartphone, Settings, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "blue",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    {
      icon: Globe,
      title: "Frontend Technologies",
      color: "purple",
      skills: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "green",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "GraphQL"]
    },
    {
      icon: Settings,
      title: "Tools & Frameworks",
      color: "orange",
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "pink",
      skills: ["React Native", "Flutter", "iOS", "Android", "Responsive Design"]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      color: "indigo",
      skills: ["Adobe XD", "Sketch", "Prototyping", "Wireframing", "User Research"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700",
      purple: "from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700",
      green: "from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700",
      orange: "from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700",
      pink: "from-pink-500 to-pink-600 group-hover:from-pink-600 group-hover:to-pink-700",
      indigo: "from-indigo-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-indigo-700"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getColorClasses(category.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot <= Math.floor(Math.random() * 2) + 4
                              ? `bg-gradient-to-r ${getColorClasses(category.color)}`
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Bar */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "Frontend Development", level: 90, color: "blue" },
              { skill: "Backend Development", level: 80, color: "green" },
              { skill: "Database Management", level: 75, color: "purple" },
              { skill: "UI/UX Design", level: 70, color: "pink" },
              { skill: "Mobile Development", level: 65, color: "orange" },
              { skill: "DevOps & Cloud", level: 60, color: "indigo" }
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${getColorClasses(item.color)} transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
