import * as React from 'react';

interface SecondaryButtonProps {
    title: string | React.ReactNode,
    style?: React.CSSProperties,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
    type?: 'submit' | 'reset'
}

const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = ({ title, style, onClick, type = 'submit' }) => {
    return (
        <button type={type} onClick={onClick} className="secondary-button" style={style}>
            {title}
        </button>
    );
}

export default SecondaryButton;