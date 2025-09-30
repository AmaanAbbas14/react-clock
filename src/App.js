import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [name, setName] = useState("");

  // Application of setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setName("Amaan");
    }, 2000);
    return () => clearTimeout();
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        My First React Project
        <Dashboard name={name}/>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;

// Programming Question

// 1. Create a debounced search/suggestion
// 2. Create a to-do list
// 3. Create a progress bar
// 4. Create a counter
// 5. Clock

// JS
// 1. JS Memory - Stack, Queue(Micro, Macro)
// 2. Hoisting - var
// 3. Closure 
// 4. How to club promise

// HTML
// 1. Doctype
// 2. HTML 5 - Page Model
// 3. Video, Audio, Web Worker, Web Socket

// CSS
// 1. Box Model - box-sizing
// 2. Flex - alignItem, justifyContent/Grid
// 3. display, position, transition/transform
// 4. css functions

