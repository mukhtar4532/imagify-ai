import { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";

const BuyCredits = () => {
  const { user, token, backendUrl, setShowLogin } = useContext(AppContext);

  const handleCheckout = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }
      const { data } = await axios.post(
        `${backendUrl}/api/user/payment`,
        { planId },
        { headers: { token } }
      );
      window.location.href = data.url;
      toast.done("Credit added");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] text-center pt-14 mb-10"
    >
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        OUR PLANS
      </button>
      <h1 className="text-center text-3xl font-medium mb-12 sm:mb-10">
        Choose the plan
      </h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
            key={index}
            className="bg-white drop-shadow-sm border rounded-lg px-8 py-12 text-gray-600 hover:scale-105 transition-all duration-500"
          >
            <img width={40} src={assets.logo_icon} alt="logo_icon" />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}</span>/{" "}
              {item.credits} credits
            </p>
            <button
              onClick={() => handleCheckout(item.id)}
              className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BuyCredits;
