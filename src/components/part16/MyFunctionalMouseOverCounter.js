import { useState } from 'react';

export default function MyFunctionalMouseOverCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
        Functional Counter : {count} <br/>
        <h2 onMouseOver={handleIncrement}>React Function - Mouse Over on this space</h2>     
    </div>
    
  );
}
