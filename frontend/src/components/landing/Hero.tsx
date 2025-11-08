import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/image1.png",
      title: ["Shape", "Your", "Future"],
      subtitle:
        "Empowering minds, transforming lives. Join Metrone College where excellence meets opportunity in a world-class learning environment.",
    },
    {
      image: "/image2.png",
      title: ["Discover", "Your", "Potential"],
      subtitle:
        "Experience innovative learning, cutting-edge research, and a vibrant community dedicated to academic excellence.",
    },
    {
      image: "/image3.png",
      title: ["Build", "Your", "Legacy"],
      subtitle:
        "Join a community of scholars, leaders, and innovators. Your journey to greatness begins here.",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: false,
      mirror: true,
    });
  }, []);

  // Refresh AOS when slide changes
  useEffect(() => {
    AOS.refresh();
  }, [currentSlide]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: currentSlide === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute hidden lg:flex left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
        data-aos="fade-in"
        data-aos-delay="1200"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute hidden lg:flex  right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
        data-aos="fade-in"
        data-aos-delay="1200"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center px-8 md:px-16 lg:px-25">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span
              className="inline-block"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {slides[currentSlide].title[0]}
            </span>{" "}
            <span
              className="inline-block"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {slides[currentSlide].title[1]}
            </span>{" "}
            <span
              className="inline-block text-primary-600"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {slides[currentSlide].title[2]}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-12"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <Link to="/apply-now">
              <button className="group px-8 py-2 w-full lg:w-auto lg:py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="px-8 py-2 w-full lg:w-auto lg:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-xl">
              Explore Programs
            </button>
          </div>

          {/* Stats Cards */}
          {/* <div className="flex flex-wrap gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 min-w-[150px] hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                data-aos="fade-right"
                data-aos-delay={1100 + index * 100}
              >
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon className="w-6 h-6 text-yellow-400" />
                  <span className="text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 flex gap-3"
        // data-aos="fade-up"
        // data-aos-delay="1400"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-12 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      {/* <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        data-aos="fade-up"
        data-aos-delay="1600"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
