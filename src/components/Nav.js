import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Avatar, ImageList } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("user");
    // localStorage.clear();
    navigate("/signup");
  };
  return (
    <AppBar position="static" style={{ backgroundColor: "skyblue" }}>
      {auth ? (
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button><Avatar alt="Your Alt Text" src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" /></Button>
            <Button color="inherit" component={Link} to="/">
              Products
            </Button>
            <Button color="inherit" component={Link} to="/about">
              Add Products
            </Button>
            <Button color="inherit" component={Link} to="/update">
              Update Products
            </Button>
            <Button color="inherit" component={Link} to="/tasks">
              Tasks
            </Button>
          </Box>
          <Typography variant="h6">
            <Button
              color="inherit"
              onClick={Logout}
              component={Link}
              to="/signup"
            >
              Logout({JSON.parse(auth).name})
            </Button>
          </Typography>
        </Toolbar>
      ) : (
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="profile">
              <Avatar/>
            </Button>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
          </Typography>
          <Button color="inherit" component={Link} to="/signup">
            SignUp
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      )}
    </AppBar>
  );
};
export default Nav;
