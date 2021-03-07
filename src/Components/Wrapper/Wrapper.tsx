import * as React from 'react';

import Navigation from '../Navigation/Navigation';
import NavigationDrawer from 'Components/Navigation/Navigation Drawer/NavigationDrawer';
import { connect } from 'react-redux';
import { IStore, IReducers, IUpdateStore } from '../../Utils/Reducers/actionTypes';
import { updateStore } from '../../Utils/Reducers/storeReducer';

interface IWrapperProps {
    updateStore: typeof updateStore,
    store: IStore,
    children: React.ReactNode
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({ children, store, updateStore }) => {
    return (
        <div className={store.showDrawer ? "wrapper no-scroll" : "wrapper"}>
            <NavigationDrawer />
            <Navigation />
            {children}
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


export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
