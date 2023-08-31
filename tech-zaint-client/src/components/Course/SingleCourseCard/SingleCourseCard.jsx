import { useParams } from "react-router-dom";
import Cover from "../../Cover/Cover";
import PageTitle from "../../PageTitle/PageTitle";
import { useEffect, useState } from "react";
import Axios from "../../../axios/Axios";
import SingleCourseDetailsLeft from "./SingleCourseDetailsLeft";
import SingleCourseCardRight from "./SingleCourseCardRight";
import img from "../../../assets/cover/cover1.jpg";
import Spinner from "../../Spinner/Spinner";

const SingleCourseCard = () => {
  const [singleCourse, setSingleCourse] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    Axios(`/products/${id}`).then((res) => setSingleCourse(res.data));
  }, []);
  return (
    <div className="">
      <PageTitle title={`Single Course`} />
      <Cover title={`Course Details`} img={img} />
      <div className="px-5 md:px-24">
        <div className="grid grid-cols-1 order-last  lg:grid-cols-12 lg:order-1 gap-5">
          <div className="col-span-7">
            <SingleCourseDetailsLeft singleCourse={singleCourse} />
          </div>
          <div className="col-span-5 order-first lg:order-2">
            <SingleCourseCardRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCard;
