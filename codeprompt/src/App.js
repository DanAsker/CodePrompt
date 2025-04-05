import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const features = document.querySelectorAll('.App-features li');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    features.forEach((feature) => observer.observe(feature));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">CodePrompt</div>
        <p>
          CodePrompt is a collaborative Twitch coding bot. Use <code>!prompt</code> to code interactively with others.
        </p>
        <a
          className="App-link App-cta"
          href="https://www.twitch.tv/CodePrompt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png"
            alt="Twitch Logo"
            className="Twitch-logo"
            style={{ animation: 'none' }} // Removed bouncing animation
          />
          Visit our Twitch Channel
        </a>
        <a
          className="App-link App-cta"
          href="https://github.com/DanAsker/CodePrompt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub Logo"
            className="GitHub-logo"
            style={{ width: '32px', height: '32px', backgroundColor: 'transparent', filter: 'invert(100%)' }} // White fill
          />
          Visit our GitHub Repository
        </a>
        <a
          className="App-link App-cta App-dominos"
          href="https://www.dominos.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="Pizza-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="32"
            height="32"
            style={{ marginRight: '8px' }}
          >
            <circle cx="32" cy="32" r="30" fill="#FFD700" />
            <path
              d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30 30-13.4 30-30S48.6 2 32 2zm0 56C17.4 58 6 46.6 6 32S17.4 6 32 6s26 11.4 26 26-11.4 26-26 26z"
              fill="#E31837"
            />
            <circle cx="22" cy="22" r="4" fill="#FFFFFF" />
            <circle cx="42" cy="22" r="4" fill="#FFFFFF" />
            <circle cx="32" cy="42" r="4" fill="#FFFFFF" />
          </svg>
          Order Domino's Pizza
        </a>
      </header>
      <style>
        {`
          .App-cta {
            margin-bottom: 16px;
            background-color: #007BFF; /* Suggested new color: Bootstrap primary blue */
            color: white;
            padding: 0.75em 1.5em; /* Consistent padding for both buttons */
            display: inline-flex;
            align-items: center; /* Align content vertically */
            gap: 0.5em; /* Add spacing between icon and text */
          }
        `}
      </style>
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
