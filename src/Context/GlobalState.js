import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import MakeRequest from "../Axios/MakeRequest";
import { useNavigate } from "react-router-dom";

const NoteState = (props) => {
  let navigate = useNavigate();

  const [notes, setNotes] = useState([]);

  const getAllNotes = async () => {
    setProgress(65);

    try {
      let response = await MakeRequest(
        localStorage.getItem("token"),
        "get",
        "notes/fetchallnotes",
        null
      );

      setProgress(75);

      if (response.data.code === 1) {
        setNotes(response.data.data);
      } else {
        setSeverity("error");
        setSnackbarText(response.data.msg);
        setSnackbarState(true);
      }
    } catch (error) {
      setSeverity("error");
      setSnackbarText(
        "We have encountered a CORS error becuase of state loss in our serverless hosting platform, please refresh to fix it!"
      );
      setSnackbarState(true);
    }

    setProgress(100);
  };

  const deleteNote = async (id) => {
    setDeleteId(id);
    setConfirmationDialogTitle("Are you sure you want to delete this note?");
    setConfirmationPositiveButtonText("Delete");
    setconfirmationState(true);
  };

  const updateNote = async (note) => {
    setProgress(10);

    if (note.tag.length === 0) {
      note.tag = "General";
    }

    let response = await MakeRequest(
      localStorage.getItem("token"),
      "put",
      `notes/updatenote/${note._id}`,
      note
    );

    setProgress(50);

    if (response.data.code === 1) {
      let newNotes = JSON.parse(JSON.stringify(notes));

      for (let index = 0; index < newNotes.length; index++) {
        if (newNotes[index]._id === note._id) {
          newNotes[index] = note;
          break;
        }
      }

      setNotes(newNotes);
      setSeverity("success");
    } else {
      setSeverity("error");
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);

    setProgress(100);
  };

  const addNote = async (note) => {
    setProgress(10);

    if (note.tag.length === 0) {
      note.tag = "General";
    }

    let response = await MakeRequest(
      localStorage.getItem("token"),
      "post",
      "notes/addnote",
      note
    );

    setProgress(50);

    if (response.data.code === 1) {
      setNotes(notes.concat(response.data.data));
      setSeverity("success");
    } else {
      setSeverity("error");
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);

    setProgress(100);
  };

  const login = async (credentials) => {
    setProgress(10);

    let response = await MakeRequest("", "post", "auth/login", credentials);

    setProgress(50);

    if (response.data.code === 1) {
      localStorage.setItem("token", response.data.token);
      navigate("/");
      setSeverity("success");
    } else {
      setSeverity("error");
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);

    setProgress(100);
  };

  const signup = async (credentials) => {
    setProgress(10);

    let response = await MakeRequest(
      "",
      "post",
      "auth/createuser",
      credentials
    );

    setProgress(50);

    if (response.data.code === 1) {
      localStorage.setItem("token", response.data.token);
      navigate("/");
      setSeverity("success");
    } else {
      setSeverity("error");
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);

    setProgress(100);
  };

  const onLogoutClick = () => {
    setConfirmationDialogTitle("Are you sure you want to logout?");
    setConfirmationPositiveButtonText("Logout");
    setconfirmationState(true);
  };

  // -->snackbar related functions

  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleSnackBarClose = () => {
    setSnackbarState(false);
  };

  // --> top loading bar state
  const [progress, setProgress] = useState(0);

  // --> conformation functions
  const [confirmationState, setconfirmationState] = useState(false);
  const [confirmationPositiveButtonText, setConfirmationPositiveButtonText] =
    useState("");
  const [confirmationDialogTitle, setConfirmationDialogTitle] = useState("");

  const confirmationHandleClose = () => {
    setconfirmationState(false);
  };

  const handleConfirmationPositiveClick = async () => {
    setconfirmationState(false);

    if (confirmationPositiveButtonText === "Delete") {
      setProgress(10);

      let response = await MakeRequest(
        localStorage.getItem("token"),
        "delete",
        `notes/deletenote/${deleteId}`,
        null
      );

      setProgress(50);

      if (response.data.code === 1) {
        const newNotes = notes.filter((note) => {
          return note._id !== deleteId;
        });
        setNotes(newNotes);
        setSeverity("success");
      } else {
        setSeverity("error");
      }

      setSnackbarText(response.data.msg);
      setSnackbarState(true);

      setProgress(100);
    } else if (confirmationPositiveButtonText === "Logout") {
      localStorage.removeItem("token");
      navigate("/login");
      setSnackbarText("Successfully logged out!");
      setSnackbarState(true);
      setNotes([]);
    }
  };

  // --> delete id store
  const [deleteId, setDeleteId] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        notes,
        setNotes,
        deleteNote,
        updateNote,
        addNote,
        getAllNotes,
        snackbarState,
        snackbarText,
        severity,
        handleSnackBarClose,
        login,
        signup,
        onLogoutClick,
        progress,
        confirmationState,
        confirmationHandleClose,
        handleConfirmationPositiveClick,
        confirmationPositiveButtonText,
        confirmationDialogTitle,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default NoteState;
