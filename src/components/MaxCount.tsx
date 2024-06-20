type Props = {
    maxCount: number
};
export const MaxCount = (props: Props) => {
    return (
        <div className="max-number">Max:{props.maxCount} </div>
    );
};