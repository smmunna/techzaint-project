import { useContext, useState } from "react";
import img from "../../../assets/cover/cover1.jpg";
import HomeTitle from "../../../components/HomeTitle/HomeTitle";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Cover from ".././../../components/Cover/Cover";
import { useEffect } from "react";
import Axios from "../../../axios/Axios";
import CourseCard from "../../../components/Course/CourseCard/CourseCard";
import Spinner from "../../../components/Spinner/Spinner";
import { darkContext } from "../../../context/darkmode/DarkContext";

const LearnLanguages = () => {
  const [languages, setLanguages] = useState([]);
  const [changePage, setChangePage] = useState(1);
  const { darkmode } = useContext(darkContext);

  useEffect(() => {
    Axios.get("/courses/all")
      .then((res) => {
        setLanguages(res.data)
      });
  }, []);



  const perpageItem = (languages.length < 10 ? 30 : Math.round(languages.length)) / 3;

  return (
    <div className={`${darkmode ? 'dark' : 'light'}`}>
      <Cover title={`Learn Technologies`} img={img} />
      <div className="px-5 md:px-24 py-5">
        <HomeTitle title={`All Services`} />
        <hr />
        {/* Spinner Inserting */}
        <Spinner item={languages} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
          {languages
            .slice(10 * changePage - 10, 10 * changePage)
            .map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>

        <div className="text-center">
          <div className="join">
            <button
              className={`${darkmode ? '' : ''} join-item btn ${changePage <= 1 ? "btn btn-disabled bg-white" : ""
                }`}
              onClick={() => setChangePage(changePage - 1)}
            >
              Prev
            </button>
            {[...Array(perpageItem)].slice(0, 3).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setChangePage(index + 1)}
                className={`join-item btn btn-md ${changePage == index + 1 ? "btn-active" : ""
                  }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`join-item btn ${changePage >= 3 ? "btn btn-disabled" : ""
                }`}
              onClick={() => setChangePage(changePage + 1)}
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LearnLanguages;
