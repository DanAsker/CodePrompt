import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">CodePrompt</div>
        <h1>Welcome to CodePrompt</h1>
        <p>
          CodePrompt is a collaborative Twitch coding bot. Use <code>!prompt</code> to code interactively with others.
        </p>
        <a
          className="App-link"
          href="https://www.twitch.tv/CodePrompt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our Twitch Channel
        </a>
      </header>
      <main>
        <section className="App-features">
          <h2>Features</h2>
          <ul>
            <li>Collaborative coding with Twitch chat integration.</li>
            <li>Interactive prompts for real-time coding challenges.</li>
            <li>Seamless integration with popular coding tools.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
