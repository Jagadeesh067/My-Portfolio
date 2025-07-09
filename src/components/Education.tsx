
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Your University Name",
      location: "City, State",
      duration: "2021 - 2025 (Expected)",
      gpa: "3.8/4.0",
      status: "In Progress",
      description: "Comprehensive computer science program with focus on software engineering, algorithms, and system design. Active participant in coding clubs and hackathons.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering",
        "Web Development",
        "Machine Learning",
        "Computer Networks",
        "Operating Systems",
        "Mobile App Development"
      ],
      achievements: [
        "Dean's List (Fall 2022, Spring 2023)",
        "Computer Science Department Scholarship Recipient",
        "President of Coding Club (2023-2024)"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Your High School Name",
      location: "City, State",
      duration: "2017 - 2021",
      gpa: "3.9/4.0",
      status: "Graduated",
      description: "Strong foundation in mathematics and science with early exposure to programming through AP Computer Science courses.",
      coursework: [
        "AP Computer Science A",
        "AP Calculus BC",
        "AP Physics",
        "AP Statistics",
        "Honors Mathematics",
        "Advanced Chemistry"
      ],
      achievements: [
        "Valedictorian",
        "National Honor Society Member",
        "Mathematics Olympiad Regional Winner",
        "Science Fair First Place (Computer Science Category)"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CP-2023-001"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2023",
      credentialId: "GA-2023-456"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-REACT-789"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block" />
                
                <div className="md:ml-20">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col lg:flex-row lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            edu.status === 'In Progress' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        
                        <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {edu.institution}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{edu.duration}</span>
                          </div>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{edu.location}</span>
                          </div>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Relevant Coursework */}
                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-gray-800 dark:text-white mb-4">
                          <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                          Relevant Coursework
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <div key={courseIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">
                                {course}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-gray-800 dark:text-white mb-4">
                          <Award className="w-5 h-5 mr-2 text-purple-600" />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                                {achievement}
                              </span>
                            </div>
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

        {/* Certifications Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {cert.date}
                  </p>
                  
                  <p className="text-gray-500 dark:text-gray-500 text-xs">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Continuous Learning Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              "Education is not the filling of a pail, but the lighting of a fire." I believe in lifelong learning 
              and staying curious about new technologies. Every day presents an opportunity to learn something new, 
              whether it's a programming language, a framework, or a different way of solving problems. 
              My formal education provided me with a strong foundation, but my real growth comes from hands-on 
              projects, online courses, and engaging with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
