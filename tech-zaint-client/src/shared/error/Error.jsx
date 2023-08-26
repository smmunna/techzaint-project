import { Link } from "react-router-dom";
import im1 from "../../assets/icons/error404.png"

const Error = () => {
    return (
        <div className="flex justify-center py-24">
            <div className="space-y-3">
               <div>
               <img src={im1} className="w-[500px]" alt="" />
               </div>
               <div>
                <h3 className="text-2xl font-bold text-red-600 px-3 text-center">404 Error, Page Not Found !!</h3>
               </div>
               <div className="text-center pt-4">
                    <Link to="/"><button className="btn btn-accent">Go Back to Home</button></Link>
               </div>
            </div>
        </div>
    );
}

export default Error;
