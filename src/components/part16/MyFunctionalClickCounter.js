import UpdatedComponent from './withCounterFun';

function MyFunctionalClickCounter({count,handleIncrement}) {
  return (
    <div>
        Functional Counter : {count} <br/>
        <button onClick={handleIncrement}>Increment</button>        
    </div>
    
  );
}

export default UpdatedComponent(MyFunctionalClickCounter);