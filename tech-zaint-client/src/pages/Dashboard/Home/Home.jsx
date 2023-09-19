import img from "../../../assets/cover/cover1.jpg"
import Cover from "../../../components/Cover/Cover";
import PageTitle from "../../../components/PageTitle/PageTitle";
import img1 from "../../../assets/animation/programmer1.gif";

const Home = () => {
    return (
        <div>
            <PageTitle title={`Dashboard`} />
            <Cover title={`Welcome to Dashboard`} img={img} />
            <div className="px-2 lg:px-24 py-10 light1">
                <div className="flex justify-center">
                    <div>
                            <img src={img1} className="w-[300px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
