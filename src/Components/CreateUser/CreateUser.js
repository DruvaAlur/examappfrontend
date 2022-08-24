import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../AdminDashboard/NavBar/NavBar";
import Alert from "@mui/material/Alert";
function CreateUser() {
  const currentUser = useParams();
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const [fname, updateFname] = useState("");
  const [lname, updateLname] = useState("");
  const [role, updateRole] = useState("");
  const [exper, updateExper] = useState("");
  const [frontend, updateFrontend] = useState("");
  const [backend, updateBackend] = useState("");
  const [database, updateDatabase] = useState("");
  const [country, updateCountry] = useState("");
  const [status, updateStatus] = useState("");

  const handleSubmit = async () => {
    await axios
      .post(`http://localhost:8800/api/v1/createUser/${currentUser.username}`, {
        username,
        password,
        fname,
        lname,
        role,
        exper,
        frontend,
        backend,
        database,
        country,
      })
      .then((resp) => {
        updateStatus(<Alert severity="success">Customer Created!</Alert>);
      })
      .catch((error) => {
        updateStatus(<Alert severity="error">{error.response.data}</Alert>);
      });
  };
  return (
    <>
      <NavBar username={currentUser.username} />
      <div
        style={{
          width: "100vw",

          display: "flex",
          justifyContent: "center",

          alignContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            marginLeft: "100px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            background: "#E0E0E0",
          }}
        >
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateUsername(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updatePassword(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Firstname
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateFname(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Lastname
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateLname(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              role
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateRole(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Experiance
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateExper(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Frontend
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateFrontend(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Backend
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateBackend(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Database
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateDatabase(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Country
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateCountry(e.target.value);
              }}
            />
          </div>
          <br />

          <button class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <br />
          <div>{status}</div>
          <br />
        </div>
      </div>
    </>
  );
}
export default CreateUser;
