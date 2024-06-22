import './App.css';
import { useState } from 'react';
import { Counter } from './components/counter/Counter';
import { CounterSetup } from './components/сounterSetup/CounterSetup';

function App() {

  const initialMinCount = Number(localStorage.getItem('minCount')) || 0;
  const initialMaxCount = Number(localStorage.getItem('maxCount')) || 5;
  const initialCount = Number(localStorage.getItem('count')) || initialMinCount;

  let [minCount, setMinCount] = useState(initialMinCount);
  let [maxCount, setMaxCount] = useState(initialMaxCount);
  let [count, setCount] = useState(initialCount);
  let [inputActive, setInputActive] = useState(false);
  let [errorInput, setErrorInput] = useState(false);

  return (
    <div className="App">
      <CounterSetup
        count={count}
        setCount={setCount}
        minCount={minCount}
        setMinCount={setMinCount}
        maxCount={maxCount}
        setMaxCount={setMaxCount}
        inputActive={inputActive}
        setInputActive={setInputActive}
        setErrorInput={setErrorInput}
        errorInput={errorInput}
      />
      <Counter
        count={count}
        setCount={setCount}
        minCount={minCount}
        setMinCount={setMinCount}
        maxCount={maxCount}
        setMaxCount={setMaxCount}
        inputActive={inputActive}
        errorInput={errorInput}
      />
    </div>
  );
}

export default App;
