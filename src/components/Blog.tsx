
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications: Best Practices and Patterns",
      excerpt: "Explore advanced React patterns and architectural decisions that help create maintainable and scalable applications. Learn about component composition, state management strategies, and performance optimization techniques.",
      date: "2023-12-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "JavaScript", "Architecture", "Performance"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "A comprehensive look at emerging technologies and trends that are shaping the future of web development. From AI-powered development tools to new frameworks and methodologies.",
      date: "2023-12-10",
      readTime: "6 min read",
      category: "Web Development",
      tags: ["Trends", "AI", "Future", "Technology"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      featured: false
    },
    {
      title: "Mastering CSS Grid: A Complete Guide for Modern Layouts",
      excerpt: "Deep dive into CSS Grid Layout with practical examples and real-world use cases. Learn how to create complex, responsive layouts with clean and maintainable code.",
      date: "2023-12-05",
      readTime: "10 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Layout", "Responsive"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "Database Design Principles for Web Applications",
      excerpt: "Essential database design concepts every web developer should know. Covering normalization, indexing, relationships, and performance considerations for modern web applications.",
      date: "2023-11-28",
      readTime: "12 min read",
      category: "Database",
      tags: ["Database", "SQL", "Design", "Performance"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      featured: false
    },
    {
      title: "My Journey from Student to Full-Stack Developer",
      excerpt: "Personal reflections on my coding journey, challenges faced, lessons learned, and advice for aspiring developers starting their career in tech.",
      date: "2023-11-20",
      readTime: "5 min read",
      category: "Career",
      tags: ["Career", "Journey", "Advice", "Personal"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      featured: false
    },
    {
      title: "Testing Strategies for Modern JavaScript Applications",
      excerpt: "Comprehensive guide to testing JavaScript applications. Learn about different testing types, popular frameworks, and best practices for maintaining code quality.",
      date: "2023-11-15",
      readTime: "9 min read",
      category: "JavaScript",
      tags: ["Testing", "JavaScript", "Quality", "TDD"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "React", "JavaScript", "CSS", "Database", "Career", "Web Development"];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      React: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      CSS: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      Database: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Career: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Web Development": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    };
    return colorMap[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog & Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Thoughts, tutorials, and insights from my development journey
          </p>
          
          {/* Category Filter - Placeholder for functionality */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Featured Articles</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="group/btn text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 p-0 h-auto font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Recent Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 p-0 h-auto text-sm font-semibold"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
