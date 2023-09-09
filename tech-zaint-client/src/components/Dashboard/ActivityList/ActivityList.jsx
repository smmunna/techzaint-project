import { Link } from "react-router-dom";

const ActivityList = ({name,link}) => {
    return (
        <div>
            <div>
                <li className='border-b-4 border-b-yellow-400 p-2'><Link to={link} ><h3>{name}</h3></Link></li>
            </div>
        </div>
    );
}

export default ActivityList;
