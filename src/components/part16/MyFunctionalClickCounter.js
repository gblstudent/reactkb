import { useState } from 'react';

function MyFunctionalClickCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement =()=> {
    setCount(count + 1);
  };

  return (
    <div>
        Functional Counter : {count} <br/>
        <button onClick={handleIncrement}>Increment</button>        
    </div>
    
  );
}

export default MyFunctionalClickCounter;