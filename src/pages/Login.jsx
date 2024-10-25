import React, { Component } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import { useNavigate } from "react-router-dom";

function Login({setIsLoggedIn})  {
  let value = "user"
  const navigate = useNavigate()
  return (
    <Helmet title="Login">
      <div className="login">
        <h4>Login</h4>
        <form onSubmit={(event) => {
          event.preventDefault();
          setIsLoggedIn(true)
          const role = event.target[0].value
          navigate("/home",{state: role})
        }}
          action="/login">
          <select onChange={(event) => { value = event.target.value }} defaultValue={value} required >
            <option disabled>Select a Role</option>
            <option name="user" value="user">User</option>
            <option name="admin" value="admin">Admin</option>
          </select>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="text_input"
            />
          </div>
          <input type="submit" value="LOGIN" className="btn" />
        </form>
        {/* <a className="link" href="/signup">Sign Up</a> */}
      </div>
    </Helmet>
  );

}

export default Login;
