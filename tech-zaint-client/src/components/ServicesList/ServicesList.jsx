import { useContext } from "react";
import { Link } from "react-router-dom";
import { darkContext } from "../../context/darkmode/DarkContext";

const ServicesList = ({title}) => {
    const{darkmode}=useContext(darkContext)
    return (
        <div>
            <div className={`${darkmode?'':'bg-slate-100'}border-2 p-4  font-bold`}>
              <Link>{title}</Link>
            </div>
        </div>
    );
}

export default ServicesList;
