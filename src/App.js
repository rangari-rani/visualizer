import React from 'react';
import './App.css';
import SortingVisualizer from './components/SortingVisualizer';

function App() {
  return (
    <div className="App">
      <SortingVisualizer />

      <footer className="footer">
        <p>Built by Rani Rangari • MCA Project • 2022</p>
        <p>
          <a href="https://github.com/rangari-rani/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/rani-rangari/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
