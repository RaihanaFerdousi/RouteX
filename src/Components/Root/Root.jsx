import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const Root = () => {
  return (
    <div className="bg-[#F1F5EB] min-h-screen">
      <div className="mx-auto max-w-[1500px]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
