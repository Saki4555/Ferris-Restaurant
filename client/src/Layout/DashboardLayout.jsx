import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/shared/Sidebar";
import { useState } from "react";
import DashboardNav from "../dashboard/shared/DashboardNav";
import  { Toaster } from 'react-hot-toast';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [smallScreenSidebarOpen, setSmallScreenSidebarOpen] = useState(false);
  console.log(smallScreenSidebarOpen);
 
  return (
    <div className="relative md:flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} smallScreenSidebarOpen={smallScreenSidebarOpen} setSmallScreenSidebarOpen={setSmallScreenSidebarOpen} />
      <div className="md:flex-1 h-screen overflow-y-scroll">
        <DashboardNav smallScreenSidebarOpen={smallScreenSidebarOpen} setSmallScreenSidebarOpen={setSmallScreenSidebarOpen} />
      <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
