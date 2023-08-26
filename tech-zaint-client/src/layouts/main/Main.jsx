import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

const Main = () => {
    return (
        <div className="font-sans">
            <Header/>
            <Outlet/>
            <Footer/>
            <ScrollRestoration/>
        </div>
    );
}

export default Main;
