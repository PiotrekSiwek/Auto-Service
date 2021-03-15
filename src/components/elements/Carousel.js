import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import "./carousel.scss";

const handleDragStart = (e) => e.preventDefault();

const items = [
    <div className="carousel photo1" onDragStart={handleDragStart}>
        <p className="carouselText text1">Eksperci MOTORYZACJI</p>
    </div>,
    <div className="carousel photo2" onDragStart={handleDragStart}>
        <p className="carouselText text2">Dokładni i precyzyjni</p>
    </div>,
    <div className="carousel photo3" onDragStart={handleDragStart}>
        <p className="carouselText text3">Wszystkie MARKI</p>
    </div>,
    <div className="carousel photo4" onDragStart={handleDragStart}>
        <p className="carouselText text4">ORYGINALNE Akcesoria</p>
    </div>,
    <div className="carousel photo5" onDragStart={handleDragStart}>
        <p className="carouselText text5 ">Profesjonalne Oprzyrządowanie</p>
    </div>,
];

const Gallery = () => {
    return (
        <AliceCarousel mouseTracking
                       items={items}
                       autoPlay
                       autoPlayStrategy="none"
                       autoPlayInterval={1000}
                       animationType="fadeout"
                       animationDuration={1000}
                       infinite
                       disableButtonsControls
                       disableDotsControls
        />
    );
}
export default Gallery;