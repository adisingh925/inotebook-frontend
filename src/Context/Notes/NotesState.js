import React from "react";
import NotesContext from "./NotesContext";

const NoteState = (props) => {

  return (
    <NotesContext.Provider value={{}}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NoteState;
