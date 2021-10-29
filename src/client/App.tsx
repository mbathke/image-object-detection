import React, { useState, useEffect } from 'react';
import './App.css';
import Album from './Album';

function App() {
  // const [serverResult, setServerResult] = useState(null);
  // useEffect(() => {
    // (async () => {
      // const result = await fetch("/ping");
      // const newServerResult = await result.json();
      // setServerResult(newServerResult);
    // })();
  // }, []);
  return (
    <div className="App">
      <Album/>
    </div>
  );
}

export default App;
