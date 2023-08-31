import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/Home/Home";
import Login from "../shared/login/Login";
import Register from "../shared/register/Register";
import Error from "../shared/error/Error";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Services from "../pages/Services/Services";

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
            path:"/about",
            element:<AboutUs/>
        },
        {
            path:"/services",
            element:<Services/>
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