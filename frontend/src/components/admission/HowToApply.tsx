import { useEffect } from "react";
import {
  Phone,
  FileText,
  UserCheck,
  CreditCard,
  ClipboardCheck,
  ArrowRight,
  Wallet,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const HowToApplySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const applicationSteps = [
    {
      number: "1",
      icon: <Phone className="w-6 h-6" />,
      title: "Contact Admissions Office",
      description:
        "Reach out to our admissions team via phone, email, or visit our campus to express your interest and get guidance.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      number: "2",
      icon: <FileText className="w-6 h-6" />,
      title: "Submit Required Documents",
      description:
        "Provide your O'Level results, JAMB result (if applicable), birth certificate, and other necessary credentials.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      number: "3",
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Complete Application Form",
      description:
        "Fill out the admission application form with accurate personal and academic information.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      number: "4",
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pay Application Fee",
      description:
        "Submit the required application fee as instructed by the admissions office.",
      color: "bg-green-100 text-green-600",
    },
    {
      number: "5",
      icon: <UserCheck className="w-6 h-6" />,
      title: "Await Admission Decision",
      description:
        "Our admissions team will review your application and notify you of the admission decision.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      number: "6",
      icon: <Wallet className="w-6 h-6" />,
      title: "Pay Acceptance Fee",
      description:
        "After the admission is processed, the applicant needs to pay the acceptance fees immediately to secure admission.",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div id="apply" className="bg-gray-50 py-16">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-25">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Apply
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to begin your journey towards a rewarding
            career in healthcare
          </p>
        </div>

        {/* Application Steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`${step.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector for desktop */}
                {index < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-green-600">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
      </div>
    </div>
  );
};

export default HowToApplySection;
