import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import 'boxicons/css/boxicons.min.css';
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faBroom,
    faArrowUpRightDots,
    faPaperPlane
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


export default function ContactUs() {
    const [formData, setFormData] = useState({
        email: '',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form data submitted:', formData);
    };
    return (

        <>
            <div className='section-4'>
                <div>
                    <iframe
                        title="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.3428138627805!2d-123.07703634232789!3d49.25094790000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676ab24e5df7b%3A0x65bc9ca4805a59a2!2s1345%20Kingsway%2C%20Vancouver%2C%20BC%20V5V%203E3%2C%20Canada!5e0!3m2!1sen!2slk!4v1719682818698!5m2!1sen!2slk"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className='contact-info'>
                    <div className='contact-item layer-background-color'>
                        <div className='key'>Office</div>
                        <div className='value'>
                            5215, Finch Ave E Unit:153,
                            <br />
                            Scarborough, Ontario.
                            <br />
                            M1S0C2
                        </div>
                    </div>
                    <div className='contact-item'>
                        <div className='key'>Phone 24/7</div>
                        <div className='value'>
                            (647) 773-4356
                        </div>
                    </div>
                    <div className='contact-item layer-background-color'>
                        <div className='key'>Opening</div>
                        <div className='value'>
                            Mon-Fri: 9:00 am – 5:00 pm
                            <br />
                            Sat 9:00 am – 1:00 pm
                        </div>
                    </div>

                </div>
            </div>
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-description">
                    We strive to be the best in the cleaning industry by maintaining high standards. Trust in our cleaning crew is essential, and our rigorous training program ensures that each team member understands their role and contributes to overall performance.
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your inquiry"
                        required
                    ></textarea>
                    <button type="submit" className="contact-btn-2">
                    <FontAwesomeIcon icon={faPaperPlane} />
                        Contact Now
                    </button>
                </form>
            </div>

        </>

    )
}
