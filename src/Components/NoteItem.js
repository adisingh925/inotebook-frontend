import React from "react";

function NoteItem(props) {
  const { note } = props;

  return (
    <div className="card mb-4">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <i className="fa-solid fa-trash"></i>
        <i className="fa-solid fa-pen-to-square mx-3"></i>
      </div>
    </div>
  );
}

export default NoteItem;
