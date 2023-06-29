import React, { useState } from "react";
import NotesContext from "./NotesContext";
import MakeRequest from "../../Axios/MakeRequest";
import { json } from "react-router-dom";

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

    setNotes(response.data);
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
  };

  const addNote = async (data) => {
    let response = await MakeRequest(
      token,
      "post",
      "http://localhost:5000/api/notes/addnote",
      data
    );

    setNotes(notes.concat(response.data));
  };

  return (
    <NotesContext.Provider
      value={{ notes, setNotes, deleteNote, updateNote, addNote, getAllNotes }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NoteState;
