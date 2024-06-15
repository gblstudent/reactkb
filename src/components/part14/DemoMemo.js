import { useEffect, useState } from 'react';

function DemoMemo() {
  const [todos, setTodos] = useState(null);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const getData =() =>{
    var url ='https://jsonplaceholder.typicode.com/todos';
    fetch(url,{
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    }).then( function(response){
        return response.json();
    }).then(function(myjson){
        setTodos(myjson);
    });
    console.log("API CALLED");
  }

  useEffect(() => {
    getData();
  },[]);

  const actionUpdateToggle1 = () => {
    console.log("Toggle 1");
    setToggle1(!toggle1)
  }
  const actionUpdateToggle2 = () => {
    console.log("Toggle 2");
    setToggle2(!toggle2)
  }

  const internalComputeFindLongestTodoName = (allData) => {
    if(!allData)
        return null;

    let longestTodo = "";
    for(let i = 0 ; i < allData.length ; i++){
        let pTodo = allData[i].title;
        if(pTodo.length > longestTodo.length){
            longestTodo = pTodo;
        }
    }
    console.log("LONGEST NAME COMPUTED for " + allData.length);
    return longestTodo;
  }

  return (
    <div>
        <div>{internalComputeFindLongestTodoName(todos)}</div>
        <button onClick={ getData} > Refresh </button><br/><br/>
        <button onClick={ actionUpdateToggle1} > Toggle1 </button>
        <div>{toggle1 && <div>Toggle 1</div> }</div>
        <button onClick={ actionUpdateToggle2} > Toggle2 </button>
        <div>{toggle2 && <div>Toggle 2</div> }</div>
    </div>    

  );
}
export default DemoMemo;