import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {

  let message1 = "Physics is the universe’s operating system."
  let message2 = "Imagination is more important than knowledge.  For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution"
  let message3 = "Where is the ‘any’ key? \n Homer Simpson"
  const [content, setContent] = useState([message1, message2, message3]);
  const [idx, setIdx] = useState(0);
  const handleClick = (e, id) => {
    setIdx(id);
  }
  return (
    <div className="App m-4">
          <button className="m-2 btn-outline-success" onClick={e => handleClick(e, 0)}>tab 1</button>
          <button className="m-2 btn-outline-success" onClick={e => handleClick(e, 1)}>tab 2</button>
          <button className="m-2 btn-outline-success" onClick={e => handleClick(e, 2)}>tab 3</button>
        <p>{content[idx]}</p>
    </div>
  );
}

export default App;
