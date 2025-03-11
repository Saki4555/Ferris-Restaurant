import { Outlet } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import Footer from "../Pages/Shared/Footer";
import CustomNavbar from "../components/shared/CustomNavbar";

const Layout = () => {
    return (
        <div className="p-0 m-0">
            {/* <Navber></Navber> */}
            <CustomNavbar />
            <Outlet></Outlet>
            <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default Layout;