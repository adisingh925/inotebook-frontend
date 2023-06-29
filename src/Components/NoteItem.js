import React from "react";

function NoteItem(props) {
  return (
    <div className="card mt-4">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{props.note.title}</h5>
        <p className="card-text">{props.note.description}</p>
        <i
          className="fa-solid fa-trash"
          onClick={props.handleDeleteClicked}
        ></i>
        <i
          className="fa-solid fa-pen-to-square mx-3"
          onClick={props.handleEditClicked}
        ></i>
      </div>
    </div>
  );
}

export default NoteItem;
