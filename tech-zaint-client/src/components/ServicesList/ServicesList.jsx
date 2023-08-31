import { Link } from "react-router-dom";

const ServicesList = ({title}) => {
    return (
        <div>
            <div className="border-2 p-4 bg-slate-100 font-bold">
              <Link>{title}</Link>
            </div>
        </div>
    );
}

export default ServicesList;
