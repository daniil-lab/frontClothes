import * as React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import { IStore, IReducers, IUpdateStore } from 'Utils/Reducers/actionTypes';
import { updateStore } from "Utils/Reducers/storeReducer";
import NavigationDrawerRoute from './Navigation Drawer Route/NavigationDrawerRoute';
import config from 'Utils/config';

interface INavigationDrawerProps {
    updateStore: typeof updateStore,
    store: IStore
}

const NavigationDrawer: React.FunctionComponent<INavigationDrawerProps> = ({ store, updateStore }) => {

    const hideNavigationDrawer = (): IUpdateStore => updateStore({
            ...store,
            showDrawer: false
        });

    return (
        <div className={store.showDrawer === null ? "nav-mobile-drawer hidden" : store.showDrawer === false ? "nav-mobile-drawer hide" : "nav-mobile-drawer"}>
            <div className="nav-mobile-drawer-close-container">
                <AiOutlineClose onClick={() => hideNavigationDrawer()} className="nav-mobile-drawer-close" />
            </div>
            
            <div className="nav-mobile-drawer-header-container">
                <p className="nav-mobile-drawer-header">{config.name}</p>
            </div>

            <div className="nav-mobile-drawer-routes-container">
                <NavigationDrawerRoute
                    title="Главная"
                    route="/"
                >
                    <NavigationDrawerRoute
                        title="Главная"
                        route="/"
                    />

                    <NavigationDrawerRoute
                        title="Главная"
                        route="/"
                    />

                    <NavigationDrawerRoute
                        title="Главная"
                        route="/"
                    />
                </NavigationDrawerRoute>

                <NavigationDrawerRoute
                    title="Магазины"
                    route="/"
                />

                <NavigationDrawerRoute
                    title="Категории"
                    route="/"
                />

                <NavigationDrawerRoute
                    title="Акции"
                    route="/"
                />

                <NavigationDrawerRoute
                    title="О площадке"
                    route="/"
                />

                <NavigationDrawerRoute
                    title="Помощь"
                    route="/"
                />
                
            </div>
        </div>
    );
};

const mapStateToProps = (state: IReducers) => {
    const { store } = state;
    return { store };
}

const mapDispatchToProps = {
    updateStore
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer);