import React, { useContext, useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Cover from "../../components/Cover/Cover";
import img1 from "../../assets/cover/cover1.jpg";
import { AuthContext } from "../../provider/AuthProvider";
import Axios from "../../axios/Axios";
import { darkContext } from "../../context/darkmode/DarkContext"

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userdata, setUserdata] = useState([]);
  const { darkmode } = useContext(darkContext)
  useEffect(() => {
    Axios.get(`/user/user-info?email=${user?.email}`).then((res) =>
      setUserdata(res.data)
    );
  }, [user]);

  return (
    <div>
      <PageTitle title={`Profile`} />
      <div>
        <Cover title={`Welcome, ${user?.displayName}`} img={img1} />
      </div>
      <div className={`py-20 px-5 md:px-24 flex justify-center ${darkmode ? 'dark' : 'light'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center">
            <div>
              {user?.photoURL ? (
                <>
                  <img src={user?.photoURL} className="w-[200px]" alt="" />
                </>
              ) : (
                <>
                  <img src={userdata?.photo} className="w-[200px]" alt="" />
                </>
              )}
            </div>
          </div>

          <div>
            <div className=" border-b-2">
              {user?.displayName && (
                <>
                  <h3 className="text-2xl font-bold">{user?.displayName}</h3>
                </>
              )}
            </div>
            <div className=" border-b-2 pt-2">
              {user?.email && (
                <>
                  <h3><span className="font-bold">Email:</span> {user?.email}</h3>
                </>
              )}
            </div>
            <div className=" border-b-2 pt-2">
              <h3><span className="font-bold">Phone:</span> +{userdata?.phone}</h3>
            </div>
            <div className=" border-b-2 pt-2">
              <h3><span className="font-bold">DOB:</span> {userdata?.dob}</h3>
            </div>
            <div className=" border-b-2 pt-2">
              <h3><span className="font-bold">Present Address:</span> {userdata?.presentaddress}</h3>
            </div>
            <div className=" border-b-2 pt-2">
              <h3><span className="font-bold">Permanent Address:</span> {userdata?.permanentaddress}</h3>
            </div>
            <div className=" border-b-2 pt-2">
              <h3><span className="font-bold">Role:</span> {userdata?.role}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
