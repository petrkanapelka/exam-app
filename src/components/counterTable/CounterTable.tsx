import { MaxCount } from "../MaxCount";

type Props = {
    count: number
    maxCount: number
};
export const CounterTable = ({ count, maxCount }: Props) => {

    const fullWidth = 100;

    return (
        <>
            <div className={`table ${count === maxCount ? 'max' : ''}`}>{count}</div>
            <div className="line" style={{ width: `${count * (fullWidth / maxCount)}%` }}></div>
            <MaxCount maxCount={maxCount} />
        </>
    );
};