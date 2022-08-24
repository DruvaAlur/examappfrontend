import axios from "axios";
import { useEffect, useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavBar from "../AdminDashboard/NavBar/NavBar";
function GetUsers() {
  const currentUser = useParams();

  const [allUsers, updateAllUsers] = useState("");
  const [pageNumber, updatePageNumber] = useState(1);
  const [limit, updateLimit] = useState(5);

  const [loginStatus, updateLoginStatus] = useState("");
  const navigation = new useNavigate();
  useEffect(() => {
    // axios
    //   .post(
    //     `http://localhost:8800/api/v1/isAdminLoggedIn/${currentUser.username}`,
    //     {}
    //   )
    //   .then((resp) => {
    //     updateLoginStatus(true);
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //     updateLoginStatus(false);
    //   });

    getUsers();
  }, []);
  // if (!loginStatus) {
  //   return (
  //     <div
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         flexWrap: "wrap",
  //         flexDirection: "column",
  //       }}
  //     >
  //       <p style={{ color: "red", fontSize: "20px" }}>
  //         User not logged in please login by clicking below
  //       </p>

  //       <button
  //         onClick={() => navigation("/")}
  //         class="btn btn-secondary button"
  //       >
  //         login
  //       </button>
  //     </div>
  //   );
  // }

  async function getUsers() {
    axios
      .get("http://localhost:8800/api/v1/getUsers")
      .then((resp) => {
        console.log(resp.data);
        updateAllUsers(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  const toogleActiveFlag = (e) => {
    const username = e.target.id;
    console.log(username);
    axios
      .post("http://localhost:8800/api/v1/toggleActiveFlag", { username })
      .then((resp) => {
        // getCustomers();
      })
      .catch((error) => {});
  };
  let rowOfCustomer;

  if (allUsers != null) {
    rowOfCustomer = Object.values(allUsers).map((c) => {
      return (
        <tr id={c.userId}>
          <td style={{ width: "15%" }}>{c.credentials.username}</td>
          <td style={{ width: "15%" }}>{c.fname}</td>
          <td style={{ width: "15%" }}>{c.lname}</td>

          <td style={{ width: "10%" }}>{c.role}</td>
          <td style={{ width: "10%" }}>{c.exper}</td>
          <td style={{ width: "10%" }}>{c.country}</td>
          <td style={{ width: "10%" }}>
            <p>
              <b>Frontend:&nbsp;</b>
              {c.stack.frontend}
            </p>
            <p>
              <b>Backend:&nbsp;</b>
              {c.stack.backend}
            </p>
            <p>
              <b>Database:&nbsp;</b>
              {c.stack.database}
            </p>
          </td>

          <td style={{ width: "10%" }}>{c.score}</td>
          <td style={{ width: "10%" }}>{c.outOfScore}</td>
        </tr>
      );
    });
  }
  return (
    <>
      <NavBar username={currentUser.username} />
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col" style={{ width: "15%" }}>
                Username
              </th>
              <th scope="col" style={{ width: "15%" }}>
                Firstname
              </th>
              <th scope="col" style={{ width: "15%" }}>
                Lastname
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Role
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Experiance
              </th>
              <th scope="col" style={{ width: "12%" }}>
                Country
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Stack
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Score
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Out Of Score
              </th>
            </tr>
          </thead>
          <tbody>{rowOfCustomer}</tbody>
        </table>
      </div>
    </>
  );
}
export default GetUsers;
