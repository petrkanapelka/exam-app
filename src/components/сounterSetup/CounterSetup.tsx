import React, { ChangeEvent, MouseEvent } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../modules/store/store";
import { resetCountAC, setInputActiveAC, setInputErrorAC, setMaxCountAC, setMinCountAC } from "../modules/reducer/reducer";
import { selectInputIsActive, selectInputIsError, selectMaxCount, selectMinCount } from "../modules/selectors/selectors";


export const CounterSetup = React.memo(() => {

    const maxCount = useSelector(selectMaxCount);
    const minCount = useSelector(selectMinCount);
    const inputIsActive = useSelector(selectInputIsActive);
    const inputIsError = useSelector(selectInputIsError);

    const dispatch: AppDispatch = useDispatch();

    const initializeCounterSetup = () => {
        dispatch(resetCountAC())
        dispatch(setInputActiveAC(true))
        dispatch(setInputErrorAC())
    }

    const onChangeMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinCountAC(+e.currentTarget.value))
        initializeCounterSetup()
    };

    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxCountAC(+e.currentTarget.value))
        initializeCounterSetup()
    };

    const submitButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setInputActiveAC(false))
    };

    const onFocusHandler = () => {
        dispatch(setInputActiveAC(true))
        dispatch(resetCountAC())
    };

    return (
        <form className='counter'>
            <div className={`table table-setting`}>
                {inputIsError && <div className="error-message">incorrect input</div>}
                <Input
                    className={inputIsError ? 'error-input' : ''}
                    labelText="max value:"
                    type='number'
                    placeholder={`${maxCount}`}
                    onChange={onChangeMaxCountHandler}
                    value={maxCount}
                    onFocus={onFocusHandler}
                />
                <Input
                    className={inputIsError ? 'error-input' : ''}
                    labelText="min value:"
                    type='number'
                    placeholder={`${minCount}`}
                    onChange={onChangeMinCountHandler}
                    value={minCount}
                    onFocus={onFocusHandler}
                />
            </div>
            <Button
                type='submit'
                title="set"
                onClick={submitButtonHandler}
                disable={inputIsError || !inputIsActive}
                className={inputIsError || !inputIsActive ? 'disabled' : ''}
            />
        </form>
    );
});
