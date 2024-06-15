import { useState } from 'react';

export default function MyReducerDemo() {
  const [count, setCount] = useState(1);
  const [showOdd, setShowOdd] = useState(true);

  function handleIncrement() {
    setCount(count + 1);
    setShowOdd(!showOdd);
  } 

  return (
    <div>
        Counter : {count} <br/>
        <button onClick={handleIncrement}>Increment</button>
        {showOdd && <div>This is Odd Number </div>}      
    </div>
    
  );
}
