import { useEffect } from "react";
import {
  Users,
//   Heart,
  Trophy,
  Sparkles,
  ChevronDown,
  Palette,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const StudentLifeHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);


  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Vibrant Community",
      description:
        "Connect with diverse students and build lifelong friendships",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Cultural Activities",
      description: "Express yourself through arts, music, and cultural events",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Sports & Wellness",
      description: "Stay active with our comprehensive sports programs",
    },
  ];

  const scrollToContent = () => {
    const contentSection = document.getElementById("facilities");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-purple-900 via-pink-800 to-orange-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
            data-aos="fade-down"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Experience Campus Life
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Student Life at Metrolane
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            More than just education – discover a thriving community where
            you'll grow, connect, and create unforgettable memories
          </p>

          {/* Tagline */}
          <div
            className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 mb-12"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <p className="text-white text-lg font-semibold">
              Learn • Connect • Grow • Thrive
            </p>
          </div>

          {/* Features Row */}
          <div
            className="flex flex-wrap justify-center gap-6 mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="bg-white/20 p-2 rounded-lg text-white">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">
                    {feature.title}
                  </p>
                  <p className="text-white/80 text-xs">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          {/* <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="#facilities"
              onClick={(e) => {
                e.preventDefault();
                scrollToContent();
              }}
              className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Campus Life
              <ChevronDown className="w-5 h-5" />
            </a>
            <a
              href="/admissions#apply"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Join Our Community
            </a>
          </div> */}
        </div>

        {/* Stats Section */}
        {/* <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {highlights.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 group cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={600 + index * 100}
            >
              <div
                className={`${stat.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 bg-white/90 group-hover:scale-110 transition-transform`}
              >
                {stat.icon}
              </div>
              <p className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </p>
              <p className="text-white/80 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div> */}

        {/* Quote Section */}
        {/* <div
          className="mt-16 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-12 h-12 text-white/80" />
            </div>
            <blockquote className="text-center">
              <p className="text-xl text-white/90 italic mb-4">
                "Metrolane College isn't just where I studied healthcare – it's
                where I found my passion, my friends, and my purpose. The
                supportive community and vibrant campus life shaped who I am
                today."
              </p>
              <footer className="text-white/70">
                <p className="font-semibold">Chidinma Okonkwo</p>
                <p className="text-sm">
                  Class of 2024 - Community Health Technology
                </p>
              </footer>
            </blockquote>
          </div>
        </div> */}

        {/* Quick Links */}
        {/* <div
          className="mt-16 flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a
            href="#facilities"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Campus Facilities
          </a>
          <span className="text-white/50">•</span>
          <a
            href="#clubs"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Clubs & Organizations
          </a>
          <span className="text-white/50">•</span>
          <a
            href="#housing"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Housing
          </a>
          <span className="text-white/50">•</span>
          <a
            href="#events"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Events & Activities
          </a>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-32 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
};

export default StudentLifeHero;
