import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({children}) {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function login(username, password){
    console.log("login auth", { username, password });

    const loggedUser = {
      id: "123",
      username
    }

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if(password === "secret"){
      setUser({id: "123", username });
      navigate("/admin");
    }
  };

  function logout(){
    console.log("logout");
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
