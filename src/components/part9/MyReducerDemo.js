import { useReducer } from 'react';

const myType = {
    INCREMENT : "INCREMENT",
    TOGGLEODD : "TOGGLEODD"
}

const myreducerfun = (state, action) => {
    switch(action.type){
        case "INCREMENT" :
            return { count : state.count +1 , showOdd : state.showOdd}
        case "TOGGLEODD" :
            return { count : state.count , showOdd : !state.showOdd}
        default:
            return state;
    }
};

export default function MyReducerDemo() {
  const [state, dispatch] = useReducer(myreducerfun , 
    {
        count : 1,
        showOdd : true
    });

  function handleIncrement() {
    dispatch({type : myType.INCREMENT});
    dispatch({type : myType.TOGGLEODD});
  } 

  return (
    <div>
        Reducer Counter : {state.count} <br/>
        <button onClick={handleIncrement}>Increment</button>
        {state.showOdd && <div>This is Odd Number </div>}      
    </div>
    
  );
}
