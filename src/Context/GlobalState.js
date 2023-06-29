import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import MakeRequest from "../Axios/MakeRequest";

const NoteState = (props) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5YWQyZDBkMDQ4N2FkN2FjMDFlNmEwIn0sImlhdCI6MTY4Nzg2ODExMn0.3LxBT5DnDfhinvO3sFsJz5rEuyC9-kDHXVh3oZXO1Ik";

  const [notes, setNotes] = useState([]);

  const getAllNotes = async () => {
    let response = await MakeRequest(
      token,
      "get",
      "http://localhost:5000/api/notes/fetchallnotes",
      null
    );

    if (response.data.code === 1) {
      setNotes(response.data.data);
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);
  };

  const deleteNote = async (id) => {
    let response = await MakeRequest(
      token,
      "delete",
      `http://localhost:5000/api/notes/deletenote/${id}`,
      null
    );

    if (response.data.code === 1) {
      const newNotes = notes.filter((note) => {
        return note._id !== id;
      });
      setNotes(newNotes);
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);
  };

  const updateNote = async (note) => {
    let response = await MakeRequest(
      token,
      "put",
      `http://localhost:5000/api/notes/updatenote/${note._id}`,
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
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);
  };

  const addNote = async (data) => {
    let response = await MakeRequest(
      token,
      "post",
      "http://localhost:5000/api/notes/addnote",
      data
    );

    if (response.data.code === 1) {
      setNotes(notes.concat(response.data.data));
    }

    setSnackbarText(response.data.msg);
    setSnackbarState(true);
  };

  const login = async (email, password) => {
    let response = await MakeRequest(
      "",
      "post",
      "http://localhost:5000/api/auth/login",
      { email: email, password: password }
    );

    console.log(response.data);
  };

  const signup = () => {};

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
        signup
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default NoteState;
