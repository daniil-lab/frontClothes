import * as React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

interface INavigationDrawerRouteProps {
    title: string,
    route: string,
    children?: React.ReactNode
}

const NavigationDrawerRoute: React.FunctionComponent<INavigationDrawerRouteProps> = ({ title, route, children }) => {

    const [showExpanded, setShowExpanded] = React.useState(null);

    const handleExpandedClick = (): void => setShowExpanded(showExpanded === null ? true : !showExpanded);

    return (
        <div onClick={() => handleExpandedClick()} className="nav-mobile-drawer-route-container">
            <div className="nav-mobile-drawer-route-header">
                <a href={route} className="nav-mobile-drawer-route">{title}</a>
                {
                    children
                    ?
                        showExpanded
                        ?
                            <AiOutlineDown className="nav-mobile-drawer-route-icon rotate" />
                        :
                            <AiOutlineDown className="nav-mobile-drawer-route-icon" />
                    :
                        null
                }
            </div>
            <div className={ showExpanded === null ? "nav-mobile-drawer-route-expanded-container hide" : showExpanded === false ? "nav-mobile-drawer-route-expanded-container hidden" : "nav-mobile-drawer-route-expanded-container" }>
                {children}
            </div>
        </div>
    );
}

export default NavigationDrawerRoute;