import { useState } from 'react';

export default function MyFunctionalCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div>
        Counter : {count} <br/>
        <button onClick={handleIncrement}>Increment</button>        
        <button onClick={handleDecrement} disabled={count === 0} >Decrement</button>        
        <button onClick={handleReset} disabled={count === 0} >Reset</button>        
    </div>
    
  );
}
