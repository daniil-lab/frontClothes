import * as React from 'react';

interface NavigationItemProps {
    title: string,
    route: string,
    children?: React.ReactNode,
    active?: boolean
}

const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({ title, active, route, children }) => {
    const [showExpanded, setShowExpanded] = React.useState(null);

    const handleHover = (): void => children && setShowExpanded(true);

    const handleLeave = (): void => children && setShowExpanded(false);

    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleLeave} className="nav-route-container">
            <a className={ active ? "nav-route-item active" : "nav-route-item"} href={route}>{title}</a>
            <div className={showExpanded ? "nav-route-expanded" : showExpanded === false ? "nav-route-expanded hidden" : "nav-route-expanded hide"}>
                {children}
            </div>
        </div>
    )
}

export default NavigationItem;