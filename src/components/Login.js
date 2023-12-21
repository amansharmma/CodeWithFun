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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/');
    }
    console.log(auth);
  },[])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async() => {

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
            Login
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: "16px" }}>
          do not have an account? <Link href="/SignUp">Sign Up</Link>
        </Typography>
      </Paper>
    </Container>
  );
};
export default SignupPage;
