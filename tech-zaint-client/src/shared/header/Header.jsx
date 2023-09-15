import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import MenuIcon from "../../assets/icons/menu.png";
import MenuCrossIcon from "../../assets/icons/menu_cross.png";
import userIcon from "../../assets/icons/user.png";
import darkmoodIcon from "../../assets/icons/dark.png";
import lightmoodIcon from "../../assets/icons/light.png";
import cartIcon from "../../assets/icons/cart.png";
import { useContext, useEffect, useRef, useState } from "react";
import { darkContext } from "../../context/darkmode/DarkContext";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const [menuIcon, setMenuicon] = useState(false);
  const { darkmode, setDarkmode } = useContext(darkContext);
  const { user, logOut } = useContext(AuthContext);
  const dropdownRef = useRef(null);
  const [userdata, setUserdata] = useState([])
  const [photopath, setPhotopath] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = localStorage.getItem('access-token');

    const headers = {
      Authorization: `Bearer ${accessToken}`, // Assuming it's a Bearer token
      'Content-Type': 'application/json',
      Accept:'application/json'
    };

    // Make the fetch request with the headers
    fetch(`http://localhost:8000/api/user-details/${user?.email}`, { //TODO: change url with live site;
      method: 'GET',
      headers: headers, // Pass the headers object here
    })
      .then((res) => res.json())
      .then((result) => {
        setUserdata(result.data);
        // console.log(result)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }, [user])


  useEffect(() => {
    const originalString = userdata?.photo;

    if (originalString) {
      const modifiedString = originalString.replace('photogallery/', '');
      setPhotopath(modifiedString);
    } else {
      setPhotopath(''); // For example, setting an empty string
    }
  }, [user, userdata])



  //Logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuicon(false);
      }
    };

    if (menuIcon) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuIcon]);

  const navlink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="relative services">
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/learn-languages">Products</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div
        className={`navbar fixed z-10 font-serif lg:px-10 ${darkmode ? "dark" : "light"
          }`}
      >
        <div className="navbar-start">
          <div className="dropdown -mr-20" ref={dropdownRef}>
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <div onClick={() => setMenuicon(!menuIcon)}>
                {menuIcon ? (
                  <>
                    {" "}
                    <img src={MenuCrossIcon} width={24} alt="" />
                  </>
                ) : (
                  <>
                    {" "}
                    <img src={MenuIcon} width={30} alt="" />
                  </>
                )}
              </div>
            </label>
            <ul
              tabIndex={1}
              className={` dropdown-content text-center mt-3 z-10  p-4 shadow ${darkmode ? "dark" : "light"
                } w-[350px] border-2 border-b-slate-600 ${menuIcon ? "" : "hidden"
                }`}
            >
              {navlink}
            </ul>
          </div>
          <a className=" absolute font-serif font-bold ml-16 md:ml-72 md:text-2xl lg:ml-14 text-24">
            TechZaint
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1"
            style={{ fontSize: "20px" }}
          >
            {navlink}
          </ul>
        </div>
        <div className="navbar-end lg:pr-28">
          <div
            className="mr-2 cursor-pointer"
            onClick={() => setDarkmode(!darkmode)}
          >
            {darkmode ? (
              <>
                <img src={lightmoodIcon} width={30} alt="" />
              </>
            ) : (
              <>
                <img src={darkmoodIcon} width={30} alt="" />
              </>
            )}
          </div>
          {/* <img src={userIcon} width={30} alt="" /> */}
          {/* ------------------ */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                <div
                  className={`indicator cursor-pointer mr-4 ${darkmode ? "dark" : "light"
                    }`}
                >
                  <img src={cartIcon} width={30} alt="" />
                  <span className="badge badge-sm indicator-item">8+</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className={`mt-3 z-[1] card card-compact dropdown-content w-52 ${darkmode ? "dark" : "light"
                  } shadow`}
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {
                    user ? <><img src={`http://localhost:8000/images/${photopath}`} /></> : <><img src={userIcon} /></>
                  }
                </div>
              </label>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${darkmode ? "dark" : "light"
                  } rounded-box w-52`}
              >
                {user ? (
                  <>
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="#">Settings</Link>
                    </li>
                    <li>
                      <Link onClick={handleLogout}>Logout</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          {/* ------ */}
        </div>
      </div>
    </div>
  );
};

export default Header;
