import { useState } from 'react';

export default function MyFunctionalClickCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
        Functional Counter : {count} <br/>
        <button onClick={handleIncrement}>Increment</button>        
    </div>
    
  );
}
