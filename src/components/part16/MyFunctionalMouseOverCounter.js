import { useState } from 'react';

function MyFunctionalMouseOverCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement =()=> {
    setCount(count + 1);
  };

  return (
    <div>
        Functional Counter : {count} <br/>
        <h2 onMouseOver={handleIncrement}>React Function - Mouse Over on this space</h2>     
    </div>
    
  );
}

export default MyFunctionalMouseOverCounter;