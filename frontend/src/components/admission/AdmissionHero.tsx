import { useEffect } from "react";
import {
  GraduationCap,
  Calendar,
//   FileText,
//   DollarSign,
  Award,
  ArrowRight,
//   CheckCircle,
  Clock,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AdmissionsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

//   const quickLinks = [
//     {
//       icon: <FileText className="w-6 h-6" />,
//       title: "How to Apply",
//       description: "Step-by-step application process",
//       href: "#apply",
//       color: "from-blue-500 to-blue-600",
//     },
//     {
//       icon: <CheckCircle className="w-6 h-6" />,
//       title: "Requirements",
//       description: "Entry requirements & criteria",
//       href: "#requirements",
//       color: "from-green-500 to-green-600",
//     },
//     {
//       icon: <DollarSign className="w-6 h-6" />,
//       title: "Tuition & Fees",
//       description: "Affordable fee structure",
//       href: "#fees",
//       color: "from-purple-500 to-purple-600",
//     }
//   ];

  const admissionInfo = [
    {
      label: "Application Opens",
      value: "October 2024",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      label: "Resumption Date",
      value: "November 24, 2025",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      label: "Academic Session",
      value: "2025/2026",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative bg-gray-500 overflow-hidden">
      {/* Top Section - Split Layout */}
      <div className="relative">
        <div className="w-full lg:px-25 px-4 sm:px-6 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Side - Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 flex items-center bg-linear-to-br from-primary-600 to-primary-800">
              <div className="max-w-xl">
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                  data-aos="fade-right"
                >
                  <Award className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">
                    2025/2026 Admission Open
                  </span>
                </div>

                {/* Main Heading */}
                <h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  Begin Your Healthcare Journey
                </h1>

                {/* Description */}
                <p
                  className="text-lg text-white/90 mb-8 leading-relaxed"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Join Metrolane College and transform your passion for
                  healthcare into a rewarding career. Start your application
                  today and take the first step towards excellence.
                </p>

                {/* Admission Info Cards */}
                <div
                  className="space-y-3 mb-8"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  {admissionInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
                    >
                      <div className="text-white/80">{info.icon}</div>
                      <div>
                        <p className="text-white/70 text-xs">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <a
                    href="#apply"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl group"
                  >
                    Start Application
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all"
                  >
                    Contact Admissions
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative lg:block hidden" data-aos="fade-left">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-primary-800/20"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                    <p className="text-sm text-gray-600">
                      Graduate Success Rate
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Join thousands of successful alumni making impact in
                  healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Quick Links */}
      <div className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Admission Information
            </h2>
            <p className="text-gray-600">
              Everything you need to know about joining Metrolane College
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`bg-linear-to-br ${link.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white">{link.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                <div className="flex items-center gap-2 text-primary-600 font-medium text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div> */}
        </div>
      </div>

      {/* Important Notice Banner */}
      {/* <div className="bg-linear-to-r from-green-500 to-green-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/20 p-2 rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">NBTE Accredited Programs</p>
                <p className="text-sm text-white/90">
                  Nationally recognized healthcare qualifications
                </p>
              </div>
            </div>
            <a
              href="#apply"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg whitespace-nowrap"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdmissionsHero;
