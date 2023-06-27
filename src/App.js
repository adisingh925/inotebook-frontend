import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import NoteState from "./Context/Notes/NotesState";

function App() {
  return (
    <>
      <NavBar heading={"iNotebook"} />
      <div className="container">
        <NoteState>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </NoteState>
      </div>
    </>
  );
}

export default App;
