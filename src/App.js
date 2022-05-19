import "./app.scss";
import Main from "./components/Main";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Main />
      </div>
    </div>
  );
}

export default App;
