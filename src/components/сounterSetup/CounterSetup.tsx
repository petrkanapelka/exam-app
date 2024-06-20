import { ChangeEvent, MouseEvent, useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

type CounterSetupType = {
    count: number
    minCount: number
    maxCount: number
    setCount: (value: number) => void
    setMaxCount: (value: number) => void
    setMinCount: (value: number) => void
    inputActive: boolean
    setInputActive: (value: boolean) => void
};

export const CounterSetup = (props: CounterSetupType) => {

    let [min, setMin] = useState(props.minCount);
    let [max, setMax] = useState(props.maxCount);

    let isCorrectInput = (max > min) && (max > 0) && (min >= 0)

    const onChangeMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(+e.currentTarget.value);
        props.setInputActive(true)
    }

    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value);
        props.setInputActive(true)
    }

    const submitButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        props.setMinCount(min)
        props.setMaxCount(max)
        props.setCount(min)
        props.setInputActive(false)
    }

    return (
        <form className='counter'>
            <div className={`table table-setting`}>
                {!isCorrectInput && <div className="error-message">incorrect input</div>}
                <Input
                    className={!isCorrectInput ? 'error-input' : ''}
                    labelText="max value:"
                    type='number'
                    placeholder={`${props.maxCount}`}
                    onChange={onChangeMaxCountHandler}
                    value={max}
                />
                <Input
                    className={!isCorrectInput ? 'error-input' : ''}
                    labelText="min value:"
                    type='number'
                    placeholder={`${props.minCount}`}
                    onChange={onChangeMinCountHandler}
                    value={min}
                />
            </div>
            <Button
                type='submit'
                title="set"
                onClick={submitButtonHandler}
                disable={!isCorrectInput}
                className={!isCorrectInput ? 'disabled' : ''}
            />
        </form>
    );
};