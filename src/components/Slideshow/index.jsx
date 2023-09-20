import React, { useState } from 'react';
import '../Slideshow/_carrousel.scss';

const Slideshow = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    // Vérifiez s'il y a plus d'une image avant de rendre les flèches et la numérotation.
    const shouldRenderArrowsAndCounter = pictures.length > 1;

    return (
        <div className="carrousel-container">
            {shouldRenderArrowsAndCounter && (
                <button onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" transform="translate(0 0.880615)">
                        <path d="M17.51 4.75064L15.74 2.98064L5.83995 12.8806L15.7399 22.7806L17.5099 21.0106L9.37995 12.8806L17.51 4.75064Z"/>
                    </svg>
                </button>
            )}
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            {shouldRenderArrowsAndCounter && (
                <div className="slide-counter">{currentIndex + 1}/{pictures.length}</div>
            )}
            {shouldRenderArrowsAndCounter && (
                <button onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M6.48999 21.0106L8.25999 22.7806L18.16 12.8806L8.25999 2.98059L6.48999 4.75059L14.62 12.8806L6.48999 21.0106Z"/>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Slideshow;
