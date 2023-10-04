import { useParams } from "react-router-dom";
import Cover from "../../Cover/Cover";
import PageTitle from "../../PageTitle/PageTitle";
import { useContext, useEffect, useState } from "react";
import SingleCourseDetailsLeft from "./SingleCourseDetailsLeft";
import SingleCourseCardRight from "./SingleCourseCardRight";
import img from "../../../assets/cover/cover1.jpg";
import { darkContext } from "../../../context/darkmode/DarkContext";
import axios from "axios";

const SingleCourseCard = () => {
  const [singleCourse, setSingleCourse] = useState([]);
  const { darkmode } = useContext(darkContext)
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://app1.techzaint.com/api/course/${id}`).then((res) => { //TODO: change url with live site;
      setSingleCourse(res.data.course)
      // console.log(res.data.course)
    });
  }, []);
  return (
    <div className={`${darkmode ? 'dark' : 'light'}`}>
      <PageTitle title={`Single Course`} />
      
      {
        singleCourse.category == 'projects' ? <><Cover title={`Project Details`} img={img} /></> : <><Cover title={`Course Details`} img={img} /></>
      }
      <div className="px-5 md:px-24">
        <div className="grid grid-cols-1 order-last  lg:grid-cols-12 lg:order-1 gap-5">
          <div className=" lg:col-span-7">

            {/* singleCourse.map((single,index)=> <SingleCourseDetailsLeft key={index+1} singleCourse={single}/>) */}
            {
              singleCourse && <><SingleCourseDetailsLeft singleCourse={singleCourse} /></>
            }

          </div>
          <div className=" lg:col-span-5 order-first lg:order-2">
            {/* {
            singleCourse.map((single,index)=> <SingleCourseCardRight key={index+1} singleCourse={single}/>)
          } */}

            {
              singleCourse && <><SingleCourseCardRight singleCourse={singleCourse} /></>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCard;
