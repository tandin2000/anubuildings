import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';
import Logo from '../../images/logo 1.png';
import './Layout.css';  // Add custom CSS for layout
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import Homepage from '../Homepage/Homepage';
import MasonryGrid from '../Services/Services';
import ServiceRequestForm from '../ServiceRequest/ServiceRequest';
import Footer from '../Component/Footer';
import AboutUs from '../AboutUs/AboutUs';

import Lottie from 'react-lottie-player';

import lottieJson from '../../lottie/animation.json';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/'); // Default active link
    const [isLoading, setIsLoading] = useState(true); // New state to manage loader

    const toggle = () => setIsOpen(!isOpen);
    const handleNavClick = (path) => {
        setActiveLink(path); // Set the clicked link as active
    };

    // Run the loader for 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide loader after 5 seconds
        }, 3000);

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, []);

    return (
        <Router>
            <div>
                {/* Show Loader when loading, otherwise show the page */}
                {isLoading ? (
                    <div className="loader-container" style={loaderContainerStyle}>
                        <Lottie
                            loop
                            animationData={lottieJson}
                            play
                            style={{ width: 150, height: 150 }}
                        />
                    </div>
                ) : (
                    <>
                        {/* Topbar */}
                        <div className='topbar'>
                            <div>info@anubuildingservices.com</div>
                            <div className='topbar-social-icons'>
                                <i className='bx bxl-facebook-circle'></i>
                                <i className='bx bxl-tiktok'></i>
                                <i className='bx bxl-instagram-alt'></i>
                            </div>
                        </div>

                        {/* Navbar */}
                        <Navbar expand="lg" className='nav-bar-wrapper'>
                            <NavbarBrand href="/">
                                <img alt="logo" src={Logo} className='nav-bar-logo' />
                            </NavbarBrand>
                            <NavbarToggler onClick={toggle} className="custom-toggler">
                                <i className='bx bx-menu-alt-right'></i>
                            </NavbarToggler>
                            <Collapse isOpen={isOpen} navbar className="mobile-collapse">
                                <Nav className="me-auto nav-center" navbar >
                                    <NavItem>
                                        <NavLink
                                            tag={Link}
                                            to="/"
                                            onClick={() => handleNavClick('/')}
                                            className={activeLink === '/' ? 'active' : ''}
                                        >Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            tag={Link}
                                            to="/services"
                                            onClick={() => handleNavClick('/services')}
                                            className={activeLink === '/services' ? 'active' : ''}
                                        >Services</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            tag={Link}
                                            to="/about-us"
                                            onClick={() => handleNavClick('/about-us')}
                                            className={activeLink === '/about-us' ? 'active' : ''}
                                        >About Us</NavLink>
                                    </NavItem>
                                </Nav>
                                <div className="bottom-items">
                                    <NavbarText className="contact-number mx-3 text-light">(647) 773-4356</NavbarText>
                                    <NavbarText>
                                        <Button outline className="light-btn" tag={Link} to="/get-quote">
                                            Get Quote
                                        </Button>
                                    </NavbarText>
                                </div>
                            </Collapse>
                        </Navbar>

                        {/* Define Routes */}
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/services" element={<MasonryGrid />} />
                            <Route path="/get-quote" element={<ServiceRequestForm />} />
                            <Route path="/about-us" element={<AboutUs />} />
                        </Routes>

                        <Footer />
                    </>
                )}
            </div>
        </Router>
    );
}

// Loader container styling
const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#040D43',
};

export default Layout;
