import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'; // Assuming you're using Reactstrap for Bootstrap components
import './MasonryGrid.css'; // Custom styles

import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import service4 from '../../images/service4.png';
import service5 from '../../images/service5.png';
import service6 from '../../images/service6.png';
import service7 from '../../images/service7.png';
import service8 from '../../images/service8.png';
import service9 from '../../images/service9.png';

const MasonryGrid = () => {
    const [modal, setModal] = useState(false);
    const [activeCard, setActiveCard] = useState(null); // State to track the active card

    const cards = [
        { id: 1, image: service1, text: 'Condominiums Maintenance', description: 'Description for Condominiums Maintenance' },
        { id: 2, image: service2, text: 'Apartments Cleaning', description: 'Description for Apartments Cleaning' },
        { id: 3, image: service3, text: 'Commercial Buildings Cleaning', description: 'Description for Commercial Buildings Cleaning' },
        { id: 4, image: service4, text: 'Retail Stores Cleaning', description: 'Description for Retail Stores Cleaning' },
        { id: 5, image: service5, text: 'Residential Carpet Cleaning', description: 'Description for Residential Carpet Cleaning' },
        { id: 6, image: service6, text: 'Steam Wash Carpet Cleaning', description: 'Description for Steam Wash Carpet Cleaning' },
        { id: 7, image: service7, text: 'Stripping and Waxing Floors', description: 'Description for Stripping and Waxing Floors' },
        { id: 8, image: service8, text: 'Underground Parking Lot Power Wash and Clean', description: 'Description for Underground Parking Lot Power Wash and Clean' },
        { id: 9, image: service9, text: 'Janitorial Service and Maintenance', description: 'Description for Janitorial Service and Maintenance' },
    ];

    const toggleModal = () => setModal(!modal);

    const openModal = (card) => {
        setActiveCard(card);
        toggleModal();
    };

    return (
        <>
            <div className='section-2' style={{ marginTop: 150 }}>
                <div className='header'>
                    <div className='title'>
                        Our Cleaning <br /> Services
                    </div>
                    <div className='content'>
                        Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve.
                    </div>
                </div>
            </div>
            <div className="masonry-grid">
                {cards.map(card => (
                    <Card
                        inverse
                        style={{ borderRadius: 16 }}
                        key={card.id}
                        className="masonry-card"
                        onClick={() => openModal(card)} // Open modal on card click
                    >
                        <CardImg
                            alt="Card image cap"
                            src={card.image}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 16,
                                objectFit: 'cover'
                            }}
                        />
                        <CardImgOverlay
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'  // Aligns content at the bottom
                            }}
                        >
                            <CardTitle tag="h5">
                                {card.text}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                ))}
            </div>

            {/* Modal Implementation */}
            <Modal isOpen={modal} toggle={toggleModal} className="modal-dialog-centered modal-lg">
                <ModalHeader toggle={toggleModal}>
                    <span style={{ flex: 1 }}>{activeCard?.text}</span>
                    <box-icon type='solid' name='x-square' onClick={toggleModal} style={{ cursor: 'pointer' }}></box-icon>
                </ModalHeader>
                <ModalBody>
                    {activeCard && (
                        <>
                            <img src={activeCard.image} alt={activeCard.text} style={{ width: '100%', height: 350, borderRadius: 8, objectFit:'cover', objectPosition:'top' }} />
                            <p style={{ marginTop: 10 }}>{activeCard.description}</p>
                        </>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" outline className="primary-btn" style={{ margin: '0 auto' }}>
                    Book Now <i class='bx bx-right-arrow-alt' ></i>
                        </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default MasonryGrid;
