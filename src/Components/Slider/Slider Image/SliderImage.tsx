import * as React from 'react';
import { ISliderImage } from '../Interfaces';

const SliderImage: React.FunctionComponent<ISliderImage> = ({ uri, style, translated }) => {
    return (
        <div className={"slider-image"} style={{
            ...style,
            // transform: `translateX(-${translated}px)`,
            backgroundImage: `url('${uri}')`
        }} />
    );
}

export default SliderImage;