import { useEffect } from "react";
import {
  Mail,
  Phone,
  Award,
  GraduationCap,
  Users,
  BookOpen,
  Target,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const LeadershipSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const boardMembers = [
    {
      name: "Dr. Adewale Ogunleye",
      position: "Chairman, Board of Trustees",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      bio: "With over 30 years of experience in healthcare administration and education policy, Dr. Ogunleye provides strategic direction for the institution.",
      qualifications: "MBBS, MPH, FWACP",
      email: "chairman@metrolanecollege.edu.ng",
      phone: "+234 803 456 7890",
    },
    {
      name: "Prof. Ngozi Adekunle",
      position: "Provost",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      bio: "A distinguished academic with expertise in public health, Prof. Adekunle oversees all academic programs and ensures educational excellence.",
      qualifications: "PhD Public Health, MSc, BSc",
      email: "provost@metrolanecollege.edu.ng",
      phone: "+234 803 456 7891",
    },
    {
      name: "Dr. Chukwuma Nwankwo",
      position: "Deputy Provost (Academics)",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      bio: "Responsible for curriculum development and academic standards, Dr. Nwankwo ensures our programs meet national and international benchmarks.",
      qualifications: "PhD Education, MSc, BSc",
      email: "deputy.academics@metrolanecollege.edu.ng",
      phone: "+234 803 456 7892",
    },
  ];

  const seniorManagement = [
    {
      name: "Mrs. Folake Adeyemi",
      position: "Registrar",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      department: "Administration",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Dr. Ibrahim Mohammed",
      position: "Dean, School of Health Sciences",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
      department: "Health Sciences",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      name: "Mr. Oluwaseun Bakare",
      position: "Bursar",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
      department: "Finance",
      icon: <Target className="w-5 h-5" />,
    },
    {
      name: "Dr. Amina Yusuf",
      position: "Director, Academic Planning",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&auto=format&fit=crop",
      department: "Academic Affairs",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      name: "Mr. Emeka Okafor",
      position: "Director, Student Affairs",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      department: "Student Services",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Mrs. Grace Eze",
      position: "Head, Admissions & Records",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop",
      department: "Admissions",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const departments = [
    {
      title: "Community Health",
      head: "Dr. Blessing Okonkwo",
      programs: "3 Programs",
      students: "250+ Students",
    },
    {
      title: "Public Health",
      head: "Dr. Taiwo Adeleke",
      programs: "2 Programs",
      students: "180+ Students",
    },
    {
      title: "Health Technology",
      head: "Dr. Kemi Olaniyan",
      programs: "4 Programs",
      students: "320+ Students",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-20 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-25">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team of experienced professionals guiding
            Metrolane College towards excellence in healthcare education
          </p>
        </div>

        {/* Board of Trustees & Top Leadership */}
        <div className="mb-20">
          <h3
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Executive Leadership
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-orange-300 font-medium text-sm">
                      {member.qualifications}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-primary-600" />
                    <h5 className="font-semibold text-gray-900">
                      {member.position}
                    </h5>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="space-y-2 border-t pt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-primary-600" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-primary-600" />
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Senior Management Team */}
        <div className="mb-20">
          <h3
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Senior Management Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seniorManagement.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary-100"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-primary-600 font-medium mb-2">
                      {member.position}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="bg-primary-100 p-1 rounded text-primary-600">
                        {member.icon}
                      </div>
                      <span>{member.department}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Heads */}
        <div className="mb-16">
          <h3
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Department Heads
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-orange-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-orange-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {dept.title}
                </h4>
                <p className="text-primary-600 font-medium mb-4">
                  Head: {dept.head}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {dept.programs}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {dept.students}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Philosophy */}
        {/* <div
          className="bg-linear-to-r from-orange-600 to-orange-800 rounded-2xl p-12 text-white shadow-2xl"
          data-aos="zoom-in"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 mx-auto mb-6 text-primary-100" />
            <h3 className="text-3xl font-bold mb-6">
              Our Leadership Philosophy
            </h3>
            <p className="text-lg text-primary-50 leading-relaxed mb-8">
              At Metrolane College, our leadership is built on the principles of
              transparency, innovation, and servant leadership. We believe in
              empowering our faculty, staff, and students to achieve their
              fullest potential while maintaining the highest standards of
              academic excellence and ethical conduct.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-bold text-xl mb-2">Transparency</h4>
                <p className="text-primary-100 text-sm">
                  Open communication and accountability in all decisions
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-bold text-xl mb-2">Innovation</h4>
                <p className="text-primary-100 text-sm">
                  Embracing change and fostering creative solutions
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-bold text-xl mb-2">Service</h4>
                <p className="text-primary-100 text-sm">
                  Leading by example and serving our community
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact Leadership */}
        {/* <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-primary-50 rounded-xl p-8 max-w-3xl mx-auto border-2 border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Connect with Our Leadership
            </h3>
            <p className="text-gray-600 mb-6">
              Have questions or suggestions? Our leadership team is always
              available to hear from students, staff, and the community.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Contact Leadership
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default LeadershipSection;
