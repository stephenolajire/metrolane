import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Student Life", path: "/student-life" },
    { name: "Campus Tour", path: "/campus-tour" },
    { name: "News & Events", path: "/news" },
  ];

  const resources = [
    { name: "Library", path: "/library" },
    { name: "Student Portal", path: "/portal", external: true },
    { name: "Career Services", path: "/careers" },
    { name: "Alumni Network", path: "/alumni" },
    { name: "Research", path: "/research" },
    { name: "Publications", path: "/publications" },
  ];

  const support = [
    { name: "Contact Us", path: "/contact" },
    { name: "FAQs", path: "/faq" },
    { name: "Apply Now", path: "/apply" },
    { name: "Financial Aid", path: "/financial-aid" },
    { name: "Scholarships", path: "/scholarships" },
    { name: "IT Support", path: "/support" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-25 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* College Info - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src="/logo.jpg"
                alt="metrolane College Logo"
              />
              <div>
                <h3 className="text-2xl font-bold text-white uppercase">
                  Metrolane 
                </h3>
                <p className="text-sm text-primary-400">College of health science <br /> and technology</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              metrolane College is committed to providing quality education that
              empowers students to achieve their full potential and become
              leaders in their chosen fields.
            </p>

            {/* Contact Info */}
            {/* <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <p className="text-sm">
                  123 University Avenue
                  <br />
                  Port Harcourt, Rivers State
                  <br />
                  Nigeria
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 " />
                <div className="text-sm">
                  <p>+234 803 456 7890</p>
                  <p>+234 803 456 7891</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 " />
                <a
                  href="mailto:info@metrolanecollege.edu.ng"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  info@metrolanecollege.edu.ng
                </a>
              </div>
            </div> */}

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary-400 transition-colors flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        {link.name}
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm hover:text-primary-400 transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        {link.name}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2.5">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        {/* <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest news, events, and
              updates.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Metrolane College. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Accessibility
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* Accreditation Notice */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              Metrolane College of health science and technology is accredited by the National Universities
              Commission (NUC) and recognized by the Federal Ministry of
              Education, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
