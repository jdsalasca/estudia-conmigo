import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code> 
          <h1>empezando </h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entra y Aprende 
        </a>
      </header>
    </div>    
    </Fragment>
  );
}

export default App;
