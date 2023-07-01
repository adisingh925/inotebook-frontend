import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import MakeRequest from "../Axios/MakeRequest";
import { useNavigate } from "react-router-dom";

const NoteState = (props) => {
  let navigate = useNavigate();

  const [notes, setNotes] = useState([]);

  const getAllNotes = async () => {
    let response = await MakeRequest(
      localStorage.getItem("token"),
      "get",
      "notes/fetchallnotes",
      null
    );

    if (response.data.code === 1) {
      setNotes(response.data.data);
    } else {
      setSeverity("error");
      setSnackbarText(response.data.msg);
      setSnackbarState(true);
    }
  };

  const deleteNote = async (id) => {
    let response = await MakeRequest(
      localStorage.getItem("token"),
      "delete",
      `notes/deletenote/${id}`,
      null
    );

    if (response.data.code === 1) {
      const newNotes = notes.filter((note) => {
        return note._id !== id;
      });
      setNotes(newNotes);
      setSeverity("success");
    } else {
      setSeverity("error");
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);
  };

  const updateNote = async (note) => {
    if (note.tag.length === 0) {
      note.tag = "General";
    }

    let response = await MakeRequest(
      localStorage.getItem("token"),
      "put",
      `notes/updatenote/${note._id}`,
      note
    );

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
  };

  const addNote = async (note) => {
    if (note.tag.length === 0) {
      note.tag = "General";
    }
    let response = await MakeRequest(
      localStorage.getItem("token"),
      "post",
      "notes/addnote",
      note
    );

    if (response.data.code === 1) {
      setNotes(notes.concat(response.data.data));
      setSeverity("success");
    } else {
      setSeverity("error");
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);
  };

  const login = async (credentials) => {
    let response = await MakeRequest("", "post", "auth/login", credentials);

    if (response.data.code === 1) {
      localStorage.setItem("token", response.data.token);
      navigate("/");
      setSeverity("success");
    } else {
      setSeverity("error");
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);
  };

  const signup = async (credentials) => {
    let response = await MakeRequest(
      "",
      "post",
      "auth/createuser",
      credentials
    );

    if (response.data.code === 1) {
      localStorage.setItem("token", response.data.token);
      navigate("/");
      setSeverity("success");
    } else {
      setSeverity("error");
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);
  };

  const onLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/login");

    setSnackbarText("Successfully logged out!");
    setSnackbarState(true);
    setNotes([]);
  };

  // -->snackbar related functions

  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleSnackBarClose = () => {
    setSnackbarState(false);
  };

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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default NoteState;
