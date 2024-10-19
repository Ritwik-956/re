import React, { Component } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";

class Register extends Component {
  render() {
    return (
      <Helmet title="Register">
        <div className="login">
          <h4>Register</h4>
          <form onSubmit={(event)=>{event.preventDefault();
            console.log(event.target[0].value);
            console.log(event.target[1].value);
            console.log(event.target[2].value);
          }} action="/home">
            {/* <select required >
              <option>Select a Role</option>
              <option name="user" value="user">User</option>
              <option name="admin" value="admin">Admin</option>
            </select> */}
            <div className="text_area">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="text_input"
              />
            </div>
            <div className="text_area">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="text_input"
              />
            </div>
            <div className="text_area">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="text_input"
              />
            </div>
            <input type="submit" value="SIGN UP" className="btn" />
          </form>
          {/* <a className="link" href="/signup">Sign Up</a> */}
        </div>
      </Helmet>
    );
  }
}

export default Register;