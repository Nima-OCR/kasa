import React from 'react';
import '../../sass/components/_hero-section.scss';


const HeroSection = ({ heroText, imgSrc }) => (
    <div className="heroContainer">
        <h1 className="heroContainer__text">{heroText}</h1>
        <img className="heroContainer__illustration" src={imgSrc} />
    </div>
);

export default HeroSection;

