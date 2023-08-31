import { Link } from "react-router-dom";
import "./CourseEnrollBtn.css";
import nextIcon from "../../assets/icons/right-arrow.png";
import { useContext } from "react";
import { darkContext } from "../../context/darkmode/DarkContext";

const CourseEnrollBtn = ({id}) => {
  const{darkmode}=useContext(darkContext)
  return (
    <div>
    <Link to={`/learn-languages/${id}`}>
      <div className={`${darkmode?'bg-slate-600':'courseEnroll__btn'}  p-3 font-bold flex justify-between items-center`}>
        <div>
          View Details
        </div>
        <div className="border-2 border-blue-400 hover:bg-black cursor-pointer rounded-full p-2">
            <img src={nextIcon} width={20} alt="" />
        </div>
      </div>
    </Link>
    </div>
  );
};

export default CourseEnrollBtn;
