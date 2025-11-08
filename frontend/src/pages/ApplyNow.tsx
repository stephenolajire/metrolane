import { useEffect } from "react";
import {
  GraduationCap,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  FileText,
  BookOpen,
  Users,
  Clock,
  MapPin,
  Send,
  Download,
  AlertCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ApplyNowPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const programs = [
    {
      department: "Community Health Technology",
      courses: [
        "Community Health Technology - JHS",
        "Health Assistant - CERTIFICATE",
      ],
    },
    {
      department: "Public Health",
      courses: [
        "Public Health Assistant - CERTIFICATE",
        "Public Health Technology - ND",
      ],
    },
  ];

  const requirements = [
    "Five (5) Credits Passes in English, Mathematics, Biology, Chemistry and Physics at not more than two (2) sittings",
    "Candidates with awaiting result can also apply",
    "JAMB result (where applicable)",
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "08062784261, 08038610413",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Alternative",
      value: "08069556460, 08033938711",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "metrolanecollegeofhealthtech@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value:
        "Plot 40, Orisunbare, Isale-Otin, Eko Ende Road, Ikirun, Osun State",
    },
  ];

  const admissionInfo = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Resumption Date",
      value: "November 24, 2025",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Session",
      value: "2025/2026",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Admission Status",
      value: "Now Open",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Application Deadline",
      value: "December 31, 2025",
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-20 lg:mt-24">
      {/* Hero Section */}
      <div className="relative h-96 bg-linear-to-r from-green-900 to-green-700 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1
              className="text-5xl font-bold text-white mb-6"
              data-aos="fade-up"
            >
              Apply Now - 2025/2026 Admission
            </h1>
            <p
              className="text-xl text-white/90 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Your Future in Healthcare Starts Here!
            </p>
            <div
              className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <p className="text-white font-semibold">
                Compassion in Health, Precision in Science, Innovation in
                Tech!!!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <div
          className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-12 shadow-md"
          data-aos="fade-up"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-green-600  mt-1" />
            <div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                🎓 NBTE Accredited Institution
              </h3>
              <p className="text-green-800">
                Metrolane College of Health, Science & Technology is fully
                accredited by the National Board for Technical Education (NBTE).
                Registration is now open for the 2025/2026 academic session.
              </p>
            </div>
          </div>
        </div>

        {/* Admission Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {admissionInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
              >
                {info.icon}
              </div>
              <h3 className="text-sm text-gray-600 mb-2">{info.title}</h3>
              <p className="text-xl font-bold text-gray-900">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Programs and Requirements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Available Programs */}
            <div
              className="bg-white rounded-xl shadow-md p-8"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Available Programs
                </h2>
              </div>

              <div className="space-y-6">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary-600 pl-6"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {program.department}
                    </h3>
                    <ul className="space-y-2">
                      {program.courses.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600  mt-0.5" />
                          <span className="text-gray-700">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Entry Requirements */}
            <div
              className="bg-white rounded-xl shadow-md p-8"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Entry Requirements
                </h2>
              </div>

              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-1  mt-1">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-orange-50 rounded-lg p-4">
                <p className="text-sm text-orange-800 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5  mt-0.5" />
                  <span>
                    <strong>Note:</strong> All certificates and results must be
                    verified during the admission process.
                  </span>
                </p>
              </div>
            </div>

            {/* How to Apply */}
            <div
              className="bg-linear-to-br from-green-50 to-green-100 rounded-xl shadow-md p-8 border-2 border-green-200"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  How to Apply
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  To begin your admission process for the 2025/2026 academic
                  session, please contact our admissions office directly using
                  any of the contact methods provided. Our admission officers
                  are ready to guide you through the application process and
                  answer all your questions.
                </p>

                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-green-600" />
                    Contact Admissions Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1  mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Call us on:</p>
                        <p className="text-gray-700">
                          08062784261 or 08038610413
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1  mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Email us at:
                        </p>
                        <p className="text-gray-700">
                          metrolanecollegeofhealthtech@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1  mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Visit us at:
                        </p>
                        <p className="text-gray-700">
                          Plot 40, Orisunbare, Isale-Otin, Eko Ende Road,
                          Ikirun, Osun State
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <p className="text-sm text-orange-800 flex items-start gap-2">
                    <AlertCircle className="w-5 h-5  mt-0.5" />
                    <span>
                      <strong>Important:</strong> Make sure you have your
                      educational certificates and results ready when contacting
                      the admissions office to expedite your application
                      process.
                    </span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:08062784261"
                    className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href="mailto:metrolanecollegeofhealthtech@gmail.com"
                    className="flex-1 bg-white text-green-600 border-2 border-green-600 py-3 px-6 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div
              className="bg-white rounded-xl shadow-md p-6 sticky top-6"
              data-aos="fade-left"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="bg-primary-100 p-2 rounded-lg ">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                      <p className="text-gray-900 font-medium wrap-break-words">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="/contact"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </a>
              </div>
            </div>

            {/* Download Brochure */}
            <div
              className="bg-linear-to-br from-green-600 to-green-700 rounded-xl shadow-md p-6 text-white"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Download className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Download Brochure</h3>
              <p className="text-green-100 mb-4 text-sm">
                Get detailed information about our programs, facilities, and
                admission process
              </p>
              <button className="w-full bg-white text-green-700 py-3 px-6 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNowPage;
