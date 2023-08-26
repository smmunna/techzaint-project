import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/Home/Home";
import Login from "../shared/login/Login";
import Register from "../shared/register/Register";
import Error from "../shared/error/Error";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/contact",
            element:<ContactUs/>
        }
        ,
        {
            path:"/aboutus",
            element:<AboutUs/>
        }
      ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"*",
        element:<Error/>
    }
  ]);

  export default router;