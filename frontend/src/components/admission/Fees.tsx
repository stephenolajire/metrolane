import {
  DollarSign,
  BookOpen,
  Shield,
  TrendingDown,
  Calendar,
//   Phone,
//   Mail,
  CheckCircle,
  AlertCircle,
//   CreditCard,
  FileText,
  Users,
  Award,
  Home,
  GraduationCap,
  Building2,
//   Banknote,
//   ClipboardList,
} from "lucide-react";

const TuitionFeesSection = () => {
  const feeCategories = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Tuition Fees",
      description:
        "Covers all academic instruction, access to learning resources, library facilities, and academic support services throughout the session.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Course Materials",
      description:
        "Includes textbooks, laboratory manuals, practical materials, and other essential learning resources specific to your program.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Administrative Fees",
      description:
        "Registration, examination, student ID card, verification, and other administrative processes throughout your studies.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Medical & Insurance",
      description:
        "Student medical coverage, health insurance, and access to campus health facilities to ensure your wellbeing.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Accommodation (Optional)",
      description:
        "For students requiring on-campus or affiliated hostel accommodation. Costs vary by room type and facility features.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Student Activities",
      description:
        "Sports facilities, student union activities, departmental associations, and extracurricular development programs.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const keyPoints = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Program-Specific Fees",
      description:
        "Fees vary by department and program level. Each program has its own fee structure based on course requirements, practical training needs, and resources involved.",
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Competitive & Affordable",
      description:
        "Our fees are competitively priced to ensure quality education remains accessible while maintaining high academic standards and excellent facilities.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Payment Plans",
      description:
        "We offer convenient payment options with installment plans to ease financial burden and make education more accessible for all students.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparent Pricing",
      description:
        "All fees are clearly itemized with no hidden charges. What you're quoted is exactly what you pay - complete transparency guaranteed.",
    },
  ];

  const reasonsToChoose = [
    "Value for money with quality education from experienced faculty",
    "Modern facilities and well-equipped laboratories for hands-on training",
    "NBTE accredited programs recognized nationwide",
    "Affordable fees compared to similar institutions in the region",
    "Flexible payment terms to accommodate different financial situations",
    "No surprise charges - all fees clearly communicated upfront",
  ];

  return (
    <div id="fees" className="bg-gray-50 py-16">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-25">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tuition & Fees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality healthcare education that doesn't break the bank. We're
            committed to providing excellent education at affordable rates with
            transparent pricing and flexible payment options.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-linear-to-r from-green-50 to-blue-50 border-l-4 border-green-600 rounded-lg p-6 shadow-md mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Program-Based Fee Structure
              </h3>
              <p className="text-gray-700 mb-3">
                Our tuition fees vary depending on your chosen department and
                program level (Certificate, ND, or JHS). Each program has unique
                requirements - from laboratory equipment and practical materials
                to clinical training resources - which influences the overall
                cost structure.
              </p>
              <p className="text-gray-700">
                <strong>
                  For detailed fee breakdown specific to your program,
                </strong>{" "}
                please contact our admissions office. We'll provide you with a
                comprehensive, itemized fee schedule tailored to your course of
                study.
              </p>
            </div>
          </div>
        </div>

        {/* Fee Categories Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Your Fees Cover
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                >
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Makes Our Fees Affordable
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Value for Your Investment
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              When you choose Metrolane College, you're investing in more than
              just tuition - you're investing in your future career in
              healthcare.
            </p>

            <ul className="space-y-4">
              {reasonsToChoose.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>

            {/* <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-800 flex items-start gap-2">
                <Banknote className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  <strong>Pro Tip:</strong> Early registration often comes with
                  benefits. Contact us to learn about current offers and payment
                  plans available for the 2025/2026 session.
                </span>
              </p>
            </div> */}
          </div>

          {/* Get Personalized Fee Information */}
          {/* <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl shadow-md p-8 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 p-3 rounded-lg">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Get Your Fee Breakdown
              </h3>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Every program is unique, and so is its fee structure. Get accurate
              pricing information for your specific course and department by
              reaching out to our admissions team.
            </p>

            <div className="bg-white rounded-lg p-6 border border-green-200 space-y-4 mb-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">
                  What We'll Provide:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span>
                      Complete itemized fee breakdown for your program
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Available payment plan options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Guidance on payment procedures and deadlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Information on any current special offers</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-green-200">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Contact Admissions Office:</strong>
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    08062784261, 08038610413
                  </p>
                  <p className="text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    metrolanecollegeofhealthtech@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:08062784261"
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-md"
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

            <div className="mt-6 bg-green-600 rounded-lg p-4 text-white">
              <p className="text-sm flex items-start gap-2">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  Our admissions officers are available Monday - Friday (8:00 AM
                  - 5:00 PM) and Saturday (9:00 AM - 2:00 PM) to discuss fees
                  and payment options.
                </span>
              </p>
            </div>
          </div> */}
        </div>

        {/* Bottom Notice */}
        {/* <div className="mt-12 bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6 shadow-md">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-orange-600 mt-1 shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-orange-900 mb-2">
                Payment Flexibility
              </h4>
              <p className="text-orange-800">
                We understand that paying tuition in full can be challenging.
                That's why we offer flexible installment payment plans to make
                education more accessible. Speak with our admissions team to
                find a payment schedule that works for your financial situation.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TuitionFeesSection;
