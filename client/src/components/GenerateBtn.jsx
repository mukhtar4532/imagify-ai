import { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onGenerateImageHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-16 text-center"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the magic.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
          Try now
        </span>
      </h1>
      <button
        onClick={onGenerateImageHandler}
        className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500"
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="star_group_img" />
      </button>
    </motion.section>
  );
};

export default GenerateBtn;
