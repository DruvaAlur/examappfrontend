import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../AdminDashboard/NavBar/NavBar";
import Alert from "@mui/material/Alert";
function CreateQuestion() {
  const currentUser = useParams();
  const [tech, updateTech] = useState("");
  const [details, updateDetails] = useState("");
  const [complexity, updateComplexity] = useState(0);
  const [options, updateOptions] = useState([]);
  const [correctAnswer, updateCorrectAnswer] = useState("");
  const [status, updateStatus] = useState("");
  const [numberOfOptions, updateNumberOfOptions] = useState(2);
  const [option1, updateOption1] = useState("");
  const [option2, updateOption2] = useState("");
  const [option3, updateOption3] = useState("");
  const [option4, updateOption4] = useState("");
  let optns = [];
  const handleSubmit = () => {
    if (numberOfOptions == 2) {
      optns.push(option1, option2);
    }
    if (numberOfOptions == 3) {
      optns.push(option1, option2, option3);
    }
    if (numberOfOptions == 4) {
      optns.push(option1, option2, option3, option4);
    }

    console.log(optns);
    updateOptions(optns);
    if (options.length == numberOfOptions) {
      console.log(options);
      axios
        .post(`http://localhost:8800/api/v1/createQuestions`, {
          tech,
          details,
          complexity,
          options,
          correctAnswer,
        })
        .then((resp) => {
          updateStatus(<Alert severity="success">Question Created!</Alert>);
        })
        .catch((error) => {
          updateStatus(<Alert severity="error">{error.response.data}</Alert>);
        });
    }
  };
  let singleOption;
  if (numberOfOptions == 2) {
    singleOption = (
      <div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Options
          </label>
          <input
            type="text"
            class="form-control"
            //   placeholder="First name"
            aria-label="First name"
            onChange={(e) => {
              updateOption1(e.target.value);
            }}
            style={{ width: "45vw" }}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            //   placeholder="First name"
            aria-label="First name"
            onChange={(e) => {
              updateOption2(e.target.value);
            }}
            style={{ width: "45vw" }}
          />
        </div>
      </div>
    );
  } else if (numberOfOptions == 3) {
    singleOption = (
      <div>
        <div class="mb-3" style={{ width: "70%" }}>
          <label for="formGroupExampleInput" class="form-label">
            Options
          </label>
          <input
            type="text"
            class="form-control"
            //   placeholder="First name"
            aria-label="First name"
            onChange={(e) => {
              updateOption1(e.target.value);
            }}
            style={{ width: "45vw" }}
          />
        </div>
        <div class="mb-3" style={{ width: "70%" }}>
          <input
            type="text"
            class="form-control"
            //   placeholder="First name"
            aria-label="First name"
            onChange={(e) => {
              updateOption2(e.target.value);
            }}
            style={{ width: "45vw" }}
          />
        </div>
        <div class="mb-3" style={{ width: "70%" }}>
          <input
            type="text"
            class="form-control"
            //   placeholder="First name"
            aria-label="First name"
            onChange={(e) => {
              updateOption3(e.target.value);
            }}
            style={{ width: "45vw" }}
          />
        </div>
      </div>
    );
  } else {
    singleOption = (
      <div>
        <div class="mb-3" style={{ width: "70%" }}>
          <label for="formGroupExampleInput" class="form-label">
            Options
          </label>
          <input
            type="text"
            class="form-control"
            //   placeholder="First name"
            aria-label="First name"
            onChange={(e) => {
              updateOption1(e.target.value);
            }}
            style={{ width: "45vw" }}
          />
        </div>
        <div class="mb-3" style={{ width: "70%" }}>
          <input
            type="text"
            class="form-control"
            //   placeholder="First name"
            aria-label="First name"
            onChange={(e) => {
              updateOption2(e.target.value);
            }}
            style={{ width: "45vw" }}
          />
        </div>
        <div class="mb-3" style={{ width: "70%" }}>
          <input
            type="text"
            class="form-control"
            //   placeholder="First name"
            aria-label="First name"
            onChange={(e) => {
              updateOption3(e.target.value);
            }}
            style={{ width: "45vw" }}
          />
        </div>
        <div class="mb-3" style={{ width: "70%" }}>
          <input
            type="text"
            class="form-control"
            //   placeholder="First name"
            aria-label="First name"
            onChange={(e) => {
              updateOption4(e.target.value);
            }}
            style={{ width: "45vw" }}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar username={currentUser.username} />
      <div
        style={{
          width: "100vw",
          // height: "100vh",
          // marginLeft: "100px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#E0E0E0",
            width: "70vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Technology
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateTech(e.target.value);
              }}
              style={{ width: "45vw" }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Question detail
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateDetails(e.target.value);
              }}
            />
          </div>
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Complexity
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateComplexity(e.target.value);
              }}
            />
          </div>
          <label
            class="fw"
            style={{ alignSelf: "flex-start", marginLeft: "132px" }}
          >
            Number of options
          </label>
          <select
            id="NumberOfOptions"
            name="NumberOfOptions"
            onChange={(e) => {
              updateNumberOfOptions(e.target.value);
            }}
            style={{ width: "45vw", height: "6vh" }}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          <br />

          {singleOption}
          <div class="mb-3" style={{ width: "70%" }}>
            <label for="formGroupExampleInput" class="form-label">
              Correct Answer
            </label>
            <input
              type="text"
              class="form-control"
              //   placeholder="First name"
              aria-label="First name"
              onChange={(e) => {
                updateCorrectAnswer(e.target.value);
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
export default CreateQuestion;
