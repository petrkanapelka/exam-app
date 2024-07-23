import './App.css';
import { Counter } from './components/counter/Counter';
import { CounterSetup } from './components/сounterSetup/CounterSetup';

function App() {
  return (
    <div className="App">
      <CounterSetup />
      <Counter />
    </div>
  );
}

export default App;
