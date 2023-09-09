import React, { useContext, useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Cover from "../../components/Cover/Cover";
import { AuthContext } from "../../provider/AuthProvider";
import Axios from "../../axios/Axios";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    Axios.get(`/user/user-info?email=${user?.email}`).then((res) =>
      setUserdata(res.data)
    );
  }, [user]);
  return (
    <div>
      <PageTitle title={`Profile`} />
      <div>
        <Cover title={`Welcome, ${user?.displayName}`} />
      </div>
      <div className={`py-20 px-5 md:px-24 flex justify-center`}>
        <div>
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
          <div className="pt-5">
            {user?.displayName && (
              <>
                <h3 className="text-2xl font-bold">{user?.displayName}</h3>
              </>
            )}
          </div>
          <div>
            {user?.email && (
              <>
                <h3>Email: {user?.email}</h3>
              </>
            )}
          </div>
          <div>
            <h3>Phone: +{userdata?.phone}</h3>
          </div>
          <div>
            <h3>Birthday: {userdata?.dob}</h3>
          </div>
          <div>
            <h3>Present Address: {userdata?.presentaddress}</h3>
          </div>
          <div>
            <h3>Permanent Address: {userdata?.permanentaddress}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
