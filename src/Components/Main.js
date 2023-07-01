import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import SnackBar from "./SnackBar";
import { useContext } from "react";
import globalContext from "../Context/GlobalContext";

function Main() {
  const context = useContext(globalContext);

  const { snackbarState, snackbarText, severity, handleSnackBarClose } =
    context;

  return (
    <>
      <SnackBar
        message={snackbarText}
        handleClose={handleSnackBarClose}
        state={snackbarState}
        sx={{ width: '100%' }}
        severity={severity}
      />


      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default Main;
