import React from "react";
import "./Pages.css";
import {Button } from "react-bootstrap"
function Login() {
  return (
    <div className="sector">
      <div className="form">
        <h1>Login</h1>
        <label htmlFor="mail">Username</label>
        <input type="email" name="email" id="mail" placeholder="Enter ADMIN Email..." />
        <label htmlFor="pwd">Password</label>
        <input type="password" name="password" id="pwd" placeholder="Enter ADMIN Password..."/>
        <Button variant="dark">Log In</Button>
      </div>
    </div>
  );
}

export default Login;
