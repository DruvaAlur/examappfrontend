import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import CreateQuestion from "./Components/CreateQuestion/CreateQuestion";
import CreateUser from "./Components/CreateUser/CreateUser";
import GetUsers from "./Components/GetUsers/GetUsers";
import GetAllQuestions from "./Components/GetAllQuestions/GetAllQuestions";
import AttemptTest from "./Components/AttemptTest/AttemptTest";
function App() {
  return (
    <Routes>
      {" "}
      <Route exact path="/" element={<Login />} />
      <Route
        exact
        path="/adminDashboard/:username"
        element={<AdminDashboard />}
      />
      <Route
        exact
        path="/userDashboard/:username"
        element={<UserDashboard />}
      />
      <Route
        exact
        path="/adminDashboard/CreateQuestion/:username"
        element={<CreateQuestion />}
      />
      <Route
        exact
        path="/adminDashboard/CreateUser/:username"
        element={<CreateUser />}
      />
      <Route
        exact
        path="/adminDashboard/GetUsers/:username"
        element={<GetUsers />}
      />
      <Route
        exact
        path="/adminDashboard/GetAllQuestions/:username"
        element={<GetAllQuestions />}
      />
      <Route
        exact
        path="/userDashboard/AttemptTest/:username"
        element={<AttemptTest />}
      />
    </Routes>
  );
}

export default App;
