import './App.css';
import Calculator from './components/calculator.js';
import NumberProvider from './components/numberProvider.js';

function App() {
  return (
    <div className="App">
    //Number provider component contains all the functions that the calculator needs
      <NumberProvider>
      //Calculator defines the layout
        <Calculator/>
      </NumberProvider>
    </div>
  );
}

export default App;
