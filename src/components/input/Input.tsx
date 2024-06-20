import { InputHTMLAttributes } from "react";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
    labelText: string;
}

export const Input = (props: InputType) => {
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
            />
        </label>
    );
};