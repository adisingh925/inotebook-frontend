import React, { useState } from "react";
import { useContext } from "react";
import notesContext from "../Context/Notes/NotesContext";
import NoteItem from "./NoteItem";
import AddNotes from "./AddNotes";
import Button from "@mui/material/Button";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SnackBar from "./SnackBar";

function Notes() {
  const context = useContext(notesContext);
  const { notes, setNotes, addNote } = context;

  // --> update and delete button functions

  const handleDeleteClicked = () => {};

  const handleUpdateClicked = () => {};

  // --> add/update dialog states and functions

  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogTitleContent, setDialogTitleContent] = useState("");
  const [positiveButtonText, setPositiveButtonText] = useState("");
  const [note, setNote] = useState({title : "",tag : "", description : ""})

  const handleAddClicked = () => {
    setPositiveButtonText("Save");
    setDialogTitle("Add New Note");
    setDialogTitleContent("Add the title and description for your note");
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleNegativeButtonClick = () => {
    setSnackbarState(true)
    setOpen(false);
  };

  const handlePositiveButtonClick = () => {
    addNote(note)
    setOpen(false);
  };

  const onNoteChange = (event) =>{
    setNote({...note, [event.target.name] : event.target.value})
  }

  // -->snackbar related functions

  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarText, setSnackbarText] = useState("Success");
  const [snackbarHideDuration, setSnackbarHideDuration] = useState(2000);
  const [severity, setSeverity] = useState("success")

  const handleSnackBarClose = () => {
    setSnackbarState(false);
  };

  return (
    <div>
      <SnackBar
        message={snackbarText}
        handleClose={handleSnackBarClose}
        state={snackbarState}
        hideDuration={snackbarHideDuration}
        severity={severity}
      />

      <AddNotes
        dialogState={open}
        handleClose={handleDialogClose}
        dialogTitle={dialogTitle}
        dialogTitleContent={dialogTitleContent}
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
