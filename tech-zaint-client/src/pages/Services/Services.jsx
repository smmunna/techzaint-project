import { useEffect, useState } from "react";
import img from "../../assets/banner/banner2.jpg";
import Cover from "../../components/Cover/Cover";
import Axios from "../../axios/Axios";
import CourseCard from "../../components/Course/CourseCard/CourseCard";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import ExploreMoreBtn from "../../components/ExploreMoreBtn/ExploreMoreBtn";
import ServicesList from "../../components/ServicesList/ServicesList";
import PageTitle from "../../components/PageTitle/PageTitle";
import Spinner from "../../components/Spinner/Spinner";

const Services = () => {
  const [courses, setCourses] = useState([]);

  //  Fetching the data from the api;
  useEffect(() => {
    Axios.get("/products").then((res) => setCourses(res.data.products));
  }, []);
  return (
    <div>
      <PageTitle title={`Services`} />
      <Cover title={`Explore our Services`} img={img} />
      <div className="px-5 lg:px-20">
        <div>
          <h3 className="text-3xl py-3 font-bold">Course Category</h3>
          <hr />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 text-center">
            <ServicesList title={`Learn Languages`} />
            <ServicesList title={`Frontend Development`} />
            <ServicesList title={`Backend Developemt`} />
            <ServicesList title={`Buy Projects`} />
            <ServicesList title={`Order Projects`} />
          </div>
        </div>
        <hr />
        {/* Courses List */}
        <div className="py-4">
          <HomeTitle title={`Learn Languages`} />
        </div>

        <div>
          {/* Loading Spinner */}
          <Spinner item={courses} />

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
                <ExploreMoreBtn link={`/learn-languages`} />
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
