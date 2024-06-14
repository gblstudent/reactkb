
import MyClassApi from './components/part8/MyClassApi';
import MyFunctionalApi from './components/part8/MyFunctionalApi';

function App() {
  return (
    <div style={{display : 'flex' , flexWrap : 'wrap'}}>
      <div className="App" >
        <MyFunctionalApi/>
      </div>
      <div className="App">
        <MyClassApi/>
      </div>
    </div>
  );
}

export default App;
