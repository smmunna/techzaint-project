import { Helmet } from "react-helmet-async";
import favIcon from "../../assets/brand/brand.png";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Section4 from "./section4/section4";

const Home = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Home | TechZaint</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
