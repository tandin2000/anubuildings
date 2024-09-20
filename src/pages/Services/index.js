import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightDots,
    faArrowUpRightFromSquare,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import ServiceImage from '../../assets/services/service 9.png'; // Your sample image
import './Services.css';

const images = [
    'https://randomuser.me/api/portraits/men/8.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
    'https://randomuser.me/api/portraits/men/6.jpg',
    'https://randomuser.me/api/portraits/men/7.jpg',
    'https://randomuser.me/api/portraits/men/8.jpg',
    'https://randomuser.me/api/portraits/men/8.jpg'
];

export default function Services() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openDrawer = (index) => {
        setSelectedService(index);
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <div className='custom-row'>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className='custom-col-6'
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        onClick={() => openDrawer(index)} // Open drawer on click
                    >
                        <div className="content">
                            <div>ANYTIME <br /> EVERYWHERE</div>
                            <FontAwesomeIcon icon={faArrowUpRightDots} />
                        </div>
                    </div>
                ))}
            </div>

            {drawerOpen && (
                <div className="drawer-overlay">
                    <div className="drawer">
                        <button className="close-button" onClick={closeDrawer}>
                        <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <img src={ServiceImage} alt="Service" className="drawer-image" />
                        <div className="drawer-content">
                            <h2>Service Name {selectedService + 1}</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec vehicula, lectus non fermentum sollicitudin, mauris ex convallis eros, 
                                non lobortis velit nunc ac mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec vehicula, lectus non fermentum sollicitudin, mauris ex convallis eros, 
                                non lobortis velit nunc ac mi.
                            </p>
                            <button className="btn contact-btn">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='px-2' />
                            <span className='px-2'>Contact Now</span>
                        </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
