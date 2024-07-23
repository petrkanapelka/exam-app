import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../button/Button";
import { incrementCountAC, resetCountAC } from "../../modules/reducer/reducer";
import React from "react";
import { selectCount, selectInputIsActive, selectMaxCount, selectMinCount } from "../../modules/selectors/selectors";
import { AppDispatch } from "../../modules/store/store";

export const Controller = React.memo(() => {

    const count = useSelector(selectCount);
    const maxCount = useSelector(selectMaxCount);
    const minCount = useSelector(selectMinCount);
    const inputIsActive = useSelector(selectInputIsActive);


    const dispatch: AppDispatch = useDispatch();


    let isIncButtonDisabled = count >= maxCount

    let isResetButtonDisabled = count <= minCount

    const incHandler = () => {
        dispatch(incrementCountAC())
    }

    const resetHandler = () => {
        dispatch(resetCountAC())
    }

    return (
        <>
            <div className="controller">
                <Button
                    title="inc"
                    onClick={incHandler}
                    disable={isIncButtonDisabled || inputIsActive}
                    className={isIncButtonDisabled || inputIsActive ? 'disabled' : ''} />
                <Button
                    title="reset"
                    onClick={resetHandler}
                    className={isResetButtonDisabled || inputIsActive ? 'disabled' : ''}
                    disable={isResetButtonDisabled || inputIsActive} />
            </div>
        </>
    );
});
