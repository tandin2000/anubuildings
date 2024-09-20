import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import 'boxicons/css/boxicons.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faBroom,
    faArrowUpRightDots,
} from '@fortawesome/free-solid-svg-icons';
import HeroImage1 from '../../assets/images/Hero-banner-1.png';
import HeroImage2 from '../../assets/images/Hero-banner-2.png';
import Logo from '../../assets/images/anulogo 1.png';
import About from '../About';
import ContactUs from '../ContactUs';
import Homepage from '../Homepage';
import Services from '../Services';

const avatars = [
    { id: 1, src: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, src: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, src: "https://randomuser.me/api/portraits/men/3.jpg" }
];

export default function Layout() {
    return (
        <Router>
            <div className="page-wrapper">
                <div className="left-sider">
                    <nav className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-3">
                                <NavLink 
                                    exact="true" 
                                    className="nav-link" 
                                    activeClassName="active" 
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink 
                                    className="nav-link" 
                                    activeClassName="active" 
                                    to="/about"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink 
                                    className="nav-link" 
                                    activeClassName="active" 
                                    to="/services"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink 
                                    className="nav-link" 
                                    activeClassName="active" 
                                    to="/contacts"
                                >
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="content">
                        <img src={Logo} alt='' className='logo' />
                        <h4 className="text-subtitle">ESTABLISHED SINCE 1964</h4>
                        <h1 className="display-4">Professional <br /> Cleaning Services</h1>
                        <p className='hero-text'>
                            We strive to be the best in the cleaning industry by maintaining high standards. Trust in our cleaning crew is essential, and our rigorous training program ensures that each team member understands their role and contributes to overall performance.
                        </p>
                        <div className='button-container'>
                            <button className="btn contact-btn">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='px-2' />
                                <span className='px-2'>Contact Now</span>
                            </button>
                            <div className="reviews-container">
                                <div className="avatar-list">
                                    {avatars.map((avatar) => (
                                        <img key={avatar.id} src={avatar.src} alt="avatar" className="avatar" />
                                    ))}
                                    <div className="reviews-count">
                                        <span>3K</span>
                                    </div>
                                </div>
                                <div className="reviews-text">Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-sider">
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contacts" element={<ContactUs />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
