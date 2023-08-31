import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Section4 from "./section4/section4";
import Section5 from "./section5/section5";
import PageTitle from "../../components/PageTitle/PageTitle";

const Home = () => {
  return (
    <div className="pt-16">
    <PageTitle title={`Home`}/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
    </div>
  );
};

export default Home;
