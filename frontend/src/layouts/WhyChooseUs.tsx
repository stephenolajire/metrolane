import { useEffect } from "react";
import {
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Globe,
  Briefcase,
  Award,
  Zap,
  Heart,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academic Excellence",
      description:
        "Rigorous curriculum designed to challenge and inspire students to reach their full potential",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description:
        "Highly qualified educators with years of experience and passion for teaching",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Modern Facilities",
      description:
        "State-of-the-art classrooms, laboratories, and learning spaces equipped with latest technology",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description:
        "International partnerships and exchange programs to broaden student horizons",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Support",
      description:
        "Comprehensive career guidance and job placement assistance for all graduates",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Proven Track Record",
      description:
        "95% of our graduates secure employment or admission to top universities",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Development",
      description:
        "Focus on character building, leadership skills, and personal growth",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe Environment",
      description:
        "Secure campus with 24/7 security and supportive learning atmosphere",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  const achievements = [
    { number: "95%", label: "Graduate Success Rate" },
    { number: "150+", label: "Expert Faculty Members" },
    { number: "50+", label: "Academic Programs" },
    { number: "5,000+", label: "Alumni Network" },
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-25">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-4">
            Why Choose Metrone College?
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for thousands of
            students seeking quality education and a brighter future
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div
                className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Banner */}
        <div
          className="from-primary-600 to-primary-800 rounded-2xl p-12 shadow-2xl"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {achievement.number}
                </p>
                <p className="text-primary-100 text-sm md:text-base">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              alt="Happy students"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div data-aos="fade-left">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-600">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Student Success Stories
                </h3>
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6">
                "Metrone College transformed my life. The dedicated teachers,
                modern facilities, and supportive environment helped me achieve
                my dreams. I'm now working at a leading tech company, and it all
                started here."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">Chibuike Okafor</p>
                  <p className="text-sm text-gray-600">
                    Class of 2022 - Software Engineer
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Features List */}
            <div className="mt-8 space-y-4">
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="bg-primary-100 rounded-full p-2 mr-4 mt-1">
                  <Zap className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Flexible Learning Options
                  </h4>
                  <p className="text-sm text-gray-600">
                    Day and evening classes to suit your schedule
                  </p>
                </div>
              </div>

              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-primary-100 rounded-full p-2 mr-4 mt-1">
                  <Target className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Personalized Attention
                  </h4>
                  <p className="text-sm text-gray-600">
                    Small class sizes ensure individual support
                  </p>
                </div>
              </div>

              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="bg-primary-100 rounded-full p-2 mr-4 mt-1">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Continuous Innovation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Updated curriculum aligned with industry needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards a brighter future. Apply now and become
            part of our success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Apply Now
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
            <a
              href="/campus-visit"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Schedule a Visit
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
