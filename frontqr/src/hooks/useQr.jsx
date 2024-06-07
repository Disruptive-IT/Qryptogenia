import { useState } from 'react';

const useQrState = (initialQrType = '', initialQrProps = {}) => {
    const [qrState, setQrState] = useState({
        qrType: initialQrType,
        qrColor: '#000000',
        qrProps: {
            ...initialQrProps,
            backgroundImage: null,
            logoImage: null,
            logoPosition: { background: true },
            dotsType: 'rounded',
            cornersSquareType: 'extra-rounded',
            cornersDotType: 'dot',
            dotsColor: '#000000',
            cornersSquareColor: '#000000',
            cornersDotColor: '#000000'
        },
        qrImageInfo: {
            qrImage: null,
            qrImageCentered: true,
            qrImagePositionX: 0,
            qrImagePositionY: 0,
        },
        qrTextProps: {
            qrText: '',
            qrTextColor: '#000000',
            qrTextFontStyle: {},
            qrTextPositionX: 0,
            qrTextPositionY: 0,
        },
    });

    const setQrData = (type, props) => {
        setQrState(prevState => ({
            ...prevState,
            qrType: type,
            qrProps: {
                ...prevState.qrProps,
                ...props,
            },
        }));
    };

    const setBackgroundImage = (image) => {
        setQrState(prevState => ({
            ...prevState,
            qrProps: {
                ...prevState.qrProps,
                backgroundImage: image,
            },
        }));
    };


    const setQrProps = (newProps) => {
        setQrState(prevState => ({
            ...prevState,
            qrProps: {
                ...prevState.qrProps,
                ...newProps,
            },
        }));
    };


    const setQrColor = (color) => {
        setQrState(prevState => ({
            ...prevState,
            qrColor: color,
        }));
    };

    const setDotsType = (type) => {
        setQrState(prevState => ({
            ...prevState,
            qrProps: {
                ...prevState.qrProps,
                dotsType: type,
            },
        }));
    };

    const setCornersSquareType = (type) => {
        setQrState(prevState => ({
            ...prevState,
            qrProps: {
                ...prevState.qrProps,
                cornersSquareType: type,
            },
        }));
    };

    const setCornersDotType = (type) => {
        setQrState(prevState => ({
            ...prevState,
            qrProps: {
                ...prevState.qrProps,
                cornersDotType: type,
            },
        }));
    };

    const setDotsColor = (color) => {
        setQrProps({ dotsColor: color });
    };

    const setCornersSquareColor = (color) => {
        setQrProps({ cornersSquareColor: color });
    };

    const setCornersDotColor = (color) => {
        setQrProps({ cornersDotColor: color });
    };

    // ----------------------------- TEXT

    const updateQrTextProps = (newInfo) => {
        setQrState(prevState => ({
            ...prevState,
            qrTextProps: {
                ...prevState.qrTextProps,
                ...newInfo,
            },
        }));
    };

    const setQrText = (text) => {
        updateQrTextProps({ qrText: text });
    };

    const setQrFontStyle = (style) => {
        updateQrTextProps({ qrTextFontStyle: style });
    };

    const setTextColor = (color) => {
        updateQrTextProps({ qrTextColor: color });
    };

    const setQrTextPositionX = (x) => {
        updateQrTextProps({ qrTextPositionX: x });
    };

    const setQrTextPositionY = (y) => {
        updateQrTextProps({ qrTextPositionY: y });
    };

    // ----------------------------- IMG

    const updateQrImageInfo = (newInfo) => {
        setQrState(prevState => ({
            ...prevState,
            qrImageInfo: {
                ...prevState.qrImageInfo,
                ...newInfo,
            },
        }));
    };

    const setQrImage = (image) => {
        updateQrImageInfo({ qrImage: image });
    };

    const setQrImageCentered = (centered) => {
        updateQrImageInfo({ qrImageCentered: centered });
    };

    const setQrImagePositionX = (x) => {
        updateQrImageInfo({ qrImagePositionX: x });
    };

    const setQrImagePositionY = (y) => {
        updateQrImageInfo({ qrImagePositionY: y });
    };

    return {
        ...qrState,
        setQrData,
        setQrText,
        setQrFontStyle,
        setQrColor,
        setTextColor,
        setDotsType,
        setCornersSquareType,
        setCornersDotType,
        setDotsColor,
        setCornersSquareColor,
        setCornersDotColor,
        setBackgroundImage,
        setQrTextPositionX,
        setQrTextPositionY,
        setQrImage,
        setQrImageCentered,
        setQrImagePositionX,
        setQrImagePositionY,
    };

};

export default useQrState;