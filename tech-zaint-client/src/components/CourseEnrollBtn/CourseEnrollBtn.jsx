import { Link } from "react-router-dom";
import "./CourseEnrollBtn.css";
import nextIcon from "../../assets/icons/right-arrow.png";

const CourseEnrollBtn = () => {
  return (
    <div>
      <div className="courseEnroll__btn p-3 font-bold flex justify-between items-center">
        <div>
          <Link>View Details</Link>
        </div>
        <div className="border-2 border-blue-400 hover:bg-black cursor-pointer rounded-full p-2">
          <Link>
            <img src={nextIcon} width={20} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollBtn;
