import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeLayout from "./layouts/HomeLayout"
import LandingPage from "./pages/LandingPage"
import ContactPage from "./pages/ContactPage";
import ApplyNowPage from "./pages/ApplyNow";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import StudentLifePage from "./pages/StudentLifePage";
import AdmissionPage from "./pages/AdmissionPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/apply-now" element={<ApplyNowPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/student-life" element={<StudentLifePage />} />
            <Route path="/admissions" element={<AdmissionPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
