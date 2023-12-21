import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignupPage from "./components/Signup";
import PrivateComponant from "./components/PrivateComponent";
// import Tasks from "./components/Tasks";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import PythonContant from "./components/PythonContant";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route element={<PrivateComponant />}>
          <Route path="/" element={<AddProduct/>} />
          <Route path="/tasks" element={<h1>Tasks</h1>} />
          <Route path="/about" element={<h1>ADD PRODUCT</h1>} />
          <Route path="/update" element={<h1>UPDATE PRODUCT</h1>} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/python" element={<PythonContant/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;