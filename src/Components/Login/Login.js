import axios from "axios";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigation = new useNavigate();
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const [loginStatus, updateLoginStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8800/api/v1/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data.role);
        if (response.data.role == "admin") {
          navigation(
            `/adminDashboard/CreateUser/${response.data.credentials.username}`
          );
        } else {
          navigation(`/userDashboard/${response.data.credentials.username}`);
        }
      })
      .catch((error) => {
        updateLoginStatus(
          <Alert severity="error">{error.response.data}</Alert>
        );
      });
  };
  return (
    <>
      <div
        id="loginform"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          id="login"
          style={{
            background: "#E0E0E0",
            padding: "50px",
            paddingLeft: "90px",
            paddingRight: "90px",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit} id="loginform">
            <div>
              <label class="fw-bold">Username:&nbsp; </label>

              <br />

              <input
                type="text"
                value={username}
                onChange={(e) => updateUsername(e.target.value)}
              ></input>

              <br />
              <br />
              <label class="fw-bold">Password:&nbsp;</label>
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => updatePassword(e.target.value)}
              ></input>

              <br />

              <br />

              <button class="btn btn-primary button">Login</button>
              <br />
              <br />
              {loginStatus}
            </div>
          </form>
          <br />
        </div>
      </div>
    </>
  );
}
export default Login;
