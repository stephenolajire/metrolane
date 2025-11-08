import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const DesktopNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => ref && !ref.contains(event.target as Node)
      );

      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full h-auto px-25 bg-white py-5 shadow-sm fixed z-40">
      <nav className="w-full h-auto flex flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="h-auto w-auto flex flex-row gap-3 items-center">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src="/logo.jpg"
            alt="Metrone College Logo"
          />
          <div>
            <h2 className="text-h3 text-primary-600 uppercase font-bold leading-tight">
              Metrone
            </h2>
            <h4 className="text-h5 text-primary-600">College</h4>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-row items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              ref={(el) => {
                dropdownRefs.current[item.name] = el;
              }}
            >
              <div className="flex items-center gap-1">
                {item.dropdown ? (
                  <>
                    <span className="text-base font-medium text-gray-700 cursor-default">
                      {item.name}
                    </span>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="p-1 hover:bg-primary-50 rounded transition-colors"
                      aria-label={`Toggle ${item.name} dropdown`}
                      aria-expanded={activeDropdown === item.name}
                    >
                      <ChevronDown
                        className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-primary-600"
                          : "text-gray-700 hover:text-primary-600"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.name && (
                <ul className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-100 animate-fadeIn">
                  {item.dropdown.map((dropdownItem) => (
                    <li key={dropdownItem.name}>
                      <NavLink
                        to={dropdownItem.path}
                        onClick={() => setActiveDropdown(null)}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors duration-150 ${
                            isActive
                              ? "bg-primary-50 text-primary-600 font-medium"
                              : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          }`
                        }
                      >
                        {dropdownItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
