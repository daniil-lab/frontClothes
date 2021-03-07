import * as React from 'react';

interface PrimaryButtonProps {
    title: string | React.ReactNode,
    style?: React.CSSProperties,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
    type?: 'submit' | 'reset'
}

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({title, ...butonProps}) => {

    return (
        <button {...butonProps} className="primary-button">
            {title}
        </button>
    );
}

export default PrimaryButton;