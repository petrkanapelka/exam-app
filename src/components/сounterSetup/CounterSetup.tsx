import { ChangeEvent, MouseEvent, useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

type CounterSetupType = {
    count: number;
    minCount: number;
    maxCount: number;
    setCount: (value: number) => void;
    setMaxCount: (value: number) => void;
    setMinCount: (value: number) => void;
    inputActive: boolean;
    setInputActive: (value: boolean) => void;
    setErrorInput: (value: boolean) => void;
    errorInput: boolean
};

export const CounterSetup = (props: CounterSetupType) => {
    let [min, setMin] = useState(props.minCount);
    let [max, setMax] = useState(props.maxCount);

    const onChangeMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMin = +e.currentTarget.value;
        setMin(newMin);
        props.setInputActive(true);
        const isCorrectInput = (max > newMin) && (max > 0) && (newMin >= 0);
        props.setErrorInput(!isCorrectInput);
    };

    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMax = +e.currentTarget.value;
        setMax(newMax);
        props.setInputActive(true);
        const isCorrectInput = (newMax > min) && (newMax > 0) && (min >= 0);
        props.setErrorInput(!isCorrectInput);
    };

    const submitButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.setMinCount(min);
        props.setMaxCount(max);
        props.setCount(min);
        props.setInputActive(false);
    };

    const onFocusHandler = () => {
        props.setInputActive(true);
    };

    return (
        <form className='counter'>
            <div className={`table table-setting`}>
                {props.errorInput && <div className="error-message">incorrect input</div>}
                <Input
                    className={props.errorInput ? 'error-input' : ''}
                    labelText="max value:"
                    type='number'
                    placeholder={`${props.maxCount}`}
                    onChange={onChangeMaxCountHandler}
                    value={max}
                    onFocus={onFocusHandler}
                />
                <Input
                    className={props.errorInput ? 'error-input' : ''}
                    labelText="min value:"
                    type='number'
                    placeholder={`${props.minCount}`}
                    onChange={onChangeMinCountHandler}
                    value={min}
                    onFocus={onFocusHandler}
                />
            </div>
            <Button
                type='submit'
                title="set"
                onClick={submitButtonHandler}
                disable={props.errorInput}
                className={props.errorInput ? 'disabled' : ''}
            />
        </form>
    );
};
