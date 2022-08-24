import axios from "axios";
import { useEffect, useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Navigate, useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import NavBar from "../AdminDashboard/NavBar/NavBar";
function GetAllQuestions() {
  const currentUser = useParams();

  const [techName, updateTechName] = useState("");
  const [allQuestions, updateAllQuestions] = useState("");
  const [loginStatus, updateLoginStatus] = useState("");
  const navigation = new useNavigate();

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

  useEffect(() => {
    getQuestions();
  }, []);
  const getQuestions = () => {
    axios
      .get("http://localhost:8800/api/v1/getAllQuestions")
      .then((resp) => {
        console.log(resp.data);
        updateAllQuestions(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const toogleActiveFlag = (e) => {
    const questionId = e.target.id;
    console.log(questionId);
    axios
      .post("http://localhost:8800/api/v1/toogleActiveFlagOfQuestion", {
        questionId,
      })
      .then((resp) => {
        console.log(resp.data);
        getQuestions();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleGetQuestions = () => {
    axios
      .get(`http://localhost:8800/api/v1/getAllQuestions`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  let rowOfQuestion;

  if (allQuestions != null) {
    rowOfQuestion = Object.values(allQuestions).map((q) => {
      return (
        <tr>
          <td style={{ width: "10%" }}>{q.tech}</td>
          <td style={{ width: "10%" }}>{q.details}</td>
          <td style={{ width: "10%" }}>
            {Object.values(q.options).map((a) => {
              return <p>{a}</p>;
            })}
          </td>
          <td style={{ width: "10%" }}>{q.complexity}</td>
          <td style={{ width: "10%" }}>{q.correctAnswer}</td>
          <td style={{ width: "10%" }}>{q.negativeMark}</td>
          <td style={{ width: "10%" }}>{q.outOfMark}</td>

          <td style={{ width: "10%" }}>
            {
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={q.isActive}
                      onChange={toogleActiveFlag}
                      id={q.id}
                    />
                  }
                />
              </FormGroup>
            }
          </td>
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
                Technology
              </th>
              <th scope="col" style={{ width: "15%" }}>
                Detail
              </th>
              <th scope="col" style={{ width: "15%" }}>
                Options
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Complexity
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Correct Answer
              </th>
              <th scope="col" style={{ width: "12%" }}>
                Negative Mark
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Out Of Mark
              </th>
              <th scope="col" style={{ width: "10%" }}>
                is Active
              </th>
            </tr>
          </thead>
          <tbody>{rowOfQuestion}</tbody>
        </table>
      </div>
    </>
  );
}
export default GetAllQuestions;
