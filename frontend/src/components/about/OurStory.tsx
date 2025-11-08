import { useEffect } from "react";
import {
//   Calendar,
  Award,
  Users,
  TrendingUp,
  Heart,
  BookOpen,
  Target,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStorySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const milestones = [
    {
      year: "1999",
      title: "The Beginning",
      description:
        "Metrolane College was founded with a vision to transform healthcare education in Nigeria",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      year: "2005",
      title: "NBTE Accreditation",
      description:
        "Received full accreditation from the National Board for Technical Education",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2010",
      title: "Campus Expansion",
      description:
        "Expanded facilities to include modern laboratories and a state-of-the-art library",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      year: "2015",
      title: "1,000+ Graduates",
      description:
        "Celebrated milestone of producing over 1,000 healthcare professionals",
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: "2020",
      title: "New Programs Launched",
      description:
        "Introduced additional health technology programs to meet industry demands",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Excellence Continues",
      description:
        "Over 5,000 alumni making impact in healthcare across Nigeria and beyond",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      title: "Humble Beginnings",
      description:
        "What started as a small institution with just a handful of students and passionate educators has grown into a beacon of healthcare education excellence. Our founders believed that quality education should be accessible to all who aspire to serve in the healthcare sector.",
    },
    {
      title: "Growing Through Challenges",
      description:
        "Over the years, we faced numerous challenges - from limited resources to changing educational landscapes. But each obstacle made us stronger, more innovative, and more committed to our mission of producing world-class healthcare professionals.",
    },
    {
      title: "Community Impact",
      description:
        "Our graduates have gone on to serve in hospitals, clinics, research institutions, and community health centers across Nigeria and beyond. They are the living proof of our commitment to excellence, touching lives and improving healthcare outcomes wherever they go.",
    },
  ];

  return (
    <section id="story" className="pt-20 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-25">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey of dedication, growth, and unwavering commitment to
            healthcare education excellence
          </p>
        </div>

        {/* Hero Image and Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div data-aos="fade-right">
            <img
              src="/image1.png"
              alt="Metrolane College Campus"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div data-aos="fade-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-600 p-3 rounded-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                A Legacy of Excellence
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 1999, Metrolane College of Health, Science &
                Technology emerged from a simple yet powerful vision: to create
                an institution that would bridge the gap in quality healthcare
                education in Nigeria.
              </p>
              <p>
                Our founders, a group of passionate healthcare professionals and
                educators, recognized the urgent need for well-trained
                healthcare workers in our communities. They envisioned an
                institution that would not only provide education but also
                instill values of compassion, precision, and innovation.
              </p>
              <p>
                Today, over two decades later, we stand proud as one of the
                leading health technology institutions in Rivers State and
                beyond, having produced over 5,000 graduates who are making
                remarkable contributions to healthcare delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey Through Time
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay={index * 100}
                >
                  {/* Content */}
                  <div className="flex-1 lg:text-right lg:pr-8">
                    <div
                      className={`bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-600 ${
                        index % 2 === 0 ? "lg:border-l-0 lg:border-r-4" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary-100 p-2 rounded-lg text-primary-600">
                          {milestone.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {milestone.title}
                        </h4>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="relative shrink-0">
                    <div className="bg-primary-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-lg z-10 relative">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-primary-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-primary-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div
          className="bg-linear-to-r from-primary-600 to-primary-800 rounded-2xl p-12 shadow-2xl"
          data-aos="zoom-in"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="text-5xl font-bold text-white mb-2">25+</p>
              <p className="text-primary-100">Years of Service</p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-5xl font-bold text-white mb-2">5,000+</p>
              <p className="text-primary-100">Graduates</p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-5xl font-bold text-white mb-2">150+</p>
              <p className="text-primary-100">Faculty Members</p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-5xl font-bold text-white mb-2">95%</p>
              <p className="text-primary-100">Success Rate</p>
            </div>
          </div>
        </div> */}

        {/* Closing Statement */}
        {/* <div className="mt-20 text-center max-w-4xl mx-auto" data-aos="fade-up">
          <div className="bg-primary-50 rounded-2xl p-8 border-2 border-primary-200">
            <Calendar className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Story Continues
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As we look to the future, our commitment remains unwavering. We
              continue to evolve, innovate, and adapt to meet the changing needs
              of healthcare education while staying true to our core values of
              compassion, precision, and innovation. Every student who walks
              through our doors becomes part of this remarkable story.
            </p>
            <a
              href="/admissions#apply"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg"
            >
              Be Part of Our Story
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
        </div> */}
      </div>
    </section>
  );
};

export default OurStorySection;
