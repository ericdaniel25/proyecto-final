import { createContext, useState, useContext } from "react";
import { registerReq } from "../Api/auth";
import { set } from "react-hook-form";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerReq(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
