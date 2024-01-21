import React, { createContext, useContext, useState } from "react";

const PostContext = createContext();
const useAuth = () => useContext(PostContext);

const App = ({ children }) => {
  const [userdata, Setuserdata] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPasswrd: "",
  });

  const [Logindata, setlogindata] = useState({
    Username: "",
    Password: "",
  });

  return (
    <>
      <PostContext.Provider
        value={{
          userdata,
          Setuserdata,
          Logindata,
          setlogindata,
        }}
      >
        {children}
      </PostContext.Provider>
    </>
  );
};

export { useAuth, App };
