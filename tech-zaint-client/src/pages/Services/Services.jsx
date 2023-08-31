import { useEffect, useState } from "react";
import img from "../../assets/banner/banner2.jpg";
import Cover from "../../components/Cover/Cover";
import Axios from "../../axios/Axios";
import { Link } from "react-router-dom";
import CourseCard from "../../components/Course/CourseCard/CourseCard";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import { Helmet } from "react-helmet-async";
import favIcon from "../../assets/brand/brand.png";
import ExploreMoreBtn from "../../components/ExploreMoreBtn/ExploreMoreBtn";

const Services = () => {
  const [courses, setCourses] = useState([]);

  //  Fetching the data from the api;
  useEffect(() => {
    Axios.get("/products").then((res) => setCourses(res.data.products));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Services | TechZaint</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Helmet>

      <Cover title={`Explore our Services`} img={img} />
      <div className="px-5 lg:px-20">
        <div>
          <h3 className="text-3xl py-3 font-bold">Course Category</h3>
          <hr />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 text-center">
            <div className="border-2 p-4 bg-slate-100 font-bold">
              <Link>Programming Languages</Link>
            </div>
            <div className="border-2 p-4 bg-slate-100 font-bold">
              <Link>Web Development</Link>
            </div>
            <div className="border-2 p-4 bg-slate-100 font-bold">
              <Link>Frontend Library</Link>
            </div>
            <div className="border-2 p-4 bg-slate-100 font-bold">
              <Link>Backend Development</Link>
            </div>
            <div className="border-2 p-4 bg-slate-100 font-bold">
              <Link>Backend Framework</Link>
            </div>
          </div>
        </div>
        <hr />
        {/* Courses List */}
        <div className="py-4">
          <HomeTitle title={`Learn Languages`} />
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {courses.length > 3 ? (
              <>
                {courses.slice(0, 3).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </>
            ) : (
              <>
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </>
            )}
          </div>
          {courses.length > 3 && (
            <>
              <div className="pb-5">
                <ExploreMoreBtn />
              </div>
            </>
          )}
        </div>

{/* Web Design Courses */}


{/* Full Stack Web Development */}



      </div>
    </div>
  );
};

export default Services;
