import GoogleIcon from "../../assets/icons/google.png";
import GitIcon from "../../assets/icons/github.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { darkContext } from "../../context/darkmode/DarkContext";
import PageTitle from "../../components/PageTitle/PageTitle";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { darkmode } = useContext(darkContext);
  const [error, setError] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  // Getting the exact path;
  let from = location.state?.from?.pathname || "/";

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const info = {
      email,
      password,
    };

    // Sending data to server for  login
    fetch(`${import.meta.env.VITE_LOCAL_SERVER}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          return;
        }
        setError("");
        if (data.status == "ok") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: data.result,
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("email", data.email);
          setUser(localStorage.getItem("email"));
          navigate(from, { replace: true });
        }
      });
  };
  return (
    <div
      className={`px-3 font-serif min-h-screen ${darkmode ? "dark" : "light"}`}
    >
      <PageTitle title={`Login`} />
      <div className="flex justify-center items-center pt-20 pb-5">
        <div className="border-2 border-slate-200 p-4">
          <h3 className="text-2xl font-bold mb-4">
            Please, Login to your account
          </h3>
          {error && <p className="text-red-600 font-bold py-2">{error}</p>}
          <hr className="mb-4" />
          {/* form start */}
          <form onSubmit={handleLoginForm}>
            <div>
              <input
                className="login-input p-2 w-full md:w-[400px]"
                type="email"
                name="email"
                placeholder="Enter your mail"
                required
              />
            </div>
            <div className="my-4">
              <input
                className="login-input p-2 w-full md:w-[400px] "
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <button type="submit" className="p-4 bg-slate-300 w-[100px]">
                Login
              </button>
            </div>
            <div className="pt-4">
              <p>
                Don{"'"}t have account ?{" "}
                <Link to="/register" className="link-primary underline">
                  Register Now
                </Link>
              </p>
            </div>
          </form>
          {/* form End... */}
        </div>
      </div>
      {/* Social Login===><=== */}
      <div className="grid items-center md:justify-center">
        <div className="p-3 googlesign flex justify-center gap-2 items-center border-2  md:w-[435px] text-center cursor-pointer">
          <div>
            <img src={GoogleIcon} width={30} alt="" />
          </div>
          <div>Login with Google</div>
        </div>
        <div className="p-3 mt-2 googlesign flex justify-center gap-2 items-center border-2  md:w-[435px] text-center cursor-pointer">
          <div>
            <img src={GitIcon} width={30} alt="" />
          </div>
          <div>Login with Github</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
