import React from 'react'
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'
import about1 from '../../images/Group 7.png'
import about2 from '../../images/Group 8.png'
import about3 from '../../images/Group 17.png'
import about4 from '../../images/Group 10.png'
// import other images if necessary
import 'boxicons'; // Ensure you have Boxicons imported

export default function AboutUs() {
    return (
        <>
            <div className='section-5' style={{ marginBottom: 20 }}>
                <div className='section-2'>
                    <div className='header new-service' style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Sora' }}>
                        <div className='title text-light'>
                            About Us
                        </div>
                        <div className='content text-light' style={{ paddingBottom: 120 }}>
                            At Anu Building Services Inc. our first priority is the satisfaction of our customers. Anu Building Services Inc. provides maintenance and cleaning service in a professional and detailed manner. We provide janitorial service and maintenance for condominiums, apartments, commercial buildings, retail stores, etc. We specialize in carpet steam wash, waxing floors, and underground parking lot power wash. We offer detailed cleaning services as well as full-time employees for maintenance. Since 2012, we have expanded and made many long-term relationships. Our customers’ satisfaction has remained one of our biggest achievements. We continue to build good relationships and continue our long-term relationship with our existing clients.
                        </div>
                    </div>
                </div>
                <div className='row card-container' style={{ marginTop: -60 }}>
                    <div className='col-lg-3 col-md-3 col-sm-12 my-2'>
                        <Card inverse>
                            <CardImg
                                alt="Client oriented"
                                src={about1}
                                style={{
                                    maxHeight: 480,
                                    objectFit: 'cover'
                                }}
                                width="100%"
                            />
                            <CardImgOverlay
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <div className='icon-container'>
                                    <i className='bx bx-user bx-md'></i> {/* Client oriented */}
                                </div>
                                <CardTitle tag="h5">
                                    Client Oriented
                                </CardTitle>
                                <CardText>
                                    We serve our clients as if we were serving ourselves. We value their feedback and we use it to improve our work.
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 my-2'>
                        <Card inverse>
                            <CardImg
                                alt="Eco-Friendly Oriented"
                                src={about2}
                                style={{
                                    maxHeight: 480,
                                    objectFit: 'cover'
                                }}
                                width="100%"
                            />
                            <CardImgOverlay
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <div className='icon-container'>
                                    <i className='bx bx-leaf bx-md'></i> {/* Eco-Friendly */}
                                </div>
                                <CardTitle tag="h5">
                                    Eco-Friendly Oriented
                                </CardTitle>
                                <CardText>
                                    We carefully choose the best and most natural cleaning products that give amazing results.
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 my-2'>
                        <Card inverse>
                            <CardImg
                                alt="Excellence and Innovation"
                                src={about3}
                                style={{
                                    maxHeight: 480,
                                    objectFit: 'cover'
                                }}
                                width="100%"
                            />
                            <CardImgOverlay
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <div className='icon-container'>
                                    <i className='bx bx-award bx-md'></i> {/* Excellence */}
                                </div>
                                <CardTitle tag="h5">
                                    Excellence and Innovation
                                </CardTitle>
                                <CardText>
                                    We provide training to our personnel to ensure the high standard of service. We stay up-to-date on the latest innovations in eco-friendly products and technologies, allowing us to bring the best to our clients’ homes.
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 my-2'>
                        <Card inverse>
                            <CardImg
                                alt="Growth"
                                src={about4}
                                style={{
                                    maxHeight: 480,
                                    objectFit: 'cover'
                                }}
                                width="100%"
                            />
                            <CardImgOverlay
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <div className='icon-container'>
                                    <i className='bx bx-line-chart bx-md'></i> {/* Growth */}
                                </div>
                                <CardTitle tag="h5">
                                    Growth
                                </CardTitle>
                                <CardText>
                                    We make ourselves known in the community; we create long-term relations, while constantly expanding. Therefore, we are always bringing in more people to work for us.
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
