import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="logo" width={150} />

      <p className="flex-1 border-l-1 border-gray-400 ml-8 pl-8 text-sm text-gray-500 max-sm:hidden">
        All right reserved. Copyright @imagify
      </p>

      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} alt="facebook_icon" width={35} />
        <img src={assets.twitter_icon} alt="twitter_icon" width={35} />
        <img src={assets.instagram_icon} alt="instagram_icon" width={35} />
      </div>
    </footer>
  );
};

export default Footer;
