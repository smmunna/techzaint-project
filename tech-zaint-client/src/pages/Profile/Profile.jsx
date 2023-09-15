import React, { useContext, useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Cover from "../../components/Cover/Cover";
import img1 from "../../assets/cover/cover1.jpg";
import { AuthContext } from "../../provider/AuthProvider";
import { darkContext } from "../../context/darkmode/DarkContext"
import AxiosSecure from "../../axios/AxiosSecure";
import Spinner1 from "../../components/Spinner/Spinner1";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userdata, setUserdata] = useState([]);
  const [photopath, setPhotopath] = useState([])
  const { darkmode } = useContext(darkContext)

  useEffect(() => {
    // Get the access token from localStorage
    const accessToken = localStorage.getItem('access-token');

    // Define the headers object with the Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`, // Assuming it's a Bearer token
      'Content-Type': 'application/json',
      Accept: 'application/json'

      // You can adjust this based on your API requirements
    };

    // Make the fetch request with the headers
    fetch(`http://localhost:8000/api/user-details/${user?.email}`, {
      method: 'GET',
      headers: headers, // Pass the headers object here
    })
      .then((res) => res.json())
      .then((result) => {
        setUserdata(result.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }, [user]);

  useEffect(() => {
    const originalString = userdata?.photo;

    if (originalString) {
      const modifiedString = originalString.replace('photogallery/', '');
      setPhotopath(modifiedString);
    } else {
      // Handle the case when userdata?.photo is undefined or falsy
      // You can set a default value or perform other logic here
      setPhotopath(''); // For example, setting an empty string
    }
  }, [user, userdata])



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
                  <img src={`http://localhost:8000/images/${photopath}`} className="w-[200px]" alt="" />
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
              <h3><span className="font-bold">Role:</span> {userdata?.status}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
