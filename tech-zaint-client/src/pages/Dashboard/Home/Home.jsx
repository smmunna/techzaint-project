import img from "../../../assets/cover/cover1.jpg"
import Cover from "../../../components/Cover/Cover";
import PageTitle from "../../../components/PageTitle/PageTitle";

const Home = () => {
    return (
        <div>
            <PageTitle title={`Dashboard`}/>
            <Cover title={`Welcome to Dashboard`} img={img}/>
            <h3>I am from dashboaed home</h3>
        </div>
    );
}

export default Home;
