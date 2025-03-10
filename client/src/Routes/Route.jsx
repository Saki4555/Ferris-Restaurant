import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AllFood from "../Pages/AllFood/AllFood";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddAFood from "../Pages/Profile/AddAFood/AddAFood";
import AddedFood from "../Pages/Profile/AddedFood/AddedFood";
import OrderedFood from "../Pages/Profile/OrderedFood/OrderedFood";
import SingleFood from "../Pages/SingleFood/SingleFood";
import Order from "../Pages/Order/Order";
import Update from "../Pages/Profile/AddedFood/Update";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Review from "../Pages/Feedback/Review/Review";
import DashboardLayout from "../Layout/DashboardLayout";

import ManageFoods from "../dashboard/admin/ManageFoods";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/allfood',
          element: <AllFood></AllFood>,
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/review',
          element: <Review/>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path: '/addfood',
          element: <AddAFood></AddAFood>
        },
        {
          path: '/addedfood',
          element: <AddedFood></AddedFood>
        },
        {
          path: '/orderedfood',
          element: <PrivateRoute><OrderedFood></OrderedFood></PrivateRoute>
        },
        {
          path: '/details/:id',
          element: <SingleFood></SingleFood>,
          // loader: async({params}) => await fetch(`${import.meta.env.VITE_BASE_URL}/allfoods/${params.id}`)
        },
        {
          path: '/order/:id',
          element: <PrivateRoute><Order></Order></PrivateRoute>,
          loader: async() => await fetch(`${import.meta.env.VITE_BASE_URL}/users`) 
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
        }
      ]
    },
    {
       path: '/dashboard',
       element: <DashboardLayout/>,
       children: [
        {
          path: '/dashboard/overview',
       element: <p>Hi</p>,
        },
        {
          path: '/dashboard/allfooditems',
          element: <ManageFoods />
        },
       ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  export default router;

