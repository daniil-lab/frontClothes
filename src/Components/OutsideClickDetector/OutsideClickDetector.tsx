import * as React from 'react';

interface IOutsideClickDetectorProps {
    style?: React.CSSProperties,
    callback?: Function,
    children?: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {}
}

const OutsideClickDetector: React.FunctionComponent<IOutsideClickDetectorProps> = ({callback, children, ...otherProps}) => {
    const detectorRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (detectorRef.current && !detectorRef.current.contains(event.target)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [detectorRef]);

    return (
        <div
            {...otherProps}
            ref={detectorRef}
        >
            {children}
        </div>
    );
}

export default OutsideClickDetector;