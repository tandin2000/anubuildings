import React, { useState } from 'react';
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


import AboutImg from '../../assets/images/about-us.jpeg';
import Logo from '../../assets/images/anulogo 1.png'

const avatars = [
    { id: 1, src: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, src: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, src: "https://randomuser.me/api/portraits/men/3.jpg" }
];


export default function About() {
    return (

        <>
                            <div className="section-5">
                        <img src={AboutImg} alt=''/>
                    </div>
                <div className='section-6' >
                    <div className="content section-4" >
                        <h2 className="content-title">About Us</h2>
                        <p className="content-description">
                            Minim officia ipsum laboris voluptate officia dolore minim excepteur nulla ea proident incididunt incididunt. Nulla exercitation aliquip sint dolore nostrud amet tempor proident. Enim eiusmod sit ex ex veniam ut aliqua nostrud in aliquip sunt amet aliquip minim.
                            Minim officia ipsum laboris voluptate officia dolore minim excepteur nulla ea proident incididunt incididunt. Nulla exercitation aliquip sint dolore nostrud amet tempor proident. Enim eiusmod sit ex ex veniam ut aliqua nostrud in aliquip sunt amet aliquip minim.
                            Minim officia ipsum laboris voluptate officia dolore minim excepteur nulla ea proident incididunt incididunt. Nulla exercitation aliquip sint dolore nostrud amet tempor proident. Enim eiusmod sit ex ex veniam ut aliqua nostrud in aliquip sunt amet aliquip minim.
                        </p>
                    </div>
                </div>
        </>
           
    )
}
