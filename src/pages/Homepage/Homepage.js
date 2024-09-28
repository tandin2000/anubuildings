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

// Images for the carousel
import slide1 from '../../images/Hero-banner-1-anu.png';
import slide2 from '../../images/Hero-banner-2-anu.png';
import slide3 from '../../images/Hero-banner-3-anu.png';
import frame51 from '../../images/Frame51.png'
import frame12 from '../../images/Frame 12.png'
import frame17 from '../../images/Frame 17.png'
import frame18 from '../../images/Frame 18.png'
import FAQSection from '../Component/FAQ';
import Footer from '../Component/Footer';

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
                <div className="carousel-overlay" style={{maxWidth:920}}>
                    <p style={{ lineHeight: 1.2, fontWeight: 700, color: "white" }}>{item.caption} &nbsp;
                        <span
                        className='text-primary'
                         style={{ 
                             fontWeight: 700,
                             fontStyle: "italic",

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
            {/* Hero Carousel */}
            <div className='hero-carousel'>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}

                    {/* Custom carousel control buttons */}
                    <div className="carousel-custom-controls">
                        <button className="carousel-control-prev" onClick={next}>
                            <i class='bx bx-right-arrow-alt' ></i>{/* Boxicons left arrow */}
                        </button>
                        <button className="carousel-control-next" onClick={previous}>
                            <i class='bx bx-left-arrow-alt' ></i>{/* Boxicons right arrow */}
                        </button>
                    </div>
                </Carousel>
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
                <div className='header'>
                    <div className='title'>
                        Our Cleaning <br /> Services
                    </div>
                    <div className='content'>
                        Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve.
                        <br />
                        <br />
                        <Button color="primary" outline className="primary-btn">
                            Get Quote <i class='bx bx-right-arrow-alt' ></i>
                        </Button>
                    </div>
                </div>
                <div className='row card-container'>
                    <div className='col-lg-4 col-md-4 col-sm-1 my-2'>
                            <Card inverse style={{borderRadius:16}}>
                                <CardImg
                                    alt="Card image cap"
                                    src={frame12}
                                    style={{
                                        maxHeight: 360,
                                        // borderRadius:16,
                                        objectFit:'cover'
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
                                    <CardTitle tag="h5">
                                        Retail Store Cleaning
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-1 my-2'>
                            <Card inverse style={{borderRadius:16}}>
                                <CardImg
                                    alt="Card image cap"
                                    src={frame17}
                                    style={{
                                        maxHeight: 360,
                                        // borderRadius:16,
                                        objectFit:'cover'
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
                                    <CardTitle tag="h5">
                                        Apartments Building Cleaning
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-1 my-2'>
                            <Card inverse style={{borderRadius:16}}>
                                <CardImg
                                    alt="Card image cap"
                                    src={frame18}
                                    style={{
                                        maxHeight: 360,
                                        // borderRadius:16,
                                        objectFit:'cover'
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
                                    <CardTitle tag="h5">
                                        Commertial Building Cleaning
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                    </div>
                </div>
            </div>
            <div className='section-3'>
                <div className='header'>
                    <div className='title'>
                        FAQs
                    </div>
                    <div className='content'>
                    Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that.
                    </div>
                </div>
            </div>
            <FAQSection />
            
        </div>
    );
}

export default Homepage;
