import { Controller } from '../controler/Controller';
import { CounterTable } from '../counterTable/CounterTable';
type CounterType = {
    count: number
    maxCount: number
    setCount: (value: number) => void
    setMaxCount: (value: number) => void
};
export const Counter = ({ count, maxCount, setCount, setMaxCount }: CounterType) => {
    return (
        <div className='counter'>
            <CounterTable count={count} maxCount={maxCount} />
            <Controller
                count={count}
                setCount={setCount}
                maxCount={maxCount}
                setMaxCount={setMaxCount} />
        </div>
    );
};