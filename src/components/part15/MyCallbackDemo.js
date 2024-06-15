import { useState } from 'react';
import MyCallbackChild from './MyCallbackChild';

function MyCallbackDemo() {
  const [todos, setTodos] = useState("You have to work hard");
  const [toggle1, setToggle1] = useState(false);
  
  const returnTodo = () => {
    return todos;
  }
  
  return (
    <div>
        <button onClick={ () => {setToggle1(!toggle1)}} > Toggle1 </button>
        <div>{toggle1 && <div>Toggle 1</div> }</div>
        <hr/>
        <MyCallbackChild returnComment={returnTodo}/>
    </div>    

  );
}
export default MyCallbackDemo;