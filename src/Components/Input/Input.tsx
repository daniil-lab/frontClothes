import * as React from 'react';

interface IInputProps {
    style?: React.CSSProperties,
    title?: string,
    disabled?: boolean,
    onChange?: (e: React.FormEvent<HTMLInputElement>) => {},
    name?: string,
    type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"
}

const Input: React.FunctionComponent<IInputProps> = ({title, ...inputProps}) => {
    return (
        <div className="base-input-container">
            {
            title
            &&
                <label className="base-input-title">{title}</label>
            }
            <input className="base-input" {...inputProps} />
        </div>
    );
}

export default Input;