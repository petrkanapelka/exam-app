import { useRef, useEffect } from "react";
import { Button } from "../button/Button";

type Props = {
    count: number
    maxNumber: number
    setCount: (value: number) => void
    setMaxNumber: (value: number) => void
};

export const Controller = ({ setCount, count, maxNumber, setMaxNumber }: Props) => {

    const increment = 1

    const resetValue = 0

    const maxRandomNumber = 10

    let isIncButtonDisabled = count >= maxNumber

    let isResetButtonDisabled = count <= resetValue

    const prevCountRef = useRef<number>(count);

    const getRandomNumber = () => {
        return Math.floor(Math.random() * maxRandomNumber) + increment;
    }

    const incHandler = () => {
        const newCount = count + increment;
        setCount(newCount <= maxNumber ? newCount : count);
    }


    const resetHandler = () => {
        setCount(resetValue);
        setMaxNumber(getRandomNumber());
    }

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);


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
            <div className="prev">Previous count: {prevCountRef.current}</div>
        </>
    );
};
