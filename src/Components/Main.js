import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import SnackBar from "./SnackBar";
import { useContext } from "react";
import globalContext from "../Context/GlobalContext";
import LoadingBar from "react-top-loading-bar";
import Confirmation from "./Confirmation";
import ReadNote from "./ReadNote";

function Main() {
  const context = useContext(globalContext);

  const {
    snackbarState,
    snackbarText,
    severity,
    handleSnackBarClose,
    progress,
    confirmationState,
    confirmationHandleClose,
    handleConfirmationPositiveClick,
    confirmationDialogTitle,
    confirmationPositiveButtonText,
  } = context;

  return (
    <>
      <SnackBar
        message={snackbarText}
        handleClose={handleSnackBarClose}
        state={snackbarState}
        sx={{ width: "100%" }}
        severity={severity}
      />

      <Confirmation
        state={confirmationState}
        handleClose={confirmationHandleClose}
        positiveButton={confirmationPositiveButtonText}
        negativeButton={"Cancel"}
        title={confirmationDialogTitle}
        handlePositiveClick={handleConfirmationPositiveClick}
      />

      <LoadingBar color="#1565c0" height={3} progress={progress} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/readnote" element={<ReadNote/>}/>
      </Routes>
    </>
  );
}

export default Main;
