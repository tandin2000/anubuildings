import React, { useState } from 'react';
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

import Homepage from '../Homepage/Homepage';
import MasonryGrid from '../Services/Services';
import ServiceRequestForm from '../ServiceRequest/ServiceRequest';
import Footer from '../Component/Footer';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Router>
            <div>
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
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about-us">About Us</NavLink>
                            </NavItem>
                        </Nav>
                        <div className="bottom-items">
                            <NavbarText className="contact-number mx-3">(647) 773-4356</NavbarText>
                            <NavbarText>
                                <Button color="primary" outline className="primary-btn" tag={Link} to="/get-quote">
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
                    {/* Add other routes as needed */}
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default Layout;
