import { FileText, Clock, User, Tag } from "lucide-react";

const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Traffic Management",
      description: "Discover how artificial intelligence is optimizing urban traffic flow, reducing congestion, and improving safety.",
      author: "Jane Doe",
      date: "March 10, 2025",
      category: "AI & Traffic",
    },
    {
      id: 2,
      title: "The Future of Smart Cities: AI-Powered Solutions",
      description: "Explore how AI-driven technologies are shaping the future of smart cities and sustainable urban mobility.",
      author: "John Smith",
      date: "March 5, 2025",
      category: "Smart Cities",
    },
    {
      id: 3,
      title: "Reducing Traffic Congestion with AI Algorithms",
      description: "Learn about the latest AI algorithms that help predict and manage traffic congestion more effectively.",
      author: "Emily Johnson",
      date: "February 28, 2025",
      category: "Traffic Solutions",
    },
    {
      id: 4,
      title: "Smart Traffic Lights: Enhancing Urban Traffic Flow",
      description: "How AI-powered traffic signals are reducing wait times and improving road efficiency in major cities.",
      author: "Michael Brown",
      date: "February 20, 2025",
      category: "Traffic Technology",
    },
    {
      id: 5,
      title: "Computer Vision in Traffic Monitoring",
      description: "Discover how computer vision is used to analyze traffic patterns, detect violations, and improve road safety.",
      author: "Sophia Lee",
      date: "February 15, 2025",
      category: "AI & Traffic",
    },
    {
      id: 6,
      title: "The Role of IoT in Smart Traffic Management",
      description: "How the Internet of Things (IoT) is transforming traffic management through real-time data collection and analysis.",
      author: "David Wilson",
      date: "February 10, 2025",
      category: "Smart Cities",
    },
    {
      id: 7,
      title: "Machine Learning for Traffic Accident Prediction",
      description: "How machine learning models can predict and prevent traffic accidents before they happen.",
      author: "Laura Martinez",
      date: "February 5, 2025",
      category: "Traffic Solutions",
    },
    {
      id: 8,
      title: "The Impact of AI on Public Transportation Systems",
      description: "How AI is making public transportation systems more efficient, accessible, and user-friendly.",
      author: "James Anderson",
      date: "January 30, 2025",
      category: "Public Transport",
    },
    {
      id: 9,
      title: "Autonomous Vehicles and Their Role in Traffic Management",
      description: "The future of self-driving cars and how they integrate with AI-driven traffic solutions.",
      author: "Olivia Taylor",
      date: "January 25, 2025",
      category: "Autonomous Vehicles",
    },
    {
      id: 10,
      title: "How AI Can Help Reduce Carbon Emissions from Traffic",
      description: "Examining AI-driven strategies to minimize vehicle emissions and promote sustainability.",
      author: "Daniel White",
      date: "January 20, 2025",
      category: "Sustainability",
    },
    {
      id: 11,
      title: "Real-Time Traffic Data: A Game Changer for Urban Planning",
      description: "How real-time AI-powered traffic analytics can help city planners design better road networks.",
      author: "Emma Green",
      date: "January 15, 2025",
      category: "Urban Mobility",
    },
    {
      id: 12,
      title: "Ethical Considerations in AI-Based Traffic Management",
      description: "Exploring the ethical and privacy concerns surrounding AI-driven traffic solutions.",
      author: "Matthew Hall",
      date: "January 10, 2025",
      category: "AI Ethics",
    },
    {
      id: 13,
      title: "Predictive Analytics: Preventing Traffic Jams Before They Happen",
      description: "How predictive analytics can help manage and prevent urban traffic congestion.",
      author: "Chloe Scott",
      date: "January 5, 2025",
      category: "Predictive AI",
    },
  ];
export default function Blogs() {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          SmartTraffic AI Blog
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Stay updated with the latest insights, innovations, and trends in AI-powered traffic management.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center justify-center bg-gray-300 h-48">
              <FileText size={64} className="text-gray-500" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.description}</p>
              <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{post.date}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2 text-blue-500 text-sm">
                <Tag size={16} />
                <span>{post.category}</span>
              </div>
              <a
                href={`/blogs/${post.id}`}
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Categories Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["AI & Traffic", "Smart Cities", "Traffic Solutions", "Urban Mobility", "Sustainability"].map(
            (category, index) => (
              <a
                key={index}
                href={`/blogs/category/${category.toLowerCase().replace(/ /g, "-")}`}
                className="bg-gray-200 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg text-gray-700 text-lg font-medium transition"
              >
                {category}
              </a>
            )
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Want to Contribute?</h2>
        <p className="mt-2 text-gray-600">Share your insights and contribute to our growing knowledge hub.</p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
