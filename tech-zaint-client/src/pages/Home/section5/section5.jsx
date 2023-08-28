import { Parallax } from "react-parallax";
import img from "../../../assets/cover/cover5.jpg";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <div>
      <div>
        <Parallax
          blur={{ min: -65, max: 65 }}
          bgImage={img}
          bgImageAlt="CoverImg"
          strength={-250}
        >
          {/* Blur transition from min to max */}
          <div className="hero h-[500px] font-serif">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content pb-20">
              <div className=" w-10/12 md:w-6/12 space-y-4">
                <h1 className=" mt-14 text-4xl md:text-5xl text-yellow-300 font-bold md:leading-[1.2] lg:leading-[1]">
                  Have Any Project Idea ?
                </h1>
                <p className="text-white leading-[1.8]">
                  We{"'"}re working on a project abroad. Our talented team from
                  different parts of the world can support you with it. If you
                  {"'"}re interested, you can chat with us for free by picking a
                  time that suits you.
                </p>
                <button className="btn btn-accent">
                  <Link to="/contact">Get Started</Link>
                </button>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Section5;
