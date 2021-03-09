import * as React from 'react';
import { ISliderProps } from './Interfaces';
import SliderImage from './Slider Image/SliderImage';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider: React.FunctionComponent<ISliderProps> = ({ autoplay, images, style }) => {
    const translateValue = 450;
    const transitionDuration = 0.5;
    const delay = 3000;

    const width = window.innerWidth * 95 / 100;

    const [translated, setTranslated] = React.useState(null);
    const [lastTap, setLastTap] = React.useState(0);
    const [timeoutId, setTimeoutId] = React.useState(null);
    const [activeItem, setActiveItem] = React.useState(0);

    React.useMemo(() => {
        if(autoplay) {
            // if(images.length - 1 === activeItem) {
            //     setActiveItem(0);
            //     setTranslated(activeItem * translateValue);
            //     return;
            // }

            const handleIteration = ():void => {
                if((Date.now() - lastTap) > 3000) {
                    setActiveItem(activeItem + 1);
                    setTranslated(activeItem * width);
                }
            }
    
            const timeId = setTimeout(() => handleIteration(), delay);

            setTimeoutId(timeId);
        }
    }, [translated]);

    const handleArrowClick = (type: string): void => {
        setLastTap(Date.now());
        clearTimeout(timeoutId);

        if(type === 'right') {
            if((translated / translateValue) >= images.length) {
                setTranslated(0);
            } else {
                setTranslated(translated + translateValue);
            }
        }

        if(type === 'left') {
            if(translated < translateValue) {
                const result = (images.length) * translateValue;
                console.log(result);
                setTranslated(result);
            } else {
                setTranslated(translated - translateValue);
            }
        }
    }

    return (
        <div className="slider-container">
                <div className="slider" style={{
                    width: width * images.length,
                    transform: `translateX(-${translated}px)`,
                    transition: ".5s"
                }}>
                    {
                        images.map((image, id) => <SliderImage
                            key={id}
                            uri={image.uri}
                            style={{
                                ...image.style,
                                transition: `${transitionDuration}s`
                            }}
                            translated={translated}
                        />)
                    }
                </div>
        </div>
    );
}

export default Slider;