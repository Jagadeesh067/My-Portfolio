
import { Quote, Star, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Computer Science Professor",
      company: "University of Technology",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "One of the most dedicated and talented students I've had the pleasure of teaching. Their approach to problem-solving is methodical and innovative, always going above and beyond expectations.",
      rating: 5,
      relationship: "Professor"
    },
    {
      name: "Michael Chen",
      role: "Senior Full-Stack Developer",
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Working with them during their internship was a fantastic experience. They quickly adapted to our tech stack, contributed meaningful code, and showed excellent collaboration skills. A future leader in tech!",
      rating: 5,
      relationship: "Mentor"
    },
    {
      name: "Emma Rodriguez",
      role: "Project Manager",
      company: "Digital Innovations Inc.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Exceptional attention to detail and communication skills. They delivered a beautiful, functional website for our startup that exceeded all our expectations. Highly professional and creative.",
      rating: 5,
      relationship: "Client"
    },
    {
      name: "Alex Thompson",
      role: "Lead Developer",
      company: "Code Academy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "As a mentor in our coding bootcamp, they showed remarkable patience and teaching ability. Students consistently praised their clear explanations and supportive approach to learning.",
      rating: 5,
      relationship: "Colleague"
    },
    {
      name: "Rachel Kim",
      role: "UX Designer",
      company: "Creative Studios",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      content: "Collaborated on several projects and was impressed by their ability to translate design concepts into pixel-perfect code. Great eye for design and excellent technical execution.",
      rating: 5,
      relationship: "Collaborator"
    },
    {
      name: "David Park",
      role: "Startup Founder",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop&crop=face",
      content: "Built our entire web platform from scratch with modern technologies. The result was a scalable, performant application that helped us secure our first round of funding. Couldn't recommend more highly!",
      rating: 5,
      relationship: "Client"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const getRelationshipColor = (relationship: string) => {
    const colorMap: { [key: string]: string } = {
      Professor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Mentor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Client: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      Colleague: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      Collaborator: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
    };
    return colorMap[relationship] || colorMap.Colleague;
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Feedback from mentors, colleagues, and clients I've worked with
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-6 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRelationshipColor(testimonial.relationship)}`}>
                      {testimonial.relationship}
                    </span>
                  </div>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {testimonial.role}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {testimonial.company}
                  </p>
                  
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-lg">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Grid of Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(2).map((testimonial, index) => (
            <div
              key={index + 2}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600 group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {testimonial.company}
                  </p>
                </div>
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRelationshipColor(testimonial.relationship)}`}>
                  {testimonial.relationship}
                </span>
              </div>
              
              <div className="flex items-center space-x-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Want to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm always excited to collaborate on new projects and bring creative ideas to life. 
              Whether you need a website, web application, or just want to chat about technology, 
              I'd love to hear from you!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse hidden lg:block" />
      </div>
    </section>
  );
};

export default Testimonials;
