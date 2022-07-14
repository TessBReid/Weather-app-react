import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer>
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
  );
}

export default App;
