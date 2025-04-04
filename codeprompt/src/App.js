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
        <h1>Welcome to CodePrompt</h1>
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
            src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitch_Logo_2019.svg"
            alt="Twitch Logo"
            className="Twitch-logo"
          />
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
