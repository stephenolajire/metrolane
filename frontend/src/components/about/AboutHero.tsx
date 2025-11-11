import { useEffect } from "react";
import {
  Award,
//   GraduationCap,
  ChevronDown,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

//   const stats = [
//     {
//       icon: <GraduationCap className="w-8 h-8" />,
//       number: "25+",
//       label: "Years of Excellence",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       number: "5,000+",
//       label: "Alumni Network",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       number: "150+",
//       label: "Expert Faculty",
//       color: "bg-purple-100 text-purple-600",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       number: "95%",
//       label: "Success Rate",
//       color: "bg-orange-100 text-orange-600",
//     },
//   ];

  const scrollToContent = () => {
    const contentSection = document.getElementById("story");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-500 to-gray-800">
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
            "url('/image1.png')",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Content */}
        <div className="mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
            data-aos="fade-down"
          >
            <Award className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              NBTE Accredited Institution
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Metrolane College
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Shaping the future of healthcare through excellence in education,
            compassion in service, and innovation in technology
          </p>

          {/* Tagline */}
          <div
            className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 mb-12"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <p className="text-white text-lg font-semibold">
              Compassion in Health • Precision in Science • Innovation in Tech
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="#story"
              onClick={(e) => {
                e.preventDefault();
                scrollToContent();
              }}
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Discover Our Story
              <ChevronDown className="w-5 h-5" />
            </a>
            {/* <a
              href="/admissions#apply"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300 flex items-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              Apply Now
            </a> */}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              data-aos="zoom-in"
              data-aos-delay={500 + index * 100}
            >
              <div
                className={`${stat.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 bg-white/90`}
              >
                {stat.icon}
              </div>
              <p className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </p>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default AboutHero;
