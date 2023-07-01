import React, { useEffect, useState } from "react";
import { useContext } from "react";
import globalContext from "../Context/GlobalContext";
import NoteItem from "./NoteItem";
import AddNotes from "./AddNotes";
import Button from "@mui/material/Button";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";

function Notes() {
  const context = useContext(globalContext);
  let navigate = useNavigate();
  const { notes, deleteNote, addNote, updateNote, getAllNotes } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --> update and delete button functions

  const handleDeleteClicked = (id) => {
    deleteNote(id);
  };

  const handleUpdateClicked = (note) => {
    setNote(note);
    setPositiveButtonText("Update");
    setDialogTitle("Update your Note");
    setOpen(true);
  };

  // --> add/update dialog states and functions

  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [positiveButtonText, setPositiveButtonText] = useState("");
  const [note, setNote] = useState({
    title: "",
    tag: "General",
    description: "",
  });

  const handleAddClicked = () => {
    setPositiveButtonText("Save");
    setDialogTitle("Add New Note");
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleNegativeButtonClick = () => {
    setOpen(false);
  };

  const handlePositiveButtonClick = (note) => {
    if (positiveButtonText === "Update") {
      updateNote(note);
    } else {
      addNote(note);
    }
    setOpen(false);
    setNote({ title: "", description: "", tag: "" });
  };

  const onNoteChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <AddNotes
        dialogState={open}
        handleClose={handleDialogClose}
        dialogTitle={dialogTitle}
        handleNegative={handleNegativeButtonClick}
        handlePositive={handlePositiveButtonClick}
        positiveButtonText={positiveButtonText}
        onChange={onNoteChange}
        note={note}
      />

      <h1>Your Notes</h1>
      <Button
        variant="contained"
        onClick={handleAddClicked}
        style={{ marginTop: "10px" }}
        endIcon={<EditNoteIcon />}
      >
        New Note
      </Button>

      <div className="row">
        <div className={`App ${notes.length === 0 ? "my-5" : ""}`}>
          {notes.length === 0 && "No notes to display"}
        </div>

        {notes.map((note) => {
          return (
            <div className="col-sm-4" key={note._id}>
              <NoteItem
                note={note}
                handleDeleteClicked={handleDeleteClicked}
                handleEditClicked={handleUpdateClicked}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
