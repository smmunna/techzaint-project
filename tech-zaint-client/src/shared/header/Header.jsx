import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "../../assets/icons/menu.png";
import MenuCrossIcon from "../../assets/icons/menu_cross.png";
import userIcon from "../../assets/icons/user.png";
import darkmoodIcon from "../../assets/icons/dark.png";
import lightmoodIcon from "../../assets/icons/light.png";
import cartIcon from "../../assets/icons/cart.png";
import { useContext, useState } from "react";
import { darkContext } from "../../context/darkmode/DarkContext";

const Header = () => {
  const [menuIcon, setMenuicon] = useState(false);
  const { darkmode, setDarkmode } = useContext(darkContext);

  const navlink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div
        className={`navbar fixed z-10 font-serif lg:px-10 ${
          darkmode ? "dark" : "light"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown -mr-20">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <div onClick={() => setMenuicon(!menuIcon)}>
                {menuIcon ? (
                  <>
                    {" "}
                    <img src={MenuCrossIcon} width={30} alt="" />
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
              tabIndex={0}
              className={` dropdown-content text-center mt-3 z-10  p-4 shadow ${
                darkmode ? "dark" : "light"
              } w-[350px] border-2 border-b-slate-600 ${
                menuIcon ? "" : "hidden"
              }`}
            >
              {navlink}
            </ul>
          </div>
          <a className=" absolute text-2xl font-serif font-bold">TechZaint</a>
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
                  className={`indicator mr-4 ${darkmode ? "dark" : "light"}`}
                >
                  <img src={cartIcon} width={30} alt="" />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className={`mt-3 z-[1] card card-compact dropdown-content w-52 ${
                  darkmode ? "dark" : "light"
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
                  <img src={userIcon} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${
                  darkmode ? "dark" : "light"
                } rounded-box w-52`}
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
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
