import HomeTitle from "../../../components/HomeTitle/HomeTitle";
import im1 from "../../../assets/banner/banner5.jpg";
import { darkContext } from "../../../context/darkmode/DarkContext";
import { useContext } from "react";

const Section4 = () => {
  const { darkmode } = useContext(darkContext);
  return (
    <div className={`px-5 md:px-24 font-serif  py-12 ${darkmode ? "dark" : "light"} `}>
      <HomeTitle title={`Commited`} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">
            We go beyond expectations in our deliveries.
          </h3>
          <p className="leading-7">
            We take pride in consistently surpassing client expectations with
            our software solutions. Our commitment means we not only meet but
            exceed what our clients anticipate. This is achieved through various
            effective approaches. We build strong and lasting client
            relationships, aiding them in achieving their business goals through
            advanced software solutions.
          </p>

          <div className="ml-5">
            <ol className="leading-7" style={{ listStyleType: "decimal" }}>
              <li>Vast Business Experience</li>
              <li>Expertise in Technology</li>
              <li>Well-Managed Budgets</li>
              <li>Ongoing Support After Implementation</li>
            </ol>
          </div>
        </div>
        <div>
          <div>
            <img
              src={im1}
              className="w-[500px] rounded-2xl shadow-2xl border-4 border-red-200"
              alt=""
            />
          </div>
        </div>
      </div>
      {darkmode ? (
        <>
          <hr className="bg-white mt-9" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Section4;
