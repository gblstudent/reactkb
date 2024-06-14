import { useEffect, useState } from 'react';

export default function MyFunctionalApi() {
  const [todos, setTodos] = useState([]);

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
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div>
        <h2>List of Todo Items by Functional Component</h2>      
        <ul>
            {todos.map((each) => (
                <li key={each.id}> {each.title} </li>
            ) )}
        </ul>
    </div>    
  );
}
