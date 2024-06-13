type Props = {
    count: number
    maxNumber: number
};
export const Table = ({ count, maxNumber }: Props) => {

    const fullWidth = 100;

    return (
        <>
            <div className={`table ${count === maxNumber ? 'max' : ''}`}>{count}</div>
            <div className="line" style={{ width: `${count * (fullWidth / maxNumber)}%` }}></div>
        </>
    );
};