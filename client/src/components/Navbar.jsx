import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between py-4 sm:px-4 cursor-pointer">
      <Link to="/">
        <img src={assets.logo} alt="logo" className=" w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
            <button className=" flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:cursor-pointer hover:scale-105 transition-all duration-700">
              <img
                src={assets.credit_star}
                alt="credit_star"
                className=" w-5"
              />
              <p className=" text-xs sm:text-sm font-medium text-gray-600">
                Credits left: 50
              </p>
            </button>
            <p className=" text-gray-600 pl-4 max-sm:hidden">Hi, Mukhtar</p>

            <div className=" relative group">
              <img
                src={assets.profile_icon}
                alt="profile_icon"
                className="w-10 drop-shadow"
              />
              <div className="absolute  hidden group-hover:block top-0 right-0 z-10 pt-13 rounded text-black">
                <ul className="list-none m-0 p-2 bg-black text-white rounded-full text-sm">
                  <li className=" py-1 px-4 cursor-pointer">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 cursor-pointer">
            <p onClick={() => navigate("/buy")}>Pricing</p>
            <button
              onClick={() => setShowLogin(true)}
              className=" bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
