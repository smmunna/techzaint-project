import { Link } from "react-router-dom";
import img1 from "../../../assets/icons/student.png";
import img2 from "../../../assets/icons/taka.png";
import img3 from "../../../assets/icons/time.png";
import img4 from "../../../assets/icons/notes.png";

const SingleCourseCardRight = () => {
  return (
    <div className="py-12 lg:sticky lg:top-20">
      <div className={`space-y-5 border-2  p-4`}>
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/jOYzbXBi-qk?si=0twgpU55qVlnJeGG"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className=" space-y-2">
          <div className="flex gap-2 font-semibold text-lg">
            <div>
              <img src={img2} width={30} alt="" />
            </div>
            <div> 500 Taka</div>
          </div>
          <div className="flex gap-2 font-semibold text-lg items-center">
            <div>
              <img src={img1} width={30} alt="" />
            </div>
            <div> 100+ students</div>
          </div>
          <div className="flex gap-2 font-semibold text-lg">
            <div>
              <img src={img3} width={30} alt="" />
            </div>
            <div> 5 hours</div>
          </div>
          <div className="flex gap-2 font-semibold text-lg">
            <div>
              <img src={img4} width={30} alt="" />
            </div>
            <div> 5</div>
          </div>
          <div className="flex pt-5 font-semibold text-lg justify-center">
            <div>
              <Link to="#">
                <button className="btn btn-accent w-96">Enroll Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCardRight;
