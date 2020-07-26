import React, { useState } from "react";
import { Redirect } from "react-router-dom";
const Login = () => {
  let [loggedin, setLoggedIn] = useState(false);
  return !loggedin ? (
    <>
      <div className="login1">
        <input
          input="passwordInput"
          type="password"
          onChange={(e) => {
            e.target.value === process.env.REACT_APP_LOGIN_PASSWORD
              ? setLoggedIn(true)
              : setLoggedIn(false);
          }}
        />
      </div>
      <div className="login2"></div>
    </>
  ) : (
    <Redirect exact from="/" to="loggedin" />
  );
};
export default Login;
