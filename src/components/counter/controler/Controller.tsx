import { Button } from "../../button/Button";

type ControllerType = {
    count: number
    minCount: number
    maxCount: number
    setCount: (value: number) => void
    setMaxCount: (value: number) => void
};

export const Controller = ({ setCount, count, maxCount, setMaxCount, minCount }: ControllerType) => {


    // const resetValue = 0

    // const maxRandomNumber = 10

    // const getRandomNumber = () => {
    //     return Math.floor(Math.random() * maxRandomNumber) + increment;
    // }

    const increment = 1

    let isIncButtonDisabled = count >= maxCount

    let isResetButtonDisabled = count <= minCount


    const incHandler = () => {
        const newCount = count + increment;
        setCount(newCount <= maxCount ? newCount : count);
    }


    const resetHandler = () => {
        setCount(minCount);
        // setMaxCount(getRandomNumber());
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
