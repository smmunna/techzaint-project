import { useContext } from "react";
import { darkContext } from "../../../context/darkmode/DarkContext";
import profilepic from "../../../assets/icons/user.png";
import PaymentTuitorials from "../../PaymentTuitorials/PaymentTuitorials";

const SingleCourseDetailsLeft = ({ singleCourse }) => {
  const { darkmode } = useContext(darkContext);
  const { title, description, content_preview, instructor } = singleCourse;
  const contents_preview = content_preview.split('\n');

  return (
    <div>
      <div className={`py-12 space-y-8`}>
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
        <div>
          <p>
            {description}
          </p>
        </div>
        <div className="space-y-5">
          <div>
            <h3 className="text-2xl font-bold">Instructor</h3>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <img src={profilepic} width={80} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{instructor}</h3>
              <h3>Works at TechZaint</h3>
            </div>
          </div>
        </div>

        {/* Content Preview */}
        <div className="space-y-5">
          <div>
            <h3 className="text-2xl font-bold">Content Preview</h3>
          </div>
          <div>
            <ol start="1" className="space-y-2">
              {
                contents_preview.map((contents,index)=>(
                  <li key={index+1}>{index+1}. {contents}</li>
                ))
              }
            </ol>
          </div>
        </div>

        {/* How to Pay? */}
        <PaymentTuitorials />
      </div>
    </div>
  );
};

export default SingleCourseDetailsLeft;
