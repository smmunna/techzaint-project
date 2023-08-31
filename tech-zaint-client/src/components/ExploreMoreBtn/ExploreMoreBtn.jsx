import { Link } from "react-router-dom";

const ExploreMoreBtn = ({link}) => {
    return (
        <div className="explore__moreBtn p-3 text-lg">
            <div>
                <Link to={link}><button className="btn btn-accent">Explore More</button></Link>
            </div>
        </div>
    );
}

export default ExploreMoreBtn;
