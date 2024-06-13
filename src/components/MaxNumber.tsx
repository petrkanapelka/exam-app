type Props = {
    maxNumber: number
};
export const MaxNumberField = (props: Props) => {
    return (
        <div className="max-number">Max:{props.maxNumber} </div>
    );
};