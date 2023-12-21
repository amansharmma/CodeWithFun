import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  paper: {
    padding: 30,
    maxWidth: 400,
    margin: "auto", // Center the Paper horizontally
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
}));

const SignupPage = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/');
    }
    console.log(auth);
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setFormData({ username: "", email: "", password: "" });
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
    console.log("Signup form submitted:", formData);
  };

  return (
    <Container className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Ragister
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Ragister Acount
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: "16px" }}>
          Already have an account? <Link href="/login">Log in</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default SignupPage;
