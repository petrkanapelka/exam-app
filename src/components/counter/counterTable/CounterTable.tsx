type CountertableType = {
    count: number
    maxCount: number
    minCount: number
    inputActive: boolean
};
export const CounterTable = ({ count, minCount, maxCount, inputActive }: CountertableType) => {

    const fullWidth = 100;

    return (
        <div className="table-container">
            <div className={`table ${count === maxCount ? 'max' : ''}`}>
                {!inputActive ?
                    count :
                    <span>Press set button</span>}
            </div>
            <div className="line" style={{ width: `${(count - minCount) * (fullWidth / (maxCount - minCount))}%` }}></div>
        </div>
    );
};