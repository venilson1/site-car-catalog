import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession, createUser } from "../services/api";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider({children}) {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function login (username, password){

    try{
      const response = await createSession(username, password);

      const token = response.data.message;

      const decode = jwt_decode(token);

      localStorage.setItem("username", decode.username);
      localStorage.setItem("token", JSON.stringify(token));
  
      api.defaults.headers.Authorization = `Bearer ${token}`;
  
      setUser(decode.username);
      navigate("/admin");
    }
    catch(error){
      return error.message;
    }

  };

  async function create(username, email, password){
    try {
      await createUser(username, email, password);
      return navigate("/login");
    } catch (error) {
      return error.message;
    }
  }

  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
      setLoading(false);
      let userRecovered = localStorage.getItem("username");

      if(userRecovered){
        setUser(userRecovered)
      }
      setLoading(false);
  },[]);


  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, create, loading }}>
    {children}
  </AuthContext.Provider>
  )
}
