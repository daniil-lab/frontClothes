import * as React from 'react';

interface IContentHeaderProps {
    align: 'center' | 'left' | 'right',
    containerStyle?: React.CSSProperties,
    textStyle?: React.CSSProperties,
    title: string,

}

const ContentHeader: React.FunctionComponent<IContentHeaderProps> = ({ align, containerStyle, textStyle, title}) => {
    return (
        <div className="content-header-container" style={{
            ...containerStyle,
            justifyContent: align === 'center' ? 'center' : align === 'left' ? 'flex-start' : 'flex-end'
        }}>
            <p className="content-header-text" style={{
                ...textStyle
            }}>{title}</p>
        </div>
    );
}

export default ContentHeader;