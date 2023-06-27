import React from "react";
import { useContext } from "react";
import notesContext from "../Context/Notes/NotesContext";
import NoteItem from "./NoteItem";

function Notes() {
  const context = useContext(notesContext);
  const { notes, setNotes } = context;

  return (
    <div>
      <h1>Your Notes</h1>
      <i class="fa-solid fa-file-circle-plus fa-xl mx-1 mb-5 mt-3"></i>
      <div className="row">
        {notes.map((note) => {
          return (
            <div className="col-sm" key={note._id}>
              <NoteItem note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
