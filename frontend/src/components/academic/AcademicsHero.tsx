import { useEffect } from "react";
import {
//   BookOpen,
//   GraduationCap,
  Award,
//   Users,
  ChevronDown,
  Microscope,
  Stethoscope,
  FlaskConical,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AcademicsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

//   const highlights = [
//     {
//       icon: <BookOpen className="w-8 h-8" />,
//       number: "6+",
//       label: "Academic Programs",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       number: "3",
//       label: "Departments",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       number: "NBTE",
//       label: "Accredited",
//       color: "bg-purple-100 text-purple-600",
//     },
//     {
//       icon: <GraduationCap className="w-8 h-8" />,
//       number: "100%",
//       label: "Practical Training",
//       color: "bg-orange-100 text-orange-600",
//     },
//   ];

  const features = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Clinical Practice",
      description: "Hands-on experience in real healthcare settings",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Modern Labs",
      description: "State-of-the-art laboratory facilities",
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Research Focus",
      description: "Emphasis on innovation and discovery",
    },
  ];

  const scrollToContent = () => {
    const contentSection = document.getElementById("programs");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-orange-900 via-orange-800 to-primary-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop')",
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
            <Award className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Excellence in Healthcare Education
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Academic Programs
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Comprehensive healthcare education programs designed to prepare you
            for a successful career in the health sector
          </p>

          {/* Features Row */}
          <div
            className="flex flex-wrap justify-center gap-6 mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20"
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
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="#programs"
              onClick={(e) => {
                e.preventDefault();
                scrollToContent();
              }}
              className="bg-white text-orange-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Programs
              <ChevronDown className="w-5 h-5" />
            </a>
            {/* <a
              href="/admissions#apply"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center gap-2"
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
          {highlights.map((stat, index) => (
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
              <p className="text-white/80 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div> */}

        {/* Quick Links */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#programs"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Programs
          </a>
          <span className="text-white/50">•</span>
          <a
            href="#faculties"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Faculties
          </a>
          <span className="text-white/50">•</span>
          <a
            href="#departments"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Departments
          </a>
          <span className="text-white/50">•</span>
          <a
            href="#calendar"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium underline underline-offset-4"
          >
            Academic Calendar
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium">Explore Programs</span>
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

export default AcademicsHero;
