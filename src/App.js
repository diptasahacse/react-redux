import logo from './logo.svg';
import './App.css';
import LargeFormWithReducer from './components/LargeFormWithReducer';
import SimpleCounterWithUseReducer from './components/SimpleCounterWithUseReducer';

function App() {
  return (
    <div className="container text-center">
      <SimpleCounterWithUseReducer/>
      {/* <LargeFormWithReducer /> */}
    </div>
  );
}

export default App;
