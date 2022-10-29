import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const AuthContext = createContext();

export default function AuthProvider({children}) {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function login (username, password){

    const response = await createSession(username, password);

    console.log("login auth", response.data);

    const token = response.data.message;

    console.log(token);

    localStorage.setItem("token", JSON.stringify(token));

    api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser(token);
      navigate("/admin");
  };

  function logout(){
    console.log("logout");

    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
      const tokenLocalStorage = localStorage.getItem("token");
      if (tokenLocalStorage) setUser(JSON.parse(tokenLocalStorage));
      setLoading(false);
  },[]);


  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }}>
    {children}
  </AuthContext.Provider>
  )
}