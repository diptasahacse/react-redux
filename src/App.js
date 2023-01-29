import './App.css';
import LargeFormWithReducer from './components/LargeFormWithReducer';
import SimpleCounterWithUseReducer from './components/SimpleCounterWithUseReducer';


function App() {
  return (
    <div className="container">
      {/* <SimpleCounterWithUseReducer/> */}
      <LargeFormWithReducer />
   
    </div>
  );
}

export default App;
