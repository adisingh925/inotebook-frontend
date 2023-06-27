import React from "react";
import Notes from "./Notes";
import AddNotes from "./AddNotes";

function Home() {
  return (
    <div>
      <div className="container my-3">
        <Notes />
        {/* <div className="row">
          <div className="col-7 my-3">
            <AddNotes />
          </div>
          <div className="col my-3">
            <div className="App">
              <div className="vr" style={{ height: "500px" }}></div>
            </div>
          </div>
          <div className="col-4 my-3">
            <Notes />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
