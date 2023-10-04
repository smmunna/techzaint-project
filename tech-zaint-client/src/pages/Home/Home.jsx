import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Section4 from "./section4/section4";
import Section5 from "./section5/section5";
import PageTitle from "../../components/PageTitle/PageTitle";
import Section6 from "./section6/section6";

const Home = () => {
  return (
    <div className="pt-16">
      <PageTitle title={`Home`}
        desc={`
        TechZaint: Your Global IT Consulting Partner. We specialize in web design, development, and backend technology. Explore our frontend technology courses and comprehensive IT solutions for businesses worldwide.
        `}
        kw={`Best Software Development Company, Software Solution, Web Development, Web Application`}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Section5 />
    </div>
  );
};

export default Home;
