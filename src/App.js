import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
        <footer className="App-footer">
          <a
            href="https://github.com/TessBReid/Weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source Code
          </a>{" "}
          by Tessa Bailey-Reid
        </footer>
      </div>
    </div>
  );
}

export default App;
