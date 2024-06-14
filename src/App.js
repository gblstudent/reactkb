import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import MyFunctionalComponent from './components/MyFunctionalComponent';
import MyFunctionalComponent2 from './components/MyFunctionalComponent2';
import MyFunctionalComponent3 from './components/MyFunctionalComponent3';

function App() {
  return (
    <div className="App">
      I am parent Content
      <hr/>
      <MyClassComponent/>
      <hr/>
      <MyFunctionalComponent/>
      <hr/>
      <MyFunctionalComponent2/>
      <hr/>
      <MyFunctionalComponent3/>
    </div>
  );
}

export default App;
