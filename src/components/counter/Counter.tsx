import { Controller } from './controler/Controller';
import { CounterTable } from './counterTable/CounterTable';
type CounterType = {
    count: number
    minCount: number
    maxCount: number
    setCount: (value: number) => void
    setMaxCount: (value: number) => void
    setMinCount: (value: number) => void
    inputActive: boolean
};
export const Counter = ({ count, maxCount, setCount, setMaxCount, minCount, setMinCount, inputActive }: CounterType) => {
    return (
        <div className='counter'>
            <CounterTable
                count={count}
                maxCount={maxCount}
                minCount={minCount}
                inputActive={inputActive}
            />
            <Controller
                count={count}
                setCount={setCount}
                minCount={minCount}
                maxCount={maxCount}
                setMaxCount={setMaxCount}
            />
        </div>
    );
};