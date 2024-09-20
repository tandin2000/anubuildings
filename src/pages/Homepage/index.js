import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import 'boxicons/css/boxicons.min.css';
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faBroom,
    faArrowUpRightDots,
} from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons';


import HeroImage1 from '../../assets/images/Hero-banner-1.png';
import HeroImage2 from '../../assets/images/Hero-banner-2.png';
import Logo from '../../assets/images/anulogo 1.png'

const avatars = [
    { id: 1, src: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, src: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, src: "https://randomuser.me/api/portraits/men/3.jpg" }
];


export default function Homepage() {
    return (
        <>
                        <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                >
                    <div className='carousal-new'>
                        <img src={HeroImage1} alt="Award Image 1" height="100%" />
                        <p className='legend'>
                            ONE AND ONLY
                            <br />
                            AWARD WINING
                            SERVICE IN CANADA
                            <br />
                            <span className='legend-2'>
                                We strive to be the best in the cleaning industry by maintaining high standards. Trust in our cleaning crew is essential, and our rigorous training program ensures
                                <br />
                                -Jury
                            </span>
                        </p>
                    </div>
                    <div className='carousal-new'>
                        <img src={HeroImage2} alt="Award Image 2" />
                    </div>
                </Carousel>
                <div className='section-2'>
                    <div className="content px-5">
                        <h2 className="content-title">We Are Specialized In</h2>
                        <p className="content-description">
                            We strive to be the best in the cleaning industry by maintaining high standards.
                            Trust in our cleaning crew is essential.
                        </p>
                        <div className="specialization">
                            <div className="specialization-item">
                                <div className='icon-container'>
                                    <FontAwesomeIcon icon={faBroom} className="specialization-icon" />
                                </div>
                                <div className="specialization-text">
                                    <h5>We Are Driven</h5>
                                    <p>We strive to be the best in the cleaning industry by maintaining high standards.</p>
                                </div>
                            </div>
                            <div className="specialization-item">
                                <div className='icon-container'>
                                    <FontAwesomeIcon icon={faBroom} className="specialization-icon" />
                                </div>
                                <div className="specialization-text">
                                    <h5>We Are Driven</h5>
                                    <p>We strive to be the best in the cleaning industry by maintaining high standards.</p>
                                </div>
                            </div>
                            <div className="specialization-item">
                                <div className='icon-container'>
                                    <FontAwesomeIcon icon={faBroom} className="specialization-icon" />
                                </div>
                                <div className="specialization-text">
                                    <h5>We Are Driven</h5>
                                    <p>We strive to be the best in the cleaning industry by maintaining high standards.</p>
                                </div>
                            </div>
                            <div className="specialization-item">
                                <div className='icon-container'>
                                    <FontAwesomeIcon icon={faBroom} className="specialization-icon" />
                                </div>
                                <div className="specialization-text">
                                    <h5>We Are Driven</h5>
                                    <p>We strive to be the best in the cleaning industry by maintaining high standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-3'>
                    <div className='left-section'>
                        <div className='stat-1'>
                            <div className='open-section'>
                                <FontAwesomeIcon icon={faArrowUpRightDots} />
                            </div>
                            <div className='stat-content'>
                            </div>
                        </div>
                        <div className='stat-2'>
                            <div className='open-section'>
                                <FontAwesomeIcon icon={faArrowUpRightDots} />
                            </div>
                            <div className='stat-content'>
                                <span className='title'>
                                    CUSTOMER
                                    <br />
                                    SATISFACTION
                                </span>
                                <br />
                                <span className='stat'>100%</span>
                            </div>
                        </div>
                        <div className='stat-3'>
                            <div className='open-section'>
                                <FontAwesomeIcon icon={faArrowUpRightDots} />
                            </div>
                            <div className='stat-content'>
                                <span className='title'>
                                    WE ARE
                                    HERE TO
                                    <br />
                                    TALK WITH
                                </span>
                                <br />
                                <span className='stat'>You</span>
                            </div>
                        </div>
                    </div>
                    <div className='right-section'>
                        <div className='stat-4'>
                            <div className='open-section'>
                                <FontAwesomeIcon icon={faArrowUpRightDots} />
                            </div>
                            <div className='stat-content'>
                                <span className='title'>
                                    ANYTIME
                                    <br />
                                    EVERYWHERE
                                </span>
                                <br />
                                <span className='stat'>24x7</span>
                            </div>
                        </div>
                        <div className='stat-5'>
                            <div className='open-section'>
                                <FontAwesomeIcon icon={faArrowUpRightDots} />
                            </div>
                            <div className='stat-content'>
                                <span className='title'>
                                    Currently
                                    <br />
                                    Handling Clients
                                </span>
                                <br />
                                <span className='stat'>500+</span>
                            </div>
                        </div>
                        <div className='stat-6'>
                            <i class='bx bxl-facebook-circle bx-md'></i>
                            <i class='bx bxl-instagram bx-md' ></i>
                            <i class='bx bxl-google bx-md' ></i>
                            <i class='bx bxl-tiktok bx-md' ></i>
                        </div>
                    </div>

                </div>
        </>
    )
}
