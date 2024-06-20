import './App.css';
import { useState } from 'react';
import { Counter } from './components/counter/Counter';

function App() {

  let [count, setCount] = useState(0);

  let [maxCount, setMaxCount] = useState(5)

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} maxCount={maxCount} setMaxCount={setMaxCount}/>
    </div>
  );
}

export default App;
