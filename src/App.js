import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import GlobalState from "./Context/GlobalState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <GlobalState>
        <NavBar heading={"iNotebook"} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </GlobalState>
    </>
  );
}

export default App;
