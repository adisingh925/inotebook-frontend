import React from "react";
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";

function NoteItem(props) {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="row row-cols-auto">
          <h5 className="card-title">{props.note.title}</h5>
          <Chip label={props.note.tag} size="small" color="success" />
        </div>
        <p className="card-text">{props.note.description}</p>
        <Fab
          size="small"
          onClick={() => {
            props.handleDeleteClicked(props.note._id);
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
  );
}

export default NoteItem;
