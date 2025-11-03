import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import BuyCredits from "../pages/BuyCredits.jsx";
import App from "../App.jsx";
import Result from "../pages/Result.jsx";

const AppRoutes = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-100 to-orange-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buy" element={<BuyCredits />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
