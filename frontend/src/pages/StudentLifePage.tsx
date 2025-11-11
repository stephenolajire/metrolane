import FacilitiesSection from "../components/studentlfe/FacilitiesSection";
import StudentLifeHero from "../components/studentlfe/StudentLifeHero"

const StudentLifePage = () => {
  return (
    <main className="mt-20 lg:mt-24">
      <section>
        <StudentLifeHero />
      </section>
      <section>
        <FacilitiesSection />
      </section>
    </main>
  );
}

export default StudentLifePage
