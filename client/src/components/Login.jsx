import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });

  const { username, password } = login;

  function loginInfo(e) {
    e.preventDefault();
    console.log("Im inside loginDetails");
    // axios
    //   .post("/api/user", login)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    fetch("/api/signup", {
      method: "POST",
      headers: {
        // Accept: 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => setLogin(data))
      .catch((err) => console.log(err));
  }

  function signUp(e) {
    e.preventDefault();
    console.log("Im inside loginDetails");
    // axios
    //   .post("/api/user", login)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    fetch("/api/user", {
      method: "POST",
      headers: {
        // Accept: 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => setLogin(data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="login-form">
      <div className="sign-up-title">
        <p>Sign up for a free account</p>
      </div>
      <div className="form-details">
        <form onSubmit={loginDetails}>
          <input
            type="text"
            className="login-field"
            placeholder="Username"
            value={username || ""}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <input
            type="password"
            className="login-field"
            id="password-field"
            placeholder="Password"
            value={password || ""}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <button type="submit">Login</button>
    </div>
  );
}

export default Login;
