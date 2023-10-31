import logo from './logo.svg';
import './App.css';
import UseState from './component/usestate/UseState';
import UseEffect from './component/useeffect/UseEffect';
import UseContext from './component/usecontext/UseContext';
import UseReducer from './component/usereducer/UseReducer';
import UseRef from './component/useref/UseRef';
import UseLayout from './component/uselayout/UseLayout';

function App() {
  return (
    <div className="App">
      <UseLayout/>
      
      {/* <UseRef/> */}
      {/* <UseReducer /> */}
      {/* <UseContext/> */}
    </div>
  );
}

export default App;
