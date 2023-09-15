import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { darkContext } from "../../context/darkmode/DarkContext";
import PageTitle from "../../components/PageTitle/PageTitle";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const { darkmode } = useContext(darkContext);
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Gender Taking..
  const handleOptionChange = (e) => {
    setGender(e.target.value);
  };
  // PhoneNumber taking..
  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  // photo upload
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  // handle Register Form;
  const handleRegForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpass = form.confirmpass.value;
    const dob = form.dob.value;
    const usergender = gender;
    const userphone = phone;
    const userphoto = photo;
    const presentaddress = form.presentaddress.value;
    const permanentaddress = form.permanentaddress.value;
    const profession = form.profession.value;
    const instituition = form.instituition.value;

    if (name.length > 25) {
      setError("Name can not be more than 25 character.!");
      return;
    }
    if (email == "") {
      setError("Email field is required");
      return;
    }

    if (password.length < 6) {
      setError("Password length must be 6 characters long..!");
      return;
    }
    if (password != confirmpass) {
      setError("Password did not match with confirm password..!");
      return;
    }
    if (userphone.length < 12) {
      setError("Please provide correct phone number..!");
      return;
    }
    if (Math.round(userphoto.size / 1024) > 100) {
      setError("Photo Size not more than 100kb");
      return;
    }
    setError("");

    const userInfo = {
      name,
      email,
      confirmpass,
      dob,
      usergender,
      userphone,
      userphoto,
      presentaddress,
      permanentaddress,
      profession,
      instituition
    }

    // console.log(userInfo)
    // Submitting the form;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", confirmpass);
    formData.append("gender", usergender);
    formData.append("phone", userphone);
    formData.append("dob", dob);
    formData.append("presentaddress", presentaddress);
    formData.append("permanentaddress", permanentaddress);
    formData.append("profession", profession);
    formData.append("instituition", instituition);
    formData.append("photo", userphoto); // Append the uploaded file

    // fetch(`http://localhost:8000/api/register`,{
    //   method:'POST',
    //   body: formData
    // })
    // .then(res=>res.json())
    // .then(data=>console.log(data))

    // Send the FormData object using fetch
    createUser(email, confirmpass)
      .then((result) => {
        const user = result.user;
        if (user) {
          updateUser(user, name)
            .then(() => {
              fetch(`http://localhost:8000/api/register`, {
                method: "POST",
                body: formData, // Use the FormData object as the body
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.status === "ok") {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Registration successfull",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    setError("");
                    navigate("/login");
                  }
                });
              // form.reset()
            })
            .catch((error) => {
              // Error after update
            });
        }
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          setError("Email is already in use !");
          return;
        }
        setError("");
      });
  };

  return (
    <div className={`text-black ${darkmode ? "dark text-black" : "light"}`}>
      <PageTitle title={`Register`} />
      <div className="flex justify-center font-serif py-12 px-4 ">
        {/* staring of a form */}
        <div>
          <div>
            <h3 className="text-2xl font-bold text-center">
              Please, Register with valid information
            </h3>
          </div>
          <hr className="my-4" />
          <form
            //TODO: action="http://localhost:3000/user" 
            method="POST"
            onSubmit={handleRegForm}
            encType="multipart/form-data"
          >
            <div className="md:border-2 md:p-4">
              {error && (
                <div>
                  <p className="text-red-600 font-bold text-center mb-3">
                    {error}
                  </p>
                  <hr className="py-2" />
                </div>
              )}
              <div className="grid lg:grid-cols-2 gap-5">
                {/* Left Div */}
                <div>
                  {/* Name */}
                  <div>
                    <p>Name: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="mt-2">
                    <p>Email: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  {/* Password */}
                  <div className="mt-2">
                    <p>Password: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="text"
                      name="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  {/* Confirm Password */}
                  <div className="mt-2">
                    <p>Confirm Password: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="text"
                      name="confirmpass"
                      placeholder="Enter your password"
                    />
                  </div>
                  {/* Gender */}
                  <div className="mt-2">
                    <p>Gender: </p>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={gender == "Male"}
                      onChange={handleOptionChange}
                      className="ml-2"
                      required
                    />
                    <label htmlFor="regular" className="mr-2">
                      Male
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={gender == "Female"}
                      onChange={handleOptionChange}
                      required
                    />
                    <label htmlFor="regular" className="mr-2">
                      Female
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="Others"
                      checked={gender == "Others"}
                      onChange={handleOptionChange}
                      required
                    />
                    <label htmlFor="regular"> Others</label>
                  </div>
                  {/* Date of Birth */}
                  <div className="mt-2">
                    <p>Date of Birth: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="date"
                      name="dob"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <div>
                      {" "}
                      <p>Phone Number: </p>
                    </div>
                    <div>
                      <PhoneInput
                        country={"bd"}
                        inputClass="phoneInput"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                  {/* Present Address */}
                  <div className="mt-2">
                    <p> Present Address: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="text"
                      name="presentaddress"
                      placeholder="Your present address"
                      required
                    />
                  </div>
                </div>
                {/* Right Div */}
                <div>
                  {/*Permanent Address  */}
                  <div>
                    <p> Parmanent Address: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="text"
                      name="permanentaddress"
                      placeholder="Your permanent address"
                      required
                    />
                  </div>
                  {/* Profession */}
                  <div className="mb-2">
                    <p>Profession: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="text"
                      name="profession"
                      placeholder="Your current profession student/teacher/others..."
                      required
                    />
                  </div>
                  {/* Profession */}
                  <div className="mb-2">
                    <p>Instituition: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="text"
                      name="instituition"
                      placeholder="University/school/college/company name..."
                      required
                    />
                  </div>
                  {/* Photo */}
                  <div>
                    <p>Profile Photo: </p>
                    <input
                      className="login-input p-2 w-full md:w-[400px]"
                      type="file"
                      name="photo"
                      onChange={handlePhotoChange}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-4" />

              <div className="text-center">
                <p className="mb-3 mt-3 text-slate-500 text-sm">
                  People who use our service may have uploaded your contact
                  information to TechZaint.{" "}
                  <Link to="#" className="link-primary">
                    Learn More
                  </Link>
                </p>
                <p>
                  By clicking register, you agree to our{" "}
                  <Link to="#" className="link-primary">
                    Terms
                  </Link>
                  ,{" "}
                  <Link to="#" className="link-primary">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="link-primary">
                    Cookies Policy
                  </Link>
                  . <br /> You may receive SMS notifications from us and can opt
                  out at any time.
                </p>

                <div className="my-5">
                  <button type="submit" className="p-4 bg-slate-300 w-[100px]">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
