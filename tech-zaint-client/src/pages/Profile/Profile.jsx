import { useContext, useEffect } from "react";
import { useState } from "react";
import Axios from "../../axios/Axios";
import { AuthContext } from "../../provider/AuthProvider";
import PageTitle from "../../components/PageTitle/PageTitle";
import Cover from "../../components/Cover/Cover";
import { darkContext } from "../../context/darkmode/DarkContext";
import img from "../../assets/cover/cover1.jpg";

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { user } = useContext(AuthContext);
  const { darkmode } = useContext(darkContext);
  useEffect(() => {
    Axios.get(`/user/user-info?email=${user}`).then((res) =>
      setUserInfo(res.data)
    );
  }, []);
  return (
    <div>
      <PageTitle title={`Profile`} />
      <Cover title={`Welcome, ${userInfo?.name}`} img={img} />
      <div className={`px-5 md:px-24 py-10 ${darkmode ? "dark" : "light"}`}>
        <div className="flex justify-center items-center">
          <div>
            <div className="flex justify-center mb-3">
              <div>
                <img src={userInfo?.photo} className="w-[200px]" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <div className="border-2 p-4 mb-4">
                  <h3 className="text-2xl font-bold">{userInfo?.name}</h3>
                </div>
                <div className="border-2 p-4 mb-4">
                  <h3 className="text-lg">Email: {userInfo?.email}</h3>
                </div>
                <div className="border-2 p-4 mb-4">
                  <h3 className="text-lg">Phone: +{userInfo?.phone}</h3>
                </div>
              </div>
              <div>
                <div className="border-2 p-4 mb-4">
                  <h3 className="text-lg">Birthday: {userInfo?.dob}</h3>
                </div>
                <div className="border-2 p-4 mb-4">
                  <h3 className="text-lg">
                    Present Address: {userInfo?.presentaddress}
                  </h3>
                </div>
                <div className="border-2 p-4 mb-4">
                  <h3 className="text-lg">
                    Permanent Address: {userInfo?.permanentaddress}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
