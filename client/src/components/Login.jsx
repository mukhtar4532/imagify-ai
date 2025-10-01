import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const { setShowLogin } = useContext(AppContext);
  const [state, setState] = useState("Login");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <section className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white text-slate-500 p-10 rounded-xl">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm mt-2">Welcome back! Please sign in to continue</p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img
              width={17}
              // className="text-transparent"
              className="invert-[40%] sepia-[80%] saturate-[200%] hue-rotate-[180deg]"
              src={assets.profile_icon}
              alt=""
            />
            <input
              type="text"
              placeholder="Full Name"
              className="outline-none text-sm"
              required
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            className="outline-none text-sm"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            className="outline-none text-sm"
            required
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot Password?
        </p>

        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "Login" : "create account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-sm text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        ) : (
          <p
            onClick={() => setState("Login")}
            className="mt-5 text-sm text-center"
          >
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Login</span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="cross_icon"
          className="absolute top-5 right-5 cursor-pointer"
        />
      </form>
    </section>
  );
};

export default Login;
