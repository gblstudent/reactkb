import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import MyFunctionalComponent from './components/MyFunctionalComponent';

function App() {
  return (
    <div className="App">
      I am parent Content
      <hr/>
      <MyClassComponent/>
      <hr/>
      <MyFunctionalComponent/>
    </div>
  );
}

export default App;
