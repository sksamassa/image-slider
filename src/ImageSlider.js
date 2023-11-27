import React, { useState } from 'react';
import './sliders.css';
import rightArrow from './right-arrow.png';
import leftArrow from './left-arrow.png';

export default function ImageSlider({ slides }) {
    const [index, setIndex] = useState(0);

    const sliderStyles = {
        position: 'relative',
        height: '300px',
        width: '500px',
        margin: '0 auto'
    };
    const slideStyles = {
        postion: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${slides[index].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '16px',
    };

    function goToPrevious() {
        const isFirstIndex = index === 0;
        const previous = isFirstIndex ? slides.length - 1 : index - 1;
        setIndex(previous);
    }

    function goToNext() {
        const isLastIndex = index === slides.length - 1;
        const next = isLastIndex ?  0 : index + 1;
        setIndex(next);
    }

    function activeSlide(ind) {
        if(ind === index){
            return 'active';
        } else {
            return 'slide-active';
        }
    }

    return (
        <div style={sliderStyles}>
            <div style={slideStyles}>
            <img src={leftArrow} alt='' style={{
                width: '30px',
                position: 'absolute',
                top: '50%',
                transform: 'translate(0, -50%)',
                left: '20px',
            }} onClick={goToPrevious} />
            <img src={rightArrow} alt='' style={{
                width: '30px',
                position: 'absolute',
                top: '50%',
                transform: 'translate(0, -50%)',
                right: '20px',
            }} onClick={goToNext} />
            </div>
            <div style={{
                display: 'flex',
                width: 'auto',
                gap: '10px',
                justifyContent: 'center',
                marginTop: '10px'
            }}>
                <div className={ activeSlide(0) } onClick={() => setIndex(0)}></div>
                <div className={ activeSlide(1) } onClick={() => setIndex(1)}></div>
                <div className={ activeSlide(2) } onClick={() => setIndex(2)}></div>
                <div className={ activeSlide(3) } onClick={() => setIndex(3)}></div>
                <div className={ activeSlide(4) } onClick={() => setIndex(4)}></div>
            </div>
        </div>
    );
}