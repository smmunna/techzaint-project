import { useContext, useEffect, useState } from "react";
import img from "../../assets/banner/banner2.jpg";
import Cover from "../../components/Cover/Cover";
import Axios from "../../axios/Axios";
import CourseCard from "../../components/Course/CourseCard/CourseCard";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import ExploreMoreBtn from "../../components/ExploreMoreBtn/ExploreMoreBtn";
import ServicesList from "../../components/ServicesList/ServicesList";
import PageTitle from "../../components/PageTitle/PageTitle";
import Spinner from "../../components/Spinner/Spinner";
import { darkContext } from "../../context/darkmode/DarkContext"

const Services = () => {
  const [courses, setCourses] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [backend, setBackend] = useState([]);
  const [frontend, setFrontend] = useState([]);
  const [projects, setProjects] = useState([]);
  const { darkmode } = useContext(darkContext);
  useEffect(() => {
    Axios.get("/courses/all").then((res) => {
      setCourses(res.data)
    });
  }, []);

  useEffect(() => {
    const languageFilter = courses.filter((languages, index) => languages.category == 'languages')
    setLanguages(languageFilter)
  }, [courses])

  useEffect(() => {
    const backendFilter = courses.filter((backends, index) => backends.category == 'backend')
    setBackend(backendFilter)
  }, [courses])

  useEffect(() => {
    const frontendFilter = courses.filter((frontend, index) => frontend.category == 'frontend')
    setFrontend(frontendFilter)
  }, [courses])

  useEffect(() => {
    const projectsFilter = courses.filter((projects, index) => projects.category == 'projects')
    setProjects(projectsFilter)
  }, [courses])

  return (
    <div>
      <PageTitle title={`Services`} />
      <Cover title={`Explore our Services`} img={img} />
      <div className={`px-5 lg:px-20 ${darkmode ? 'dark' : 'light'}`}>
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
        {
          languages.length > 0 && <>

            <div className="py-4">
              <HomeTitle title={`Learn Programming Languages`} />
            </div>

            <div>
              {/* Loading Spinner */}
              <Spinner item={courses} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                {languages.length > 3 ? (
                  <>
                    {courses.slice(0, 3).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                ) : (
                  <>
                    {languages.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                )}
              </div>
              {languages.length > 3 && (
                <>
                  <div className="pb-5">
                    <ExploreMoreBtn link={`/learn-languages`} />
                  </div>
                </>
              )}
            </div>

          </>
        }


        {/* Learn FrontEnd Technology */}

        {
          frontend.length > 0 && <>
            <div className="py-4">
              <HomeTitle title={`Learn FrontEnd Technology`} />
            </div>

            <div>
              {/* Loading Spinner */}
              <Spinner item={courses} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                {frontend.length > 3 ? (
                  <>
                    {frontend.slice(0, 3).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                ) : (
                  <>
                    {frontend.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                )}
              </div>
              {frontend.length > 3 && (
                <>
                  <div className="pb-5">
                    <ExploreMoreBtn link={`/learn-languages`} />
                  </div>
                </>
              )}
            </div>
          </>
        }


        {/* Learn Backend Technology */}

        {
          backend.length > 0 && <>
            <div className="py-4">
              <HomeTitle title={`Learn Backend Technology`} />
            </div>

            <div>
              {/* Loading Spinner */}
              <Spinner item={courses} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                {backend.length > 3 ? (
                  <>
                    {backend.slice(0, 3).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                ) : (
                  <>
                    {backend.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                )}
              </div>
              {backend.length > 3 && (
                <>
                  <div className="pb-5">
                    <ExploreMoreBtn link={`/learn-languages`} />
                  </div>
                </>
              )}
            </div>
          </>
        }



        {/* Project Section */}

        {
          projects.length > 0 && <>
            <div className="py-4">
              <HomeTitle title={`Choose your Project`} />
            </div>

            <div>
              {/* Loading Spinner */}
              <Spinner item={courses} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                {projects.length > 3 ? (
                  <>
                    {projects.slice(0, 3).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                ) : (
                  <>
                    {projects.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </>
                )}
              </div>
              {projects.length > 3 && (
                <>
                  <div className="pb-5">
                    <ExploreMoreBtn link={`/learn-languages`} />
                  </div>
                </>
              )}
            </div>
          </>
        }



      </div>
    </div>
  );
};

export default Services;
