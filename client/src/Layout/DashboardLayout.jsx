import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/shared/Sidebar";
import { useState } from "react";
import DashboardNav from "../dashboard/shared/DashboardNav";
import  { Toaster } from 'react-hot-toast';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
 
  return (
    <div className="md:flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="md:flex-1 h-screen overflow-y-scroll">
        <DashboardNav />
      <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
