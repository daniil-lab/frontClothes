import * as React from 'react';
import config from '../../../Utils/config';

interface INavigationLogoProps {
    type: 'image' | 'text'
}

const NavigationLogo: React.FunctionComponent<INavigationLogoProps> = ({ type }) => {
    return (
        <div className="nav-logo-container">
            {
                type === 'image'
                ?
                    <img src="" alt="Logo" className="nav-logo-image" />
                :
                    <p className="nav-logo-text">{config.name}</p>
            }
        </div>
    );
}

export default NavigationLogo;