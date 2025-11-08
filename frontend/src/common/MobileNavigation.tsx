import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: "Home",
      path: "/",
      dropdown: null,
    },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Our Story", path: "/about/story" },
        { name: "Mission & Vision", path: "/about/mission" },
        { name: "Leadership", path: "/about/leadership" },
        { name: "Accreditation", path: "/about/accreditation" },
      ],
    },
    {
      name: "Academics",
      path: "/academics",
      dropdown: [
        { name: "Programs", path: "/academics/programs" },
        { name: "Faculties", path: "/academics/faculties" },
        { name: "Departments", path: "/academics/departments" },
        { name: "Academic Calendar", path: "/academics/calendar" },
      ],
    },
    {
      name: "Admissions",
      path: "/admissions",
      dropdown: [
        { name: "How to Apply", path: "/admissions/apply" },
        { name: "Requirements", path: "/admissions/requirements" },
        { name: "Tuition & Fees", path: "/admissions/fees" },
        { name: "Scholarships", path: "/admissions/scholarships" },
      ],
    },
    {
      name: "Student Life",
      path: "/student-life",
      dropdown: [
        { name: "Campus Facilities", path: "/student-life/facilities" },
        { name: "Clubs & Organizations", path: "/student-life/clubs" },
        { name: "Housing", path: "/student-life/housing" },
        { name: "Events", path: "/student-life/events" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      dropdown: null,
    },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full h-auto px-4 bg-white py-4 shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="w-full h-auto flex flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="h-auto w-auto flex flex-row gap-2 items-center">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="/logo.jpg"
            alt="Metrone College Logo"
          />
          <div>
            <h2 className="text-lg text-primary-600 uppercase font-bold leading-tight">
              Metrone
            </h2>
            <h4 className="text-xs text-primary-600">College</h4>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-primary-50 rounded-lg transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          {/* <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          /> */}

          {/* Slide-in Menu */}
          <div className="fixed top-[72px] left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto animate-slideDown">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-gray-100">
                  {item.dropdown ? (
                    <>
                      {/* Parent Item with Dropdown */}
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-primary-50 transition-colors"
                      >
                        <span className="text-base font-medium text-gray-700">
                          {item.name}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-700 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Items */}
                      {activeDropdown === item.name && (
                        <ul className="bg-gray-50 animate-fadeIn">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.name}>
                              <NavLink
                                to={dropdownItem.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                  `block px-6 py-3 pl-12 text-sm transition-colors ${
                                    isActive
                                      ? "bg-primary-100 text-primary-600 font-medium border-l-4 border-primary-600"
                                      : "text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                                  }`
                                }
                              >
                                {dropdownItem.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    /* Regular Link without Dropdown */
                    <NavLink
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-6 py-4 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-primary-50 text-primary-600 border-l-4 border-primary-600"
                            : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default MobileNavigation;
