import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the CodePrompt App! Your journey into React starts here.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to see your changes instantly.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore React Documentation
        </a>
        <p>
          Happy coding! 🚀
        </p>
      </header>
    </div>
  );
}

export default App;
