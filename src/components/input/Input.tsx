import React from "react";
import { InputHTMLAttributes } from "react";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
    labelText: string;
}

export const Input = React.memo((props: InputType) => {
    console.log('Input called')
    return (
        <label>
            {props.labelText}
            <input
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                className={props.className}
                value={props.value}
                disabled={props.disabled}
                onFocus={props.onFocus}
            />
        </label>
    );
});