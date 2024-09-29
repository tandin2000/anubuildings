import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'; // Assuming you're using Reactstrap for Bootstrap components
import './MasonryGrid.css'; // Custom styles
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import service4 from '../../images/service4.png';
import service5 from '../../images/service5.png';
import service6 from '../../images/service6.png';
import service7 from '../../images/service7.png';
import service8 from '../../images/service8.png';
import service9 from '../../images/service9.png';
import beforeImage from '../../images/before.jpeg';
import afterImage from '../../images/after.jpeg';

const MasonryGrid = () => {
    const [modal, setModal] = useState(false);
    const [activeCard, setActiveCard] = useState(null); // State to track the active card

    const cards = [
        { id: 1, image: service1, text: 'Condominiums Maintenance', description: 'Description for Condominiums Maintenance', icon: "bx bx-building" },
        { id: 3, image: service3, text: 'Commercial Buildings Cleaning', description: 'Description for Commercial Buildings Cleaning', icon: "bx bx-briefcase" },
        { id: 4, image: service4, text: 'Retail Stores Cleaning', description: 'Description for Retail Stores Cleaning', icon: "bx bx-store" },
        { id: 5, image: service5, text: 'Residential Carpet Cleaning', description: 'Description for Residential Carpet Cleaning', icon: "bx bx-home" },
        { id: 6, image: service6, text: 'Steam Wash Carpet Cleaning', description: 'Description for Steam Wash Carpet Cleaning', icon: "bx bx-water" },
        { id: 7, image: service7, text: 'Stripping and Waxing Floors', description: 'Description for Stripping and Waxing Floors', icon: "bx bx-brush" },
        { id: 8, image: service8, text: 'Underground Parking Lot Power Wash and Clean', description: 'Description for Underground Parking Lot Power Wash and Clean', icon: "bx bx-car" },
        { id: 9, image: service9, text: 'Janitorial Service and Maintenance', description: 'Description for Janitorial Service and Maintenance', icon: "bx bx-mop" },
    ];


    const toggleModal = () => setModal(!modal);

    const openModal = (card) => {
        setActiveCard(card);
        toggleModal();
    };

    return (
        <>
            <div className='section-2'>
                <div className='header new-service' style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Sora' }}>
                    <div class="container-2">
                        <p class="text-large mx-5">
                            Our Cleaning <br /> Services
                        </p>
                        <div class="text-small">
                            Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve.
                        </div>
                    </div>
                </div>
            </div>
            <div className="masonry-grid" style={{ marginTop: -100, marginBottom: 80 }}>
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
                            <div className='icon-container'>
                                <i class={`${card.icon} bx-md`} ></i>
                            </div>
                            <CardTitle tag="h4">
                                {card.text}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                ))}
            </div>

            {/* Modal Implementation */}
            <Modal isOpen={modal} toggle={toggleModal} className="modal-dialog-centered modal-lg">
                {/* <ModalHeader toggle={toggleModal}>
                    <box-icon type='solid' name='x-square' onClick={toggleModal} style={{ cursor: 'pointer' }}></box-icon>
                </ModalHeader> */}
                <ModalBody>
                    {activeCard && (
                        <>
                            <ReactCompareSlider
                                style={{ width: '100%', height: 350, borderRadius: 8, objectFit: 'cover', objectPosition: 'top' }}
                                itemOne={<ReactCompareSliderImage src={beforeImage} srcSet={beforeImage} alt={activeCard.text} />}
                                itemTwo={<ReactCompareSliderImage src={afterImage} srcSet={afterImage} alt={activeCard.text} />}
                            />
                            <h2 className='mt-3' style={{ fontSize: 24, fontWeight: 800, textAlign: 'center' }}>{activeCard?.text}</h2>
                            <p style={{ marginTop: 10, textAlign: 'center' }}>{activeCard.description}</p>
                        </>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" outline className="light-btn py-3 px-5" style={{ margin: '0 auto' }}>
                        Book Now <i class='bx bx-right-arrow-alt' ></i>
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default MasonryGrid;
