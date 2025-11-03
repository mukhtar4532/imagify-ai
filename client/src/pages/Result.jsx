import { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const getImage = await generateImage(input);

      if (getImage) {
        setIsImageLoaded(true);
        setImage(getImage);
      }
      console.log("Image Url: ", getImage);
    }

    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img
            src={image}
            alt="sample_img"
            crossOrigin="anonymous"
            className="max-w-sm rounded"
          />

          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={loading ? "" : "hidden"}>Loading...</p>
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 p-0.5 mt-10 text-white rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none max-sm:w-20 ml-8 placeholder-color"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full cursor-pointer"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-4 flex-wrap justify-center mt-10">
          <button
            onClick={() => setIsImageLoaded(false)}
            className="bg-transparent text-black border border-zinc-900 px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-zinc-900 text-white px-8 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
