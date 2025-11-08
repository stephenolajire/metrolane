import { Outlet } from "react-router-dom"
import DesktopNavigation from "../common/DesktopNavigation"
import MobileNavigation from "../common/MobileNavigation";
import Footer from "../common/Footer";

const HomeLayout = () => {
  return (
    <div>
      <div>
        <div className="hidden lg:flex">
          <DesktopNavigation />
        </div>
        <div className="flex lg:hidden">
          <MobileNavigation />
        </div>
      </div>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default HomeLayout
