import Cover from "../../components/Cover/Cover";
import im1 from "../../assets/cover/cover1.jpg";
import im2 from "../../assets/cover/cover2.jpg";
import im3 from "../../assets/cover/cover3.jpg";
import AboutusDetail from "../../components/AboutusDetail/AboutusDetail";
import AboutusMission from "../../components/AboutusDetail/AboutusMission";
import { useContext } from "react";
import { darkContext } from "../../context/darkmode/DarkContext";
import { Helmet } from "react-helmet-async";
import favIcon from "../../assets/brand/brand.png"

const AboutUs = () => {
  const { darkmode } = useContext(darkContext);

  return (
    <div className={`${darkmode ? "dark" : "light"}`}>
    
    <Helmet>
        <title>About | TechZaint</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Helmet>

      <Cover img={im1} title={`About us`} />
      {/* Details about us */}
      <AboutusDetail
        img={im1}
        title={`Introducing TechZaint, Your Leading Software Solution Provider,
            Backed by a 3-Year Legacy`}
        des={`Imagine an assembly of exceptional engineers handpicked from across
            the nation, uniting their expertise under one banner – that's us!
            With a remarkable 3-year journey, we embody a fusion of seasoned
            experience and a fervent commitment to delivering the finest and
            uncomplicated business solutions. TechZaint doesn't merely lean on
            years of expertise, we embrace the dynamic power of youthful
            innovation, harmonizing efficiency and creativity for optimal
            outcomes.
            At TechZaint, we specialize in web development, web
            design, and offer cutting-edge proficiency in the MERN stack and Raw
            PHP projects.`}
        title1={`Tech`}
        title2={`Zaint`}
      />

      {/* Our Vision */}
      <AboutusMission
        img={im2}
        title={`Our Vision at TechZaint`}
        des={`To be the catalyst of technological transformation, empowering businesses worldwide with innovative solutions. We envision a future where our expertise in web development, web design, MERN stack, and Raw PHP projects not only meets but anticipates the ever-evolving needs of our clients. Through unwavering dedication, continuous innovation, and a collaborative spirit, we aim to set new industry standards and redefine the digital landscape. Our vision is to be the driving force behind businesses' success, enabling them to thrive in a dynamic and competitive world.`}
        title1={`Tech`}
        title2={`Zaint`}
      />

      {/* Our Mission */}
      <AboutusDetail
        img={im3}
        title={`Our Mission at TechZaint`}
        des={`To leverage our 3 years of rich experience and the collective genius of our team to craft impactful web solutions. We are committed to delivering top-notch web development, web design, MERN stack, and Raw PHP projects that transcend client expectations. Our mission is to provide innovative, tailor-made solutions that empower businesses to achieve their goals in a digital-driven era. By fostering a culture of continuous learning, collaboration, and staying at the forefront of technological advancements, we strive to be the trusted partners businesses rely on to navigate the ever-changing landscape of technology.`}
      />
    </div>
  );
};

export default AboutUs;
