import './App.css';
import Calculator from './components/calculator.js';
import NumberProvider from './components/numberProvider.js';

function App() {
  return (
    <div className="App">
      <NumberProvider>
        <Calculator/>
      </NumberProvider>
    </div>
  );
}

export default App;
