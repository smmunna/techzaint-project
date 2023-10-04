import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/Home/Home";
import Login from "../shared/login/Login";
import Register from "../shared/register/Register";
import Error from "../shared/error/Error";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Services from "../pages/Services/Services";
import LearnLanguages from "../pages/Services/LearnLanguages/LearnLanguages";
import SingleCourseCard from "../components/Course/SingleCourseCard/SingleCourseCard";
import Profile from "../pages/Profile/Profile";
import Dashboard from "../layouts/dashboard/Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashboardHome from "../pages/Dashboard/Home/Home"
import AddCourses from "../pages/Dashboard/AddCourses/AddCourses";
import CourseList from "../pages/Dashboard/CourseList/CourseList";
import Payment from "../pages/Payment/Payment";
import OrderSummary from "../pages/Dashboard/OrderSummary/OrderSummary";
import Invoice from "../pages/Dashboard/OrderSummary/Invoice";
import OrderList from "../pages/Dashboard/OrderList/OrderList";
import Tuitorials from "../pages/Dashboard/Tuitorials/Tuitorials";
import SendMessage from "../pages/Dashboard/SendMessage/SendMessage";
import AddTuitorial from "../pages/Dashboard/AddTuitorial/AddTuitorial";
import TuitorialList from "../pages/Dashboard/AddTuitorial/TuitorialList";
import TermsCondition from "../pages/TermsCondition/TermsCondition";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <ContactUs />
            }
            ,
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/learn-languages",
                element: <LearnLanguages />
            },
            {
                path: "/learn-languages/:id",
                element: <SingleCourseCard />
            },
            {
                path: "/terms-condition",
                element: <TermsCondition />
            },
            {
                path: "/profile",
                element: <PrivateRoutes><Profile /></PrivateRoutes>
            },
            {
                path: "/payment/:id",
                element: <PrivateRoutes><Payment /></PrivateRoutes>
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
            {
                path: '',
                element: <PrivateRoutes><DashboardHome /></PrivateRoutes>
            },
            {
                path: 'add-courses',
                element: <PrivateRoutes><AddCourses /></PrivateRoutes>
            },
            {
                path: 'course-list',
                element: <PrivateRoutes><CourseList /></PrivateRoutes>
            },
            {
                path: 'order-summary',
                element: <PrivateRoutes><OrderSummary /></PrivateRoutes>
            },
            {
                path: 'invoice/:id',
                element: <PrivateRoutes><Invoice /></PrivateRoutes>
            },
            {
                path: 'order-list',
                element: <PrivateRoutes><OrderList /></PrivateRoutes>
            },
            {
                path: 'enrolled-item/:id',
                element: <PrivateRoutes><Tuitorials /></PrivateRoutes>
            },
            {
                path: 'send-message',
                element: <PrivateRoutes><SendMessage /></PrivateRoutes>
            },
            {
                path: 'add-tuitorial',
                element: <PrivateRoutes><AddTuitorial /></PrivateRoutes>
            },
            {
                path: 'tuitorial-list',
                element: <PrivateRoutes><TuitorialList /></PrivateRoutes>
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "*",
        element: <Error />
    }
]);

export default router;