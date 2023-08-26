import "./section1.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import images;
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Section1 = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div
              className="h-[450px] md:h-[500px] bg-cover relative"
              style={{ backgroundImage: `url(${banner1})` }}
            >
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="relative pt-14 md:pt-32 px-14 text-left md:px-24 lg:pt-36 lg:px-40">
                <h3 className="text-4xl md:text-6xl text-white font-bold font-serif leading-[1.5]">
                  Welcome to TechZaint
                </h3>
                <h3 className="pt-2 text-white font-bold font-serif ">
                  A global IT consulting Firm
                </h3>
                <p className="text-white font-thin mt-4 bg-slate-900 p-5">
                  At TechZaint, we{"'"}re not just another tech company; we{"'"}
                  re your partners in innovation, here to transform your digital
                  aspirations into reality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Web Design */}
        <SwiperSlide>
          <div>
            <div
              className="h-[450px] md:h-[500px] bg-cover relative"
              style={{ backgroundImage: `url(${banner2})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="relative pt-14 md:pt-32 px-14 text-left md:px-24 lg:pt-36 lg:px-40">
                <h3 className="text-4xl md:text-6xl text-white font-bold font-serif leading-[1.5]">
                  Unveiling Possibilities
                </h3>
                <p className="text-white font-thin mt-4 bg-slate-900 p-5">
                  At TechZaint, we{"'"}re more than web developers – we{"'"}re
                  architects of digital experiences. Our expert team crafts
                  websites that seamlessly blend aesthetics and functionality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Full Stack Web Application */}
        <SwiperSlide>
          <div>
            <div
              className="h-[450px] md:h-[500px] bg-cover relative"
              style={{ backgroundImage: `url(${banner3})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="relative pt-14 md:pt-32 px-14 text-left md:px-24 lg:pt-36 lg:px-40">
                <h3 className="text-4xl md:text-6xl text-white font-bold font-serif leading-[1.5]">
                  Empowering Your Vision
                </h3>
                <p className="text-white font-thin mt-4 bg-slate-900 p-5">
                  Your vision deserves to be realized with precision. With our
                  fullstack web application expertise, we build powerful,
                  scalable solutions that cater to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Mastering the Craft */}
        <SwiperSlide>
          <div>
            <div
              className="h-[450px] md:h-[500px] bg-cover relative"
              style={{ backgroundImage: `url(${banner4})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="relative pt-14 md:pt-32 px-14 text-left md:px-24 lg:pt-36 lg:px-40">
                <h3 className="text-4xl md:text-6xl text-white font-bold font-serif leading-[1.5]">
                  Mastering the Craft
                </h3>
                <p className="text-white font-thin mt-4 bg-slate-900 p-5">
                  In an era of frameworks, we stand out by mastering the raw
                  power of PHP. Our PHP experts create customized solutions that
                  are efficient, secure, and tailored to your exact
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Section1;
