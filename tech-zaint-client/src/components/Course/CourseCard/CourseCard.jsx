import "./CourseCard.css";
import CourseEnrollBtn from "../../CourseEnrollBtn/CourseEnrollBtn";
import { useContext } from "react";
import { darkContext } from "../../../context/darkmode/DarkContext";
const CourseCard = ({ course }) => {
  const { darkmode } = useContext(darkContext)
  const { id, title, description, price, thumbnail } = course;
  

  return (
    <div>
      <div className={`h-full course__card p-4 space-y-5 ${darkmode ? 'dark' : ''}`}>
        <div className="flex justify-center">
          <img src={`https://app1.techzaint.com/laravel/storage/app/photogallery/${thumbnail.replace('photogallery','')}`} className="w-[350px] h-[250px]" alt="" />
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="text-2xl font-bold">{title.slice(0, 30)}</h3>
          </div>
          <div>
            <p>{description.slice(0, 30)}...</p>
          </div>
          <div className="course__priceCard">
            <h3>Price: {price} <span className="text-3xl">৳</span></h3>
          </div>
          <div>
            <CourseEnrollBtn id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
