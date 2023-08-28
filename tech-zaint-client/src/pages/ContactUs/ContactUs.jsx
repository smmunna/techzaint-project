import { useContext } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import { darkContext } from "../../context/darkmode/DarkContext";
import im1 from "../../assets/cover/cover2.jpg";
import Cover from "../../components/Cover/Cover";
import { Helmet } from "react-helmet-async";
import favIcon from "../../assets/brand/brand.png";

const ContactUs = () => {
  const { darkmode } = useContext(darkContext);
  return (
    <div>
      <Helmet>
        <title>Contact | TechZaint</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Helmet>
      <div>
        <Cover img={im1} title={`Contact Us`} />
      </div>
      <div className={`py-20 px-5 md:px-24 ${darkmode ? "dark" : "light"}`}>
        <div>
          {/* div one */}
          <div className="grid gri-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <div>
                <HomeTitle title={`Contact Info`} />
              </div>
              <div className=" bg-slate-800 text-white p-8 border-4 border-blue-800">
                <div>
                  <h3>
                    <span className="font-bold text-yellow-400">Address:</span>{" "}
                    New York, NY
                  </h3>
                  <h3>
                    <span className="font-bold text-yellow-400">Info:</span>{" "}
                    <a href="mailto:info@techzaint.com">info@techzaint.com</a>
                  </h3>
                  <h3>
                    <span className="font-bold text-yellow-400">Phone:</span>{" "}
                    022-532088-13
                  </h3>
                </div>
              </div>

              <div className=" bg-slate-800 text-white p-8 border-4 border-blue-800 my-2">
                <div>
                  <h3>
                    <span className="font-bold text-yellow-400">Address:</span>{" "}
                    Birmingham, AL
                  </h3>
                  <h3>
                    <span className="font-bold text-yellow-400">Info:</span>{" "}
                    info@techzaint.com
                  </h3>
                  <h3>
                    <span className="font-bold text-yellow-400">Phone:</span>{" "}
                    022-532088-13
                  </h3>
                </div>
              </div>
              <div className=" bg-slate-800 text-white p-8 border-4 border-blue-800">
                <div>
                  <h3>
                    <span className="font-bold text-yellow-400">Address:</span>{" "}
                    Huntsville, AL
                  </h3>
                  <h3>
                    <span className="font-bold text-yellow-400">Info:</span>{" "}
                    info@techzaint.com
                  </h3>
                  <h3>
                    <span className="font-bold text-yellow-400">Phone:</span>{" "}
                    022-532088-13
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <HomeTitle title={`Office Location`} />
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45607834.64437777!2d19.75675776378193!3d-64.70970356067926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb09dff882a7809e1%3A0xb08d0a385dc8c7c7!2sAntarctica!5e0!3m2!1sen!2sbd!4v1693034849370!5m2!1sen!2sbd"
                  className="w-full"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* div two for form */}
          <div>
            <div className="mt-8">
              <HomeTitle title={`Contact Form`} />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
