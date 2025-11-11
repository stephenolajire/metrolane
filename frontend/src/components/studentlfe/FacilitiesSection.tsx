import { useEffect, useState } from "react";
import {
  BookOpen,
  Home,
  Utensils,
  Dumbbell,
  Microscope,
  Building2,
  Music,
  Wifi,
  CheckCircle,
  X,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const FacilitiesSection = () => {
  const [activeTab, setActiveTab] = useState("library");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const [mobileExpandedImage, setMobileExpandedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [activeTab]);

  const handleImageClick = (index:any) => {
    setSelectedImageIndex(index);
    setExpandedImage(index);
    setTimeout(() => {
      setExpandedImage(null);
    }, 5000);
  };

  const handleMobileImageClick = (index:any) => {
    setMobileExpandedImage(index);
  };

  const closeMobileExpanded = () => {
    setMobileExpandedImage(null);
  };

  const facilities = [
    {
      id: "library",
      name: "Library",
      icon: <BookOpen className="w-6 h-6" />,
      title: "Modern Library & Learning Center",
      description:
        "Our state-of-the-art library provides a conducive environment for learning and research with extensive resources for healthcare education.",
      images: [
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028&auto=format&fit=crop",
      ],
      features: [
        "Over 10,000 medical and health science books",
        "Digital library with online journals and databases",
        "Quiet study rooms and group discussion areas",
        "24/7 access during exam periods",
        "Computer workstations with high-speed internet",
        "Professional librarians for research assistance",
      ],
    },
    {
      id: "labs",
      name: "Laboratories",
      icon: <Microscope className="w-6 h-6" />,
      title: "Advanced Medical Laboratories",
      description:
        "Equipped with cutting-edge medical equipment and technology to provide hands-on training in healthcare procedures and diagnostics.",
      images: [
        "https://images.unsplash.com/photo-1581093458791-9f3c3250a6f5?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
      ],
      features: [
        "Fully equipped anatomy and physiology lab",
        "Modern chemistry and microbiology labs",
        "Clinical skills simulation lab",
        "Latest medical equipment and instruments",
        "Safety protocols and protective equipment",
        "Supervised practical sessions",
      ],
    },
    {
      id: "hostel",
      name: "Student Hostel",
      icon: <Home className="w-6 h-6" />,
      title: "Comfortable Student Accommodation",
      description:
        "Safe and comfortable on-campus housing with modern amenities, providing students with a home away from home.",
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
      ],
      features: [
        "Clean and spacious rooms (2-4 students)",
        "24/7 security and CCTV surveillance",
        "Reliable electricity and water supply",
        "Common lounges and recreation areas",
        "Laundry facilities",
        "Proximity to all campus facilities",
      ],
    },
    {
      id: "cafeteria",
      name: "Cafeteria",
      icon: <Utensils className="w-6 h-6" />,
      title: "Dining Hall & Cafeteria",
      description:
        "Nutritious meals served in a clean, modern cafeteria with diverse menu options to cater to different dietary needs.",
      images: [
        "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=2074&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      ],
      features: [
        "Breakfast, lunch, and dinner services",
        "Variety of local and continental dishes",
        "Vegetarian and special diet options",
        "Hygienic food preparation and storage",
        "Affordable meal plans for students",
        "Spacious and comfortable seating",
      ],
    },
    {
      id: "sports",
      name: "Sports Complex",
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Sports & Recreation Facilities",
      description:
        "Comprehensive sports facilities promoting physical fitness, wellness, and team spirit among students.",
      images: [
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop",
      ],
      features: [
        "Multi-purpose sports field",
        "Basketball and volleyball courts",
        "Indoor gymnasium with modern equipment",
        "Table tennis and badminton facilities",
        "Jogging tracks and outdoor fitness area",
        "Regular inter-house sports competitions",
      ],
    },
    {
      id: "auditorium",
      name: "Auditorium",
      icon: <Building2 className="w-6 h-6" />,
      title: "Main Auditorium & Event Hall",
      description:
        "A modern auditorium for lectures, seminars, convocations, and cultural events with advanced audio-visual equipment.",
      images: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      ],
      features: [
        "Seating capacity of 500+ people",
        "Air-conditioned and acoustically designed",
        "Modern projectors and sound systems",
        "Stage facilities for performances",
        "Used for guest lectures and conferences",
        "Accessible facilities for all students",
      ],
    },
    {
      id: "clinic",
      name: "Health Clinic",
      icon: <Music className="w-6 h-6" />,
      title: "Student Health Services",
      description:
        "On-campus health clinic providing medical care, counseling, and wellness support for all students.",
      images: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
      ],
      features: [
        "Qualified nurses and medical staff",
        "First aid and emergency medical care",
        "Health counseling and wellness programs",
        "Regular health screenings",
        "Mental health support services",
        "Referrals to specialist hospitals",
      ],
    },
    {
      id: "ict",
      name: "ICT Center",
      icon: <Wifi className="w-6 h-6" />,
      title: "Information & Communication Technology Center",
      description:
        "Modern computer labs and ICT facilities providing students with access to technology and digital resources.",
      images: [
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      ],
      features: [
        "High-speed internet connectivity",
        "Latest computer systems and software",
        "Printing and scanning services",
        "E-learning platforms and resources",
        "IT training and support",
        "Wi-Fi coverage across campus",
      ],
    },
  ];

  const activeFacility =
    facilities.find((f) => f.id === activeTab) || facilities[0];

  return (
    <section
      id="facilities"
      className="py-20 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-25">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 mb-4">
            Campus Facilities
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            World-class facilities designed to support your academic excellence,
            personal growth, and overall well-being
          </p>
        </div>

        {/* Tabs Navigation - Horizontal Scroll on Mobile */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="relative">
            {/* Scroll Container */}
            <div className="overflow-x-auto scrollbar-hide pb-2">
              <div className="flex gap-3 min-w-max lg:justify-center">
                {facilities.map((facility) => (
                  <button
                    key={facility.id}
                    onClick={() => setActiveTab(facility.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === facility.id
                        ? "bg-primary-600 text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md"
                    }`}
                  >
                    <span
                      className={
                        activeTab === facility.id
                          ? "text-white"
                          : "text-primary-600"
                      }
                    >
                      {facility.icon}
                    </span>
                    <span>{facility.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scroll Hint for Mobile */}
            <div className="lg:hidden absolute right-0 top-0 h-full w-12 bg-linear-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Desktop View - Content Display */}
        <div
          className="hidden lg:block bg-white rounded-2xl shadow-2xl overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
          key={activeTab}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section - Desktop */}
            <div className="relative h-96 lg:h-[70vh]">
              {/* Main Image Display */}
              <div className="relative h-full">
                <img
                  src={activeFacility.images[selectedImageIndex]}
                  alt={`${activeFacility.title} - Image ${
                    selectedImageIndex + 1
                  }`}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    expandedImage === selectedImageIndex
                      ? "opacity-100"
                      : "opacity-90"
                  }`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>

                {/* Icon Badge */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-primary-600 w-16 h-16 rounded-lg flex items-center justify-center">
                    <span className="text-white">{activeFacility.icon}</span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                {activeFacility.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImageIndex === index
                        ? "border-primary-600 scale-110"
                        : "border-white/50 hover:border-white opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Expanded Image Overlay */}
              {expandedImage !== null && (
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-10 animate-fadeIn">
                  <img
                    src={activeFacility.images[expandedImage]}
                    alt={`${activeFacility.title} - Expanded`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Content Section - Desktop */}
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {activeFacility.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activeFacility.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  Key Features
                </h4>
                {activeFacility.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Images Only with Horizontal Scroll */}
        <div className="lg:hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-2">
              <div className="flex gap-4 min-w-max">
                {activeFacility.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleMobileImageClick(index)}
                    className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl shrink-0 transform transition-transform hover:scale-105"
                  >
                    <img
                      src={image}
                      alt={`${activeFacility.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white text-sm">
                          {activeFacility.icon}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg">
                        {activeFacility.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">Tap to view</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            {/* Scroll Hint */}
            <div className="absolute right-0 top-0 h-full w-12 bg-linear-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Mobile Expanded Image Modal */}
        {mobileExpandedImage !== null && (
          <div className="lg:hidden fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn">
            <button
              onClick={closeMobileExpanded}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="w-full max-w-4xl">
              <img
                src={activeFacility.images[mobileExpandedImage]}
                alt={`${activeFacility.title} - Expanded`}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-xl mb-2">
                  {activeFacility.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {activeFacility.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Stats */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <p className="text-4xl font-bold text-primary-600 mb-2">8+</p>
            <p className="text-gray-600 text-sm">Major Facilities</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <p className="text-4xl font-bold text-primary-600 mb-2">24/7</p>
            <p className="text-gray-600 text-sm">Campus Security</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <p className="text-4xl font-bold text-primary-600 mb-2">100%</p>
            <p className="text-gray-600 text-sm">Modern Equipment</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <p className="text-4xl font-bold text-primary-600 mb-2">Safe</p>
            <p className="text-gray-600 text-sm">Environment</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FacilitiesSection;
