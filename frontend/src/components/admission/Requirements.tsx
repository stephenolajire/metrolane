import { AlertCircle, CheckCircle, FileText, Mail, MapPin, Phone } from "lucide-react";

const Requirements = () => {
    const requiredDocuments = [
      "Original and photocopies of O'Level result(s) - WAEC, NECO, or NABTEB",
      "JAMB result slip (where applicable)",
      "Birth certificate or age declaration",
      "Local Government Identification Letter",
      "Recent passport photographs (4 copies)",
      "Medical fitness certificate",
    ];
  return (
    <div
      id="requirements"
      className="w-full px-4 bg-gray-50 sm:px-6 md:px-8 lg:px-25 pb-20"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Requirements</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Follow these simple steps to begin your journey towards a rewarding
          career in healthcare
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Required Documents */}
        <div className="bg-white rounded-xl shadow-md p-8" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Required Documents
            </h3>
          </div>

          <p className="text-gray-600 mb-6">
            Please ensure you have the following documents ready before starting
            your application:
          </p>

          <ul className="space-y-4">
            {requiredDocuments.map((doc, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-orange-100 rounded-full p-1 mt-1">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-gray-700">{doc}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
            <p className="text-sm text-orange-800 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
              <span>
                <strong>Note:</strong> All documents must be original or
                certified true copies. Documents in languages other than English
                must be translated and certified.
              </span>
            </p>
          </div>
        </div>

        {/* Contact Admissions Office */}
        <div
          className="bg-linear-to-br from-green-50 to-green-100 rounded-xl shadow-md p-8 border-2 border-green-200"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-600 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Get Started Today
            </h3>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Ready to apply? Contact our admissions office to begin your
            application process. Our friendly staff will guide you through every
            step and answer all your questions.
          </p>

          <div className="bg-white rounded-lg p-6 border border-green-200 space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-lg mt-1">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Call Us On</p>
                <p className="text-gray-700">08062784261, 08038610413</p>
                <p className="text-gray-700 text-sm mt-1">
                  Alternative: 08069556460, 08033938711
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-lg mt-1">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Visit Us</p>
                <p className="text-gray-700 text-sm">
                  Plot 40, Orisunbare, Isale-Otin, Eko Ende Road, Ikirun, Osun
                  State
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
              <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
              <span>
                <strong>Office Hours:</strong> Monday - Friday: 8:00 AM - 5:00
                PM | Saturday: 9:00 AM - 2:00 PM
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Important Information Banner */}
      <div
        className="mt-12 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 shadow-md"
        data-aos="fade-up"
      >
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">
              Important Information
            </h4>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  Application forms are available at the admissions office or
                  can be obtained by contacting us directly
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  Candidates with awaiting results are encouraged to apply and
                  submit results when available
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  Early application is advised as admission slots are limited
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  All admission processes are conducted transparently with no
                  hidden charges
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requirements
