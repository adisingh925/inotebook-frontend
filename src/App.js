import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
