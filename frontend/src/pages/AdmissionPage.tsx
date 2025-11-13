import AdmissionsHero from "../components/admission/AdmissionHero"
import TuitionFeesSection from "../components/admission/Fees"
import HowToApplySection from "../components/admission/HowToApply"
import Requirements from "../components/admission/Requirements"

const AdmissionPage = () => {
  return (
    <main className="mt-20 lg:mt-24">
      <AdmissionsHero/>
      <HowToApplySection/>
      <Requirements/>
      <TuitionFeesSection/>
    </main>
  )
}

export default AdmissionPage
