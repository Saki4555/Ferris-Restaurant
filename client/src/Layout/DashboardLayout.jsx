import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/shared/Sidebar";
import { useState } from "react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
 
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 h-screen">
      <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
