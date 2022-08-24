import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBar from "../UserDashboard/NavBar/NavBar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";
import FormLabel from "@mui/material/FormLabel";
function AttemptTest() {
  const currentUser = useParams();
  const navigation = new useNavigate();
  const location = useLocation();
  const techName = location.state;
  const [questions, updateQuestions] = useState([]);
  const [markedOptions, updateOptions] = useState([]);
  const [status, updateStatus] = useState("");
  useEffect(() => {
    // axios.post(`http://localhost:8800/api/v1/attemptTest/${currentUser.username}/${testName}`).then((resp)=>{console.log(resp.data);}).catch((error)=>{console.log(error.response.data);})
    axios
      .post(
        `http://localhost:8800/api/v1/getQuestions/${currentUser.username}`,
        { techName }
      )
      .then((resp) => {
        updateQuestions(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  const handleSubmitTest = () => {
    axios
      .post(
        `http://localhost:8800/api/v1/attemptTest/${currentUser.username}/${techName}`,
        { markedOptions }
      )
      .then((resp) => {
        console.log(resp.data);
        updateStatus(<Alert severity="success">Test Attempted!</Alert>);
        navigation(`/userDashboard/${currentUser.username}`);
      })
      .catch((error) => {
        console.log(error.response.data);
        updateStatus(<Alert severity="error">{error.response.data}</Alert>);
      });
  };
  const handleRadioGroupChange = (e, i) => {
    console.log(e.target.value);
    console.log(i);
    let newOptions = [...markedOptions];
    newOptions[i] = e.target.value;
    updateOptions(newOptions);
  };
  useEffect(() => {
    console.log(markedOptions);
  }, [markedOptions]);
  let oneQuestion;
  if (questions != null) {
    oneQuestion = Object.values(questions).map((q, i) => {
      return (
        <div
          style={{
            width: "98vw",
            background: "#E6E4E4	",
            margin: "10px",
            marginRight: "10px",
            boxshadow: "5px 10px ",
          }}
        >
          <FormControl style={{ padding: "10px" }}>
            <FormLabel id="demo-radio-buttons-group-label">
              {q.details}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue={q.options[0]}
              name="radio-buttons-group"
              nodeValue={i}
              onChange={(event) => {
                handleRadioGroupChange(event, i);
              }}
            >
              {Object.values(q.options).map((o) => {
                return (
                  <FormControlLabel value={o} control={<Radio />} label={o} />
                );
              })}
            </RadioGroup>
          </FormControl>
        </div>
      );
    });
  }
  return (
    <>
      {" "}
      <NavBar username={currentUser.username} />
      <div>{oneQuestion}</div>
      <div>{status}</div>
      <button class="btn btn-primary" onClick={handleSubmitTest}>
        Submit Test
      </button>
    </>
  );
}
export default AttemptTest;
