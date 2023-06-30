import "./App.css";
import NavBar from "./Components/NavBar";
import GlobalState from "./Context/GlobalState";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <GlobalState>
        <NavBar heading={"iNotebook"} />
        <div className="container">
          <Main />
        </div>
      </GlobalState>
    </>
  );
}

export default App;
