import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const pages = ["Create Contacts", "Get Contacts", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar(prop) {
  const username = prop.username;
  //   const username = props.username;
  //   const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigation = new useNavigate();

  const handleCreateUser = () => {
    navigation(`/adminDashboard/CreateUser/${username}`);
  };
  //   const handleUpdateContact = () => {
  //     navigation(`/userDashboard/UpdateContacts/${username}`);
  //   };
  //   const handleGetAllContact = () => {
  //     navigation(`/userDashboard/GetAllContacts/${username}`);
  //   };
  //   const handleCreateContactDetail = () => {
  //     navigation(`/userDashboard/createContactDetail/${username}`);
  //   };
  const handleLogout = async () => {
    await axios.post("http://localhost:8800/api/v1/logout").then(() => {
      navigation("/");
    });
  };
  const handleGetUsers = () => {
    navigation(`/adminDashboard/GetUsers/${username}`);
  };
  const handleGetAllQuesions = () => {
    navigation(`/adminDashboard/GetAllQuestions/${username}`);
  };
  //   const handleGetAllCustomers = () => [
  //     navigation(`/adminDashboard/getAllCustomers/${username}`),
  //   ];
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "Inherit",
              textDecoration: "none",
            }}
            // onClick={() =>
            // //   navigation(`/userDashboard/createContacts/${props.username}`)
            // }
          >
            Exam App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handleCreateUser}
            >
              Create User
            </Button>
            <Button
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => {
                navigation(`/adminDashboard/CreateQuestion/${username}`);
              }}
            >
              Create Question
            </Button>
            <Button
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handleGetUsers}
            >
              Get Users
            </Button>
            <Button
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handleGetAllQuesions}
            >
              Get All Questions
            </Button>
            {/* <Button
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              //   onClick={handleCreateContactDetail}
            >
              Create Contact Detail
            </Button> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
