import { useEffect, useState } from 'react';

export default function MyFunctionalCounter2({setObj1}) {
  const [count, setCount] = useState(0);

  const handleDecrement =() =>{
    setCount(count - 1);
  }

  useEffect(() => {
    setObj1(count);
  });

  return (
    <div>
        Child Counter : {count} <br/>
        <button onClick={() => setCount(count + 1) }>Increment</button>        
        <button onClick={handleDecrement} disabled={count === 0} >Decrement</button>        
        <button onClick={() => setCount(0) } disabled={count === 0} >Reset</button>        
    </div>    
  );
}
