import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber";
import Footer from "../Pages/Shared/Footer";

const Layout = () => {
    return (
        <div className="p-0 m-0">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;