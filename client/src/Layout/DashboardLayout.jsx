import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/shared/Sidebar";
import { useState } from "react";
import DashboardNav from "../dashboard/shared/DashboardNav";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
 
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 h-screen overflow-y-scroll">
        <DashboardNav />
      <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
