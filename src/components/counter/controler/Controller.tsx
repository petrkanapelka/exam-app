import { Button } from "../../button/Button";
import { store } from "../../modules/store/Store";

type ControllerType = {
    count: number
    minCount: number
    maxCount: number
    setCount: (value: number) => void
    setMaxCount: (value: number) => void
};

export const Controller = ({ setCount, count, maxCount, setMaxCount, minCount }: ControllerType) => {

    const increment = 1

    let isIncButtonDisabled = count >= maxCount

    let isResetButtonDisabled = count <= minCount


    const incHandler = () => {
        const newCount = count + increment;
        setCount(newCount <= maxCount ? newCount : count);
    }


    const resetHandler = () => {
        setCount(minCount);
        store.dispatch({ type: 'count/reset' })
    }

    return (
        <>
            <div className="controller">
                <Button
                    title="inc"
                    onClick={incHandler}
                    disable={isIncButtonDisabled}
                    className={isIncButtonDisabled ? 'disabled' : ''} />
                <Button
                    title="reset"
                    onClick={resetHandler}
                    className={isResetButtonDisabled ? 'disabled' : ''}
                    disable={isResetButtonDisabled} />
            </div>
        </>
    );
};
