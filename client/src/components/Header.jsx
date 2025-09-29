import { assets } from "../assets/assets.js";

const Header = () => {
  return (
    <header className=" flex flex-col items-center justify-center text-center my-20">
      <div className=" flex items-center gap-3 text-stone-500 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="star_icon" />
      </div>

      <h1 className="text-4xl sm:text-7xl max-w-[300px] sm:max-w-[590px] mt-10 mx-auto">
        Turn text to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
          image
        </span>
        , in seconds.
      </h1>

      <p className="text-center mt-5 mx-auto max-w-xl">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds – just type, and watch the magic happen.
      </p>

      <button className=" sm:text-lg mt-8 w-auto bg-black text-white px-12 py-2.5 flex items-center gap-2 rounded-full">
        Generate Image
        <img className="h-6" src={assets.star_group} alt="star_group_img" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt="sample_img"
              width={70}
              key={index}
            />
          ))}
      </div>

      <p className="mt-2 text-neutral-600">Generated images from imagify</p>
    </header>
  );
};

export default Header;
