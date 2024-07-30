import { useState } from 'react';
import UpdatedComponent from './withCounterFun';

function MyFunctionalMouseOverCounter({count,handleIncrement}) {
  
  return (
    <div>
        Functional Counter : {count} <br/>
        <h2 onMouseOver={handleIncrement}>React Function - Mouse Over on this space</h2>     
    </div>
    
  );
}
export default UpdatedComponent(MyFunctionalMouseOverCounter);