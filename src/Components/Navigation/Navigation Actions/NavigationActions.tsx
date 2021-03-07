import * as React from 'react';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import NavigationLoginContainer from './Navigation Action Login/NavigationActionLogin';
import OutsideClickDetector from 'Components/OutsideClickDetector/OutsideClickDetector';
import { IStore, IReducers, IUpdateStore } from 'Utils/Reducers/actionTypes';
import { updateStore } from "Utils/Reducers/storeReducer";
import { connect } from 'react-redux';

interface INavigationActionsProps {
    updateStore: typeof updateStore,
    store: IStore
}

const NavigationActions: React.FunctionComponent<INavigationActionsProps> = ({ store, updateStore }) => {
    const [showLogin, setShowLogin] = React.useState(false);

    const handleUserContainerClick = (): void => setShowLogin(!showLogin && true);
    const handleOutsideClick = (): void => setShowLogin(false);
    const showMobileDrawer = (): IUpdateStore => updateStore({
        ...store,
        showDrawer: true
    });

    return (
        <div className="nav-actions-container">
                <div
                    className="nav-user-action-container"
                >
                    <OutsideClickDetector
                        callback={() => handleOutsideClick()}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <AiOutlineUser
                            className="nav-user-action"
                            onClick={() => handleUserContainerClick()}
                        />
                        <NavigationLoginContainer
                            status={showLogin}
                        />
                    </OutsideClickDetector>
                        
                </div>

                <div
                    className="nav-burger-action-container"
                >
                    <AiOutlineMenu
                        className="nav-burger-action"
                        onClick={() => showMobileDrawer()}
                    />
                </div>
        </div>
    );
}

const mapStateToProps = (state: IReducers) => {
    const { store } = state;
    return { store };
}

const mapDispatchToProps = {
    updateStore
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationActions);