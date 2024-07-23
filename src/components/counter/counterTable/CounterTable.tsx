import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount, selectMaxCount, selectMinCount, selectInputIsActive, selectInputIsError } from '../../modules/selectors/selectors';

export const CounterTable: React.FC = React.memo(() => {
    const count = useSelector(selectCount);
    const maxCount = useSelector(selectMaxCount);
    const minCount = useSelector(selectMinCount);
    const inputIsActive = useSelector(selectInputIsActive);
    const inputIsError = useSelector(selectInputIsError);


    const fullWidth = 100;
    const progressWidth = (count - minCount) * (fullWidth / (maxCount - minCount));

    return (
        <div className="table-container">
            <div className={`table ${count === maxCount ? 'max' : ''}`}>
                {!inputIsActive ? (
                    count
                ) : (
                    <span className={!inputIsError ? 'active-span' : 'error-span'}>
                        {inputIsError ? 'incorrect input' : 'press set button'}
                    </span>
                )}
            </div>
            <div className="line" style={{ width: `${progressWidth}%` }}></div>
        </div>
    );
});
