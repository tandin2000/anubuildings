import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    CardImgOverlay
} from 'reactstrap';
import Logo from '../../images/logo 1.png';
import './Layout.css';  // Add custom CSS for layout
import './temp.css'

// Images for the carousel
import slide1 from '../../images/Hero-banner-1-anu.png';
import slide2 from '../../images/Hero-banner-2-anu.png';
import slide3 from '../../images/Hero-banner-3-anu.png';
import slide5 from '../../images/Hero-banner-5-anu.png';
import frame51 from '../../images/Frame51.png'
import frame12 from '../../images/Frame 12.png'
import frame17 from '../../images/Frame 17.png'
import frame18 from '../../images/Frame 18.png'
import FAQSection from '../Component/FAQ';
import Footer from '../Component/Footer';
import ReactPlayer from 'react-player';

const items = [
    {
        src: slide1,
        altText: 'Slide 1',
        caption: 'Excelent Services',
        description: 'From a Quality Service Provider',
        buttonText: 'View More',
        buttonLink: '/services' // Optional link for the button
    },
    {
        src: slide2,
        altText: 'Slide 2',
        caption: 'Professional Cleaning From',
        description: 'an Award Winning Service Provider'
        // No button on this slide
    },
    {
        src: slide3,
        altText: 'Slide 3',
        caption: 'Affordable and Reliable',
        description: 'Service Provider',
        buttonText: 'Explore Now',
        buttonLink: '/get-quote' // Another link for the button
    }
];


function Homepage() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="carousel-image" />
                <div className="carousel-overlay" style={{ maxWidth: 920 }}>
                    <p style={{ lineHeight: 1.2, fontWeight: 700, color: "white", fontFamily: "Sora" }}>{item.caption} &nbsp;
                        <span
                            className='text-primary'
                            style={{
                                fontWeight: 700,
                                fontStyle: "italic",
                                textDecoration: "underline"


                            }}>{item.description}</span>
                    </p>
                    {/* Conditionally render the button */}
                    {item.buttonText && (
                        <a href={item.buttonLink || '#'} className="carousel-btn">
                            <Button color="primary" outline className="primary-btn py-3 px-5">
                                {item.buttonText}
                            </Button>
                        </a>
                    )}
                </div>
            </CarouselItem>
        );
    });

    return (
        <div>
            <div className='hero-container'>
                <div class="container">
                    <p class="text-large mx-5">
                        Welcome to Award Winning Cleaning Service
                    </p>
                    <div class="text-small">
                        At Anu Building Services Inc. our first priority is the satisfaction of our customers. Anu Building Services Inc. provides maintenance and cleaning service in a professional and detailed manner.
                        <br />
                        <div className='button-container'>
                            <Button color="primary" outline className="light-btn py-3 px-5 mt-3">
                                SERVICES
                            </Button>
                            <Button color="primary" outline className="primary-btn py-3 px-5 mt-3 mx-2">
                                QUOTE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
                <div className="video-container">
                    <ReactPlayer
                        className="react-player"
                        light={true}
                        url='https://www.youtube.com/watch?v=yMJCcKyorfs&ab_channel=UliaArt'
                        style={{
                            minWidth:'80%',
                            minHeight:'540px',
                            borderRadius:240
                        }}
                    />
                    {/* <img src={slide5} className="image-slide" /> */}
                </div>
            <div className='section-1'>
                <div className='image-section-1'>
                    <img src={frame51} height="200px" />
                </div>
                <div>
                    <span className='para-section-1'>Your satisfaction is 100% Guaranteed at Anu Building Services. If you are not happy with our service, just let us know and we’ll work to make it right. This makes hiring Cleaning Company virtually risk free. Our Employees are thoroughly screened through our rigorous recruitment process, and every one of them goes through hand in training process.</span>
                </div>
            </div>
            <div className='section-2'>
                <div class="container-2">
                    <p class="text-large text-center mx-5" style={{ color: "black" }}>
                        Our Cleaning Services
                    </p>
                    <div class="text-small" style={{ color: "black" }}>
                        Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve.

                        <br />
                        <div className='button-container'>
                            <Button color="primary" outline className="light-btn py-3 px-5 mt-3">
                                SERVICES
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='row card-container'>
                    <div className='col-lg-3 col-md-3 col-sm-12 my-2'>
                        <Card inverse style={{ borderRadius: 16 }}>
                            <CardImg
                                alt="Card image cap"
                                src={frame12}
                                style={{
                                    maxHeight: 360,
                                    // borderRadius:16,
                                    objectFit: 'cover'
                                }}
                                width="100%"
                            />
                            <CardImgOverlay
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'  // Aligns content at the bottom
                                }}
                            >
                                <div className='icon-container'>
                                    <i class='bx bx-home bx-md' ></i>
                                </div>
                                <CardTitle tag="h4">
                                    Condominiums <br /> Maintenance
                                </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 my-2'>
                        <Card inverse style={{ borderRadius: 16 }}>
                            <CardImg
                                alt="Card image cap"
                                src={frame12}
                                style={{
                                    maxHeight: 360,
                                    // borderRadius:16,
                                    objectFit: 'cover'
                                }}
                                width="100%"
                            />
                            <CardImgOverlay
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'  // Aligns content at the bottom
                                }}
                            >
                                <div className='icon-container'>
                                    <i class='bx bx-store-alt bx-md' ></i>
                                </div>
                                <CardTitle tag="h4">
                                    Retail <br /> Store Cleaning
                                </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 my-2'>
                        <Card inverse style={{ borderRadius: 16 }}>
                            <CardImg
                                alt="Card image cap"
                                src={frame17}
                                style={{
                                    maxHeight: 360,
                                    // borderRadius:16,
                                    objectFit: 'cover'
                                }}
                                width="100%"
                            />
                            <CardImgOverlay
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'  // Aligns content at the bottom
                                }}
                            >
                                <div className='icon-container'>
                                    <i class='bx bx-buildings bx-md' ></i>
                                </div>
                                <CardTitle tag="h4">
                                    Apartments Building <br /> Cleaning
                                </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 my-2'>
                        <Card inverse style={{ borderRadius: 16 }}>
                            <CardImg
                                alt="Card image cap"
                                src={frame18}
                                style={{
                                    maxHeight: 360,
                                    // borderRadius:16,
                                    objectFit: 'cover'
                                }}
                                width="100%"
                            />
                            <CardImgOverlay
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'  // Aligns content at the bottom
                                }}
                            >
                                <div className='icon-container'>
                                    <i class='bx bx-building bx-md' ></i>
                                </div>
                                <CardTitle tag="h4">
                                    Commertial Building
                                    <br /> Cleaning
                                </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='section-3'>
                <div class="container-2">
                    <p class="text-large text-center mx-5" style={{ color: "black" }}>
                        FAQs

                    </p>
                    <div class="text-small" style={{ color: "black" }}>
                        Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that.
                    </div>
                </div>
            </div>
            <FAQSection />

        </div>
    );
}

export default Homepage;
