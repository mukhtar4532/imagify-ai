import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import BuyCredits from "../pages/BuyCredits.jsx";
import App from "../App.jsx";
import Result from "../pages/Result.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // '/' route
      { path: "buy", element: <BuyCredits /> },
      { path: "result", element: <Result /> },
    ],
  },
]);

export default router;
