export interface ISliderImage {
    uri: string,
    style?: React.CSSProperties,
    active?: string,
    translated?: number
}

export interface ISliderProps {
    type: 'image',
    images: Array<ISliderImage>,
    style?: React.CSSProperties | Array<React.CSSProperties>,
    autoplay: boolean
}