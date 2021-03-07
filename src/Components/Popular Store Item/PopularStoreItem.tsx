import * as React from 'react';

interface IPopularStoreItemProps {
    image: string,
    title: string
}

const PopularStoreItem: React.FunctionComponent<IPopularStoreItemProps> = ({ image, title }) => {
    return (
        <div className="popular-store-item" style={{
            backgroundImage: `url("${image}")`
        }}>
            <div className="popular-store-item-content">
                <p className="popular-store-item-title">{title}</p>
            </div>
        </div>
    );
}

export default PopularStoreItem;