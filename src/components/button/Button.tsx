type Props = {
    title: string
    disable?: boolean
    className?: string
    onClick: () => void
};

export const Button = ({ title, onClick, disable, className }: Props) => {
    return (
        <button disabled={disable} onClick={onClick} className={className}>{title}</button>
    )
};