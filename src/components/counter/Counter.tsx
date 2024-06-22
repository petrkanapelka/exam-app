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
    errorInput: boolean
};
export const Counter = ({
    count,
    maxCount,
    setCount,
    setMaxCount,
    minCount,
    setMinCount,
    inputActive,
    errorInput
 }: CounterType) => {
    return (
        <div className='counter'>
            <CounterTable
                count={count}
                maxCount={maxCount}
                minCount={minCount}
                inputActive={inputActive}
                errorInput={errorInput}
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