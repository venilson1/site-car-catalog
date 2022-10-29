import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {api, createSession} from "../services/api";

export const AuthContext = createContext();

export default function AuthProvider({children}) {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function login (username, password){

    const response = await createSession(username, password);

    console.log("login auth", response.data);

    const loggedUser = response.data.user;
    const token = response.data.token;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

      setUser(loggedUser);
      navigate("/admin");
  };

  function logout(){
    console.log("logout");

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
      const userLocalStorage = localStorage.getItem("user");
      if (userLocalStorage) setUser(JSON.parse(userLocalStorage));
      setLoading(false);
  },[]);


  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }}>
    {children}
  </AuthContext.Provider>
  )
}
