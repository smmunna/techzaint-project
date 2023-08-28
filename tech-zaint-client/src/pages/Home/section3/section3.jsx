import im1 from "../../../assets/icons/webdesign.png";
import im2 from "../../../assets/icons/WebApp.png";
import im3 from "../../../assets/icons/mern.png";
import im4 from "../../../assets/icons/php.png";
import im5 from "../../../assets/icons/graphics.png";
import im6 from "../../../assets/icons/ai.png";
import { useContext } from "react";
import { darkContext } from "../../../context/darkmode/DarkContext";
import HomeTitle from "../../../components/HomeTitle/HomeTitle";
import HomeService from "../../../components/HomeService/HomeService";

const Section3 = () => {
  const { darkmode } = useContext(darkContext);
  return (
    <div>
      <div
        className={`px-5 md:px-24 py-12 font-serif ${
          darkmode ? "dark" : "light"
        }`}
      >
        <HomeTitle title={`Quality Services`} />
        {/* Card Item */}
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-10 gap-10">
          <HomeService
            img={im1}
            title={`Web Design`}
            des={`Craft visually captivating and user-centric websites that leave
                a lasting impression, blending aesthetics with seamless
                functionality.`}
          />
          <HomeService
            img={im2}
            title={`Web Application Development`}
            des={`Develop dynamic and scalable web applications using the MERN
                stack, ensuring a responsive and engaging user experience.`}
          />
          <HomeService
            img={im3}
            title={`MERN Stack Expertise`}
            des={` Harness the power of the MERN (MongoDB, Express, React, Node.js)
                stack to build robust, full-stack applications that drive
                innovation.`}
          />
          <HomeService
            img={im4}
            title={`Raw PHP Projects`}
            des={` Deliver tailor-made solutions with expertise in PHP, creating
                custom web applications that cater to unique business needs.`}
          />
          <HomeService
            img={im5}
            title={`Computer Graphics Projects`}
            des={`Bring ideas to life through captivating computer graphics
                projects, combining creativity and technology for stunning
                visual experiences.`}
          />
          <HomeService
            img={im6}
            title={`Machine Learning Projects`}
            des={`Unlock actionable insights from data with machine learning
                projects that transform complex information into strategic
                decisions.`}
          />
        </div>
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

export default Section3;
