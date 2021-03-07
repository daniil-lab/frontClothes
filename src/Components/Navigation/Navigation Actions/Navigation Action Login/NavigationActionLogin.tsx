import * as React from 'react';
import Input from 'Components/Input/Input';
import PrimaryButton from 'Components/Primary Button/PrimaryButton';
import SecondaryButton from 'Components/Secondary Button/SecondaryButton';
import Form from 'Components/Form/Form';

interface INavigationActionLoginProps {
    status: boolean
}

const NavigationActionLogin: React.FunctionComponent<INavigationActionLoginProps> = ({ status }) => {
    return status
        &&
        (
            <div className="nav-action-login-container">
                <div className="nav-action-login-header-container">
                    <p className="nav-action-login-header">Авторизация</p>
                </div>

                <Form>
                        <Input
                            title="Имя пользователя или E-MAIL"
                        />
                        <Input
                            title="Пароль"
                            type="password"
                        />

                        <div className="nav-action-login-actions-container">
                            <SecondaryButton
                                title="Регистрация"
                            />

                            <PrimaryButton
                                title="Войти"
                            />
                        </div>

                        <div className="nav-action-login-password-reset-container">
                            <a className="nav-action-login-password-reset">Забыли пароль?</a>
                        </div>
                </Form>
            </div>
    );
}

export default NavigationActionLogin;