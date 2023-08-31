import "./CourseCard.css";
import CourseEnrollBtn from "../../CourseEnrollBtn/CourseEnrollBtn";
const CourseCard = ({ course }) => {
  const { title, description, price, thumbnail } = course;
  return (
    <div>
      <div className={`h-full course__card p-4 space-y-5`}>
        <div className="flex justify-center">
          <img src={thumbnail} className="w-[350px] h-[250px]" alt="" />
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="text-2xl font-bold">{title.slice(0, 30)}</h3>
          </div>
          <div>
            <p>{description.slice(0, 30)}...</p>
          </div>
          <div className="course__priceCard">
            <h3>Price: {price}$</h3>
          </div>
          <div>
            <CourseEnrollBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
