import React, { createContext, useContext, useState } from "react";

const PostContext = createContext();
const useAuth = () => useContext(PostContext);

const App = ({ children }) => {
  const [userdata, setuserdata] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPasswrd: "",
  });

  const [Logindata, setlogindata] = useState({
    Email: "",
    Password: "",
  });

  return (
    <>
      <PostContext.Provider
        value={{
          userdata,
          setuserdata,
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
