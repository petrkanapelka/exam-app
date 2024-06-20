import { Button } from "../button/Button";

type Props = {
    count: number
    maxCount: number
    setCount: (value: number) => void
    setMaxCount: (value: number) => void
};

export const Controller = ({ setCount, count, maxCount, setMaxCount }: Props) => {

    const increment = 1

    const resetValue = 0

    const maxRandomNumber = 10

    let isIncButtonDisabled = count >= maxCount

    let isResetButtonDisabled = count <= resetValue

    const getRandomNumber = () => {
        return Math.floor(Math.random() * maxRandomNumber) + increment;
    }

    const incHandler = () => {
        const newCount = count + increment;
        setCount(newCount <= maxCount ? newCount : count);
    }


    const resetHandler = () => {
        setCount(resetValue);
        setMaxCount(getRandomNumber());
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
