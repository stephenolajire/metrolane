import { useEffect } from "react";
import {
  Target,
  Award,
  Lightbulb,
  Heart,
  Globe2,
  BookOpen,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhoWeAreSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
      mirror: true,
    });
  }, []);

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Maintaining the highest standards in education",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Embracing modern teaching methods",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Integrity",
      description: "Building character and ethical leadership",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Diversity",
      description: "Celebrating cultures and perspectives",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-25">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building tomorrow's leaders through excellence in education,
            innovation, and character development since 1999
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Story & Description */}
          <div className="space-y-6" data-aos="fade-up">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1999, metrolane College has been at the forefront of
                  educational excellence in Rivers State. What began as a small
                  institution with a vision to transform lives through quality
                  education has grown into one of the region's most respected
                  educational institutions.
                </p>
                <p>
                  We are committed to academic excellence, character
                  development, and preparing students for success in an
                  ever-changing world. Our journey has been marked by continuous
                  innovation and adapting to meet the needs of modern learners.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div
                className="bg-primary-50 rounded-lg p-4 text-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <p className="text-3xl font-bold text-primary-600 mb-1">25+</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
              <div
                className="bg-primary-50 rounded-lg p-4 text-center"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <p className="text-3xl font-bold text-primary-600 mb-1">
                  5,000+
                </p>
                <p className="text-sm text-gray-600">Graduates</p>
              </div>
              <div
                className="bg-primary-50 rounded-lg p-4 text-center"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <p className="text-3xl font-bold text-primary-600 mb-1">150+</p>
                <p className="text-sm text-gray-600">Expert Faculty</p>
              </div>
              <div
                className="bg-primary-50 rounded-lg p-4 text-center"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <p className="text-3xl font-bold text-primary-600 mb-1">95%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/Rectangle-204.png"
              alt="Students in classroom"
              className="rounded-xl shadow-2xl w-full h-full object-cover min-h-96"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            className="from-primary-50 to-white rounded-xl p-8 border border-orange-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-primary-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide world-class education that empowers students with
              knowledge, skills, and values necessary to excel and become
              responsible global citizens.
            </p>
          </div>

          <div
            className=" from-primary-50 to-white rounded-xl p-8 border border-orange-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-primary-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading educational institution in West Africa,
              recognized for academic excellence and producing graduates
              equipped to lead and transform.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3
            className="text-2xl font-bold text-gray-900 text-center mb-10"
            data-aos="fade-up"
          >
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="text-center mt-12"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Learn More About Us
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
