import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    //sign in...
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
          alt="facebook__logo_circle"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1024px-Facebook_Logo_%282019%29.svg.png"
          alt="facebook__logo_letters"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        SignIn
      </Button>
    </div>
  );
}

export default Login;
