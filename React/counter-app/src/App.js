import React, { useState } from 'react'
import './App.css';

function App() {
  // State variable to hold the counter value
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount1(count1 + 1);
  };
      
  // Function to decrement the counter
  const decrement = () => {
    setCount1(count1 - 1);
  };

  // Function to reset the counter
  const reset = () => {
    setCount1(0); 
  };

  // Function to increment the counter by 5
  const incrementByFive = () =>{
    setCount2(prev => prev +1); //prev stores previous value
    setCount2(prev => prev +1); //just keeping this method because the output is attainable through this way as well
    setCount2(prev => prev +1);
    setCount2(prev => prev +1);
    setCount2(prev => prev +1);
  };
  
  // Function to decrement the counter by 5
  const decrementByFive = () =>{
    setCount2(count2 - 5);
  };

  //Function to reset the counter
  const reset2=() =>{
    setCount2(0);
  }

  return (
      <div className="App" style={{display: 'flex', flexWrap:'wrap', gap:'1rem', alignItems:'center',justifyContent:'space-around'}}>
      <div className ="left">
      <h2>Counter by One</h2>
      <p>Count: {count1}</p>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>
      <button onClick={reset}>Reset</button>
      </div>

      <div className = "right">
      <h2>Counter by Five</h2>
      <p>Count : {count2}</p>
      <button onClick={incrementByFive}>Increment by 5</button>
      <button onClick={decrementByFive}>Decrement by 5</button>
      <button onClick={reset2}>Reset</button>
      </div>
    </div>
  );
}

export default App;