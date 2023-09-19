import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import loadingGif from "../../assets/animation/loading.gif"

const Main = () => {
    const { user, loading } = useContext(AuthContext)
    if (!user && loading) {
        return <div>
            <div className="flex justify-center py-52">
                <div>
                    <img src={loadingGif} className='w-[150px]' alt="" />
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
