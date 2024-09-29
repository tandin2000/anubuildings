import React, { useState } from 'react';
import review from '../../images/reviews.png';
import review2 from '../../images/reviews2.png';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [review, review2];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#040D43', minHeight: '360px', marginTop: 20 }}>
            <div className='header new-service' style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Sora' }}>
                <div className="container-2" style={{ position: 'relative' }}>
                    <p className="text-large text-center mx-5" style={{ color: '#fff' }}>
                        Testimonials
                    </p>
                    <div className="text-small text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button onClick={prevSlide} style={buttonStyle}>‹</button>
                        <div style={{  overflow: 'hidden' }}>
                            <img src={images[activeIndex]} alt="testimonial" style={imageStyle} />
                        </div>
                        <button onClick={nextSlide} style={buttonStyle}>›</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
    padding: '0 10px'
};

const imageStyle = {
    borderRadius: '20px',
    height: '280px',
    width: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease-in-out'
};
