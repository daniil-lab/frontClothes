import * as React from 'react';

interface IFormProps {
    onChange?: (e: React.FormEvent<HTMLFormElement>) => {},
    onSubmit?: (e: React.SyntheticEvent) => {},
    children?: React.ReactNode
}

const Form: React.FunctionComponent<IFormProps> = ({ children, ...formProps }) => {
    return (
        <form className="base-form" {...formProps}>
            {children}
        </form>
    );
}

export default Form;