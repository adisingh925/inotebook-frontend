import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Confirmation from "./Confirmation";

function NoteItem(props) {
  const [state, setState] = useState(false);

  const handleClose = () => {
    setState(false);
  };

  const handlePositiveClick = () => {
    props.handleDeleteClicked(props.note._id);
    setState(false)
  };

  return (
    <>
      <Confirmation
        state={state}
        handleClose={handleClose}
        positiveButton={"Delete"}
        negativeButton={"Cancel"}
        title={"Are you sure you want to delete this note"}
        handlePositiveClick={handlePositiveClick}
      />
      <div className="card mt-4">
        <div className="card-body">
          <span className="badge rounded-pill text-bg-primary">
            {props.note.tag}
          </span>
          <h5 className="card-title my-2">{props.note.title}</h5>
          <p className="card-text">{props.note.description}</p>
          <Fab
            size="small"
            onClick={() => {
              setState(true);
            }}
            color="primary"
            aria-label="add"
          >
            <i className="fa-solid fa-trash" />
          </Fab>

          <Fab
            size="small"
            color="primary"
            onClick={() => {
              props.handleEditClicked(props.note);
            }}
            aria-label="add"
            style={{ marginLeft: "10px" }}
          >
            <i className="fa-solid fa-pen-to-square mx-3" />
          </Fab>
        </div>
      </div>
    </>
  );
}

export default NoteItem;
