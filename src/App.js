import './App.css';
import MyClassClickCounter from './components/part16/MyClassClickCounter';
import MyClassMouseOverCounter from './components/part16/MyClassMouseOverCounter';
import MyFunctionalClickCounter from './components/part16/MyFunctionalClickCounter';
import MyFunctionalMouseOverCounter from './components/part16/MyFunctionalMouseOverCounter';

function App() {
  return (
    <div className="App">
      <MyClassClickCounter/>
      <hr/>
      <MyClassMouseOverCounter/>
      <hr/>
      <MyFunctionalClickCounter/>
      <hr/>
      <MyFunctionalMouseOverCounter/>
    </div>
  );
}

export default App;
