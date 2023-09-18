
import React, { useState } from 'react';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {setIsVisible(!isVisible);
  }

  
  return (
    <div className="App">
      
      <h1>My App</h1>
      <button onClick={toggleVisibility}>Click Me</button>
      <p style={{display: isVisible ? 'block' : 'none',color: 'red'}}>this is the event!!! </p>
    
    
    </div>
      
  
  );
}

export default App;
