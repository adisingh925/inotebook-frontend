import { React, useEffect, useContext } from "react";
import globalContext from "../Context/GlobalContext";

function ReadNote(props) {
  const context = useContext(globalContext);
  const { note, getNote } = context;

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    console.log(id);
    getNote(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card my-3">
      <div className="card-body">
        <span className="badge rounded-pill text-bg-primary">
          {note.tag}
        </span>
        <h5 className="card-title my-3">{note.title}</h5>

        <p className="card-text">{note.description}</p>
      </div>
    </div>
  );
}

export default ReadNote;
