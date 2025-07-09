
import { User, Heart, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-4">
                  DJ
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Duda Jagadeesh</h3>
                  <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Fun Fact Card */}
            <div className="bg-gradient-to-r from-pink-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-3">
                <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Fun Fact</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                I can solve a Rubik's cube in under 2 minutes and I once built a chatbot that learned to tell dad jokes!
              </p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">My Journey</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm a passionate computer science student with a love for creating innovative digital solutions. 
                    My journey began with a simple "Hello World" program, and now I'm building full-stack applications 
                    that solve real-world problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">What I Love</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm fascinated by the intersection of technology and creativity. Whether it's crafting elegant user 
                    interfaces, optimizing backend performance, or exploring the latest AI trends, I'm always eager to 
                    learn and experiment with new technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">My Goal</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    To become a versatile full-stack developer who can build scalable, user-friendly applications 
                    that make a positive impact. I believe technology should be accessible, beautiful, and solve 
                    meaningful problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Education highlight */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Currently Studying</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Bachelor's in Computer Science at [Your University]
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                Expected Graduation: [Year]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
