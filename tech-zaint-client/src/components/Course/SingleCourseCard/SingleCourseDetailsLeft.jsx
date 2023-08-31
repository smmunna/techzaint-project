import { useContext } from "react";
import { darkContext } from "../../../context/darkmode/DarkContext";
import profilepic from "../../../assets/icons/user.png";
import PaymentTuitorials from "../../PaymentTuitorials/PaymentTuitorials";

const SingleCourseDetailsLeft = ({ singleCourse }) => {
  const { darkmode } = useContext(darkContext);
  const { title, description, price } = singleCourse;
  return (
    <div>
      <div className={`py-12 space-y-8`}>
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum at
            fugiat perferendis ea dolorum minus, distinctio asperiores
            praesentium autem. Sequi, rerum nesciunt quod debitis non tempora
            at. Aliquam, non libero. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus vero asperiores pariatur dignissimos
            nemo rem eius modi fugit, repellat blanditiis. Dignissimos voluptas
            tenetur magni, maxime porro rem voluptatem odio quam laudantium
            ratione esse, eum eos praesentium consectetur deleniti unde
            assumenda!
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
              <h3 className="text-lg font-bold">Arifin Rahman</h3>
              <h3>Works at Newyork</h3>
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
              <li>
                1. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, facere.
              </li>
              <li>2. Lorem ipsum dolor sit amet.</li>
              <li>3. Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>4. Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>5. Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>6. Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>7. Lorem ipsum dolor sit amet consectetur adipisicing.</li>
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
