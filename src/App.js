import './App.css';
import MyClassCounter from './components/part5/MyClassCounter';
import MyFunctionalCounter from './components/part5/MyFunctionalCounter';
import { useState } from 'react';
import MyFunctionalCounter2 from './components/part6/MyFunctionalCounter2';

function App() {
  const [parentValue1, setParentValue1] = useState();
  return (
    <div className="App" style={{backgroundColor : '#DFF562'}}>
      I am parent Content having parentValue1 : {parentValue1}
      <hr/>
      <MyClassCounter/>
      <MyFunctionalCounter/>
      <hr/>
      <MyFunctionalCounter2 setObj1={setParentValue1}/>
    </div>
  );
}

export default App;
