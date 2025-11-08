import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  ChevronRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState("news");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const news = [
    {
      id: 1,
      title: "Metrone College Wins National Science Competition",
      excerpt:
        "Our students brought home the top prize at the National Science and Technology Competition, showcasing innovation and excellence...",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      category: "Achievement",
      date: "November 5, 2025",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "New State-of-the-Art Library Opens",
      excerpt:
        "The new library facility featuring digital resources, study spaces, and modern amenities is now open to all students...",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop",
      category: "Campus News",
      date: "November 2, 2025",
      readTime: "2 min read",
    },
    {
      id: 3,
      title: "Partnership with Leading Tech Companies",
      excerpt:
        "Metrone College announces strategic partnerships with major technology firms to enhance student internship opportunities...",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      category: "Partnership",
      date: "October 28, 2025",
      readTime: "4 min read",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Open House & Campus Tour",
      description:
        "Join us for a comprehensive tour of our campus facilities and meet our faculty members",
      date: "November 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Main Campus",
      attendees: "150+ expected",
      category: "Admissions",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Annual Sports Day",
      description:
        "Inter-house sports competition featuring athletics, football, basketball and more",
      date: "November 20, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "Sports Complex",
      attendees: "All students",
      category: "Sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Career Fair 2025",
      description:
        "Meet representatives from top companies and explore career opportunities",
      date: "November 25, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Auditorium",
      attendees: "Open to all",
      category: "Career",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Science & Technology Exhibition",
      description:
        "Student projects showcase featuring innovations in science, technology and engineering",
      date: "December 5, 2025",
      time: "11:00 AM - 6:00 PM",
      location: "Innovation Hub",
      attendees: "Public invited",
      category: "Academic",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming
            events at Metrone College
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex justify-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab("news")}
              className={`lg:px-8 px-5 py-3 rounded-lg font-medium transition-all ${
                activeTab === "news"
                  ? "bg-primary-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                activeTab === "events"
                  ? "bg-primary-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Upcoming Events
            </button>
          </div>
        </div>

        {/* News Section */}
        {activeTab === "news" && (
          <div className="space-y-8">
            {/* Featured News */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 from-primary-50 to-white rounded-2xl overflow-hidden shadow-lg"
              data-aos="zoom-in"
            >
              <div className="relative h-64 lg:h-auto">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {news[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{news[0].date}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {news[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {news[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {news[0].readTime}
                  </span>
                  <a
                    href="#"
                    className="text-primary-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Other News */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.slice(1).map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <a
                      href="#"
                      className="text-primary-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Read More
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* View All News Button */}
            <div className="text-center mt-8" data-aos="fade-up">
              <a
                href="/news"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View All News
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}

        {/* Events Section */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Users className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">{event.attendees}</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors w-full justify-center"
                    >
                      Register Now
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Events Button */}
            <div className="text-center mt-8" data-aos="fade-up">
              <a
                href="/events"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View All Events
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEventsSection;
