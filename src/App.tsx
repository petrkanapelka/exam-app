import './App.css';
import { useState } from 'react';
import { Counter } from './components/counter/Counter';
import { CounterSetup } from './components/сounterSetup/CounterSetup';

function App() {

  let [minCount, setMinCount] = useState(0)

  let [maxCount, setMaxCount] = useState(5)

  let [count, setCount] = useState(minCount);

  let [inputActive, setInputActive] = useState(false)



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
      />
      <Counter
        count={count}
        setCount={setCount}
        minCount={minCount}
        setMinCount={setMinCount}
        maxCount={maxCount}
        setMaxCount={setMaxCount}
        inputActive={inputActive}
      />
    </div>
  );
}

export default App;
