import GoogleIcon from "../../assets/icons/google.png";
import GitIcon from "../../assets/icons/github.png";
import { Link } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { darkContext } from "../../context/darkmode/DarkContext";
import { Helmet } from "react-helmet-async";
import favIcon from "../../assets/brand/brand.png"

const Login = () => {
  const{darkmode}=useContext(darkContext)

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className={`px-3 font-serif min-h-screen ${darkmode ? 'dark':'light'}`}>
     <Helmet>
        <title> Login | TechZaint</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Helmet>
      <div className="flex justify-center items-center pt-20 pb-5">
        <div className="border-2 border-slate-200 p-4">
          <h3 className="text-2xl font-bold mb-4">
            Please, Login to your account
          </h3>
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
