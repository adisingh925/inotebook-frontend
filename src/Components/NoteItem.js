import React from "react";
import Fab from "@mui/material/Fab";
import TextTruncate from "react-text-truncate"; // recommend
import { Link } from "react-router-dom";

function NoteItem(props) {
  return (
    <>
      <div className="card mt-4 shadow">
        <div className="card-body">
          <span className="badge rounded-pill text-bg-primary">
            {props.note.tag}
          </span>
          <h5 className="card-title my-2">{props.note.title}</h5>
          <p className="card-text">
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={props.note.description}
              textTruncateChild={<Link to={`/readnote?id=${props.note._id}`}>Read on</Link>}
            />
          </p>
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
    </>
  );
}

export default NoteItem;
