import './App.css';
import { useState } from 'react';
import { Controller } from './components/controler/Controller';
import { Table } from './components/table/Table';
import { MaxNumberField } from './components/MaxNumber';

function App() {

  let [count, setCount] = useState(0);

  let [maxNumber, setMaxNumber] = useState(5)

  return (
    <div className="App">
      <Table count={count} maxNumber={maxNumber} />
      <MaxNumberField maxNumber={maxNumber} />
      <Controller
        count={count}
        setCount={setCount}
        maxNumber={maxNumber}
        setMaxNumber={setMaxNumber} />
    </div>
  );
}

export default App;
