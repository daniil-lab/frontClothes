import * as React from 'react';
import config from '../../Utils/config';
import NavigationRoute from './Navigation Route/NavigationRoute';
import { connect } from 'react-redux';
import { IStore, IReducers, IUpdateStore } from '../../Utils/Reducers/actionTypes';
import { updateStore } from '../../Utils/Reducers/storeReducer';
import NavigationLogo from './Navigation Logo/NavigationLogo';
import NavigationActions from './Navigation Actions/NavigationActions';

interface INavigationProps {
    updateStore: typeof updateStore,
    store: IStore
}

const Navigation: React.FunctionComponent<INavigationProps> = ({ store, updateStore }) => {
    const [listener, setListener] = React.useState(null);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const eventListener = document.addEventListener("scroll", () => {
            window.scrollY != 0 ? setScrolled(true) : setScrolled(false);
        });

        setListener(eventListener);

        return () => document.removeEventListener("scroll", listener);
    });

    return (
        <nav className={scrolled ? "nav scrolled" : "nav"}>
            <NavigationLogo
                type="text"
            />

            <div className="nav-route-list-container">
                
                    <NavigationRoute
                        title="Главная"
                        route="/"
                        active={true}
                    >
                        <p>test</p>
                    </NavigationRoute>

                    <NavigationRoute
                        title="Магазины"
                        route="/"
                    />

                    <NavigationRoute
                        title="Категории"
                        route="/"
                    />

                    <NavigationRoute
                        title="Акции"
                        route="/"
                    />

                    <NavigationRoute
                        title="О площадке"
                        route="/"
                    />

                    <NavigationRoute
                        title="Помощь"
                        route="/"
                    />
            </div>

            <NavigationActions />
        </nav>
    );
}

const mapStateToProps = (state: IReducers) => {
    const { store } = state;
    return { store };
}

const mapDispatchToProps = {
    updateStore
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);