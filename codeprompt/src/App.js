import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">CodePrompt</h1>
        <p>
          Welcome to the CodePrompt App! Join us live on Twitch as we code together.
        </p>
        <p>
          Edit <code>src/App.js</code> and watch the changes live during our stream.
        </p>
        <a
          className="App-link"
          href="https://twitch.tv/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch us on Twitch
        </a>
        <p>
          Let's build something amazing together! 🚀
        </p>
      </header>
    </div>
  );
}

export default App;
