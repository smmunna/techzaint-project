import im1 from "../../../assets/icons/partner.png";
import im2 from "../../../assets/icons/experience.png";
import im3 from "../../../assets/icons/projects.png";
import im4 from "../../../assets/icons/country.png";
import { useContext } from "react";
import { darkContext } from "../../../context/darkmode/DarkContext";
import CompanyStatus from "../../../components/CompanyStatus/CompanyStatus";

const Section2 = () => {
  const { darkmode } = useContext(darkContext);
  return (
    <div className="">
      {darkmode ? (
        <>
          <hr className="bg-white" />
        </>
      ) : (
        <></>
      )}
      <div
        className={` md:px-28 py-0 lg:py-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${
          darkmode ? "dark" : "light"
        }`}
      >
        <CompanyStatus img={im1} digit={`12+`} title={`Tech Partners`} />
        <CompanyStatus img={im2} digit={`3+`} title={`Year's of experience`} />
        <CompanyStatus img={im3} digit={`100+`} title={`Projects Completed`} />
        <CompanyStatus img={im4} digit={`2+`} title={`Country Served`} />
      </div>
      {darkmode ? (
        <>
          <hr className="bg-white" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Section2;
