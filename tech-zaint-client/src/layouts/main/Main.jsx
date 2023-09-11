import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Main = () => {
    const { user, loading } = useContext(AuthContext)
    if (!user && loading) {
        return <div>
            <div className="text-center py-24">
                <div>
                    <span className="loading loading-spinner h-16 w-16 text-secondary"></span>
                </div>
            </div>
        </div>
    }
    return (
        <div className="font-sans">
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    );
}

export default Main;
