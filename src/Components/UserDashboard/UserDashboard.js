import axios from "axios";
import { useEffect, useState } from "react";

import NavBar from "./NavBar/NavBar";
import { Navigate, useNavigate, useParams } from "react-router-dom";
function UserDashboard() {
  const currentUser = useParams();
  const navigation = new useNavigate();
  const [tests, updateTests] = useState("");
  const handleAttempTest = (e) => {
    console.log(e.target.id);
    navigation(`/userDashboard/AttemptTest/${currentUser.username}`, {
      state: e.target.id,
    });
  };
  useEffect(() => {
    axios
      .post(`http://localhost:8800/api/v1/getTests/${currentUser.username}`)
      .then((resp) => {
        updateTests(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  let rowOfTechStack;
  if (tests != null) {
    rowOfTechStack = Object.values(tests).map((t) => {
      return (
        <tr>
          <td>{t.tech}</td>
          <td>
            {t.isAttempted ? (
              "Test Attempted"
            ) : (
              <button
                onClick={handleAttempTest}
                id={t.tech}
                class="btn btn-primary"
              >
                Attempt Test
              </button>
            )}
          </td>
          <td>{t.score}</td>
          <td>{t.outOfScore}</td>
        </tr>
      );
    });
  }
  return (
    <>
      <NavBar username={currentUser.username} />
      <table class="table table-striped">
        <thead>
          <th>
            <td>Technology</td>
          </th>
          <th>
            <td>Attempted</td>
          </th>
          <th>
            <td>Score</td>
          </th>
          <th>
            <td>Out Of Score</td>
          </th>
        </thead>
        <tbody>{rowOfTechStack}</tbody>
      </table>
    </>
  );
}
export default UserDashboard;
