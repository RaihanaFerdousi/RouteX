import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-[#F1F5EB] min-h-screen">
      <div className="mx-auto max-w-[1500px]">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default Root;