
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, State",
      href: "#",
      color: "red"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "gray"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "blue"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "sky"
    },
    {
      icon: MessageSquare,
      label: "Discord",
      href: "#",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400",
      green: "bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900 dark:text-green-400",
      red: "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900 dark:text-red-400",
      gray: "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400",
      sky: "bg-sky-100 text-sky-600 hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-400",
      indigo: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-400"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            I'd love to hear about your project and discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'm always open to discussing new opportunities and ideas. Feel free to reach out 
                through any of the channels below!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`p-3 rounded-lg mr-4 transition-colors duration-300 ${getColorClasses(info.color)}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {info.label}
                    </div>
                    <div className="text-gray-800 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-6 animate-fade-in ${getColorClasses(social.color)}`}
                    style={{ animationDelay: `${(index + 3) * 150}ms` }}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                <span className="text-green-800 dark:text-green-300 font-semibold">
                  Available for Projects
                </span>
              </div>
              <p className="text-green-700 dark:text-green-400 text-sm">
                Currently accepting new freelance projects and internship opportunities. 
                Expected response time: 24-48 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                I typically respond within 24-48 hours
              </p>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Quick Chat</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Schedule a 15-minute call to discuss your project
            </p>
            <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              Schedule Call
            </Button>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 text-center border border-green-200 dark:border-green-800">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Email Direct</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Prefer email? Send me a direct message
            </p>
            <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20">
              Send Email
            </Button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 text-center border border-purple-200 dark:border-purple-800">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
              <Github className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Collaborate</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Open source collaboration or code review
            </p>
            <Button variant="outline" size="sm" className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20">
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
