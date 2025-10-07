import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [credit, setCredit] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

  const loadCreditData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: {
          token,
        },
      });

      if (data.success) {
        setCredit(data.credits);
      } else {
        console.error("Failed to load credits:", data.message);
      }
    } catch (error) {
      console.error("Error loading credits:", error.message);
    }
  };

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    credit,
    setCredit,
    token,
    setToken,
    loadCreditData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
