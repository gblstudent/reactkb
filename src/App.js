import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import MyFunctionalComponent from './components/MyFunctionalComponent';
import MyFunctionalComponent2 from './components/MyFunctionalComponent2';
import MyFunctionalComponent3 from './components/MyFunctionalComponent3';
import { Component1, Component2 } from './components/MyComponent';

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
      <hr/>
      <Component1 name1={'Hello'} name2={'World'} />
      <Component1 name1={'React'} name2={'Js'} />
      <hr/>
      <Component2 name1={'Nice'} name2={'Program'} />
    </div>
  );
}

export default App;
