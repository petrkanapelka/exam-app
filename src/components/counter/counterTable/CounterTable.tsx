type CountertableType = {
    count: number
    maxCount: number
    minCount: number
    inputActive: boolean
    errorInput: boolean
};
export const CounterTable = ({ count, minCount, maxCount, inputActive, errorInput }: CountertableType) => {

    const fullWidth = 100;

    return (
        <div className="table-container">
            <div className={`table ${count === maxCount ? 'max' : ''}`}>
                {!inputActive ?
                    count :
                    <span className={!errorInput ? 'active-span' : 'error-span'}>
                        {errorInput ? 'incorrect input' : 'press set button'}
                    </span>}
            </div>
            <div className="line" style={{ width: `${(count - minCount) * (fullWidth / (maxCount - minCount))}%` }}></div>
        </div>
    );
};