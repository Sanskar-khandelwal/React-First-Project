// import logo from './logo.svg';
import './App.css';
import logo from './logo.svg';
import img from './logo512.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {img} className="App-logo" alt="logo" />
         <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
