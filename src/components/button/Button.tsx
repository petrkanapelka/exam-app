import React from "react";
import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    disable?: boolean
};

export const Button = React.memo(({ title, onClick, disable, className }: ButtonType) => {
    return (
        <button disabled={disable} onClick={onClick} className={className}> {title} </button>
    )
});