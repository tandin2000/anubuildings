import React from 'react'
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'
import frame12 from '../../images/Frame 12.png'
import frame17 from '../../images/Frame 17.png'
import frame18 from '../../images/Frame 18.png'
import about1 from '../../images/Group 7.png'
import about2 from '../../images/Group 8.png'
import about3 from '../../images/Group 9.png'
import about4 from '../../images/Group 10.png'

export default function AboutUs() {
    return (
        <>
            <div className='section-5' style={{ marginTop: 160, marginBottom:20 }}>
                <div className='header'>
                    <div className='title'>
                        About Us
                    </div>
                    <div className='content'>
                        At Anu Building Services Inc. our first priority is the satisfaction of our customers. Anu Building Services Inc. provides maintenance and cleaning service in a professional and detailed manner. We provide janitorial service and maintenance for condominiums, apartments, commercial buildings, retail stores, etc. We specialize in carpet steam wash, waxing floors and underground parking lot power wash. We offer detailed cleaning services as well as fulltime employees for maintenance. Since 2012, we have expanded and made many long-term relationships. Our customers’ satisfaction has remained one of our biggest achievement. We continue to build good relationship and continue our long-term relationship with our existing clients.
                        <br />
                        <br />
                        <Button color="primary" outline className="primary-btn">
                            Get Quote <i class='bx bx-right-arrow-alt' ></i>
                        </Button>
                    </div>
                </div>
                <div className='row card-container'>
                    <div className='col-lg-3 col-md-3 col-sm-1 my-2'>
                        <Card inverse style={{ borderRadius: 16 }}>
                            <CardImg
                                alt="Card image cap"
                                src={about1}
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
                                    justifyContent: 'flex-start'  // Aligns content at the bottom
                                }}
                            >
                                <CardTitle tag="h5">
                                Client oriented
                                </CardTitle>
                                <CardText>
                                We serve our clients as if we were serving ourselves. We value their feedback and we use it to improve our work.
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-1 my-2'>
                        <Card inverse style={{ borderRadius: 16 }}>
                            <CardImg
                                alt="Card image cap"
                                src={about2}
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
                                    justifyContent: 'flex-start'  // Aligns content at the bottom
                                }}
                            >
                                <CardTitle tag="h5">
                                Eco-Friendly Oriented
                                </CardTitle>
                                <CardText>
                                We carefully choose the best and most natural cleaning products that give amazing results
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-1 my-2'>
                        <Card inverse style={{ borderRadius: 16 }}>
                            <CardImg
                                alt="Card image cap"
                                src={about4}
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
                                    justifyContent: 'flex-start'  // Aligns content at the bottom
                                }}
                            >
                                <CardTitle tag="h5">
                                Excellence and Innovation
                                </CardTitle>
                                <CardText>
                                We provide training to our personnel in order to ensure the high standard of service. We stay up-to-date on the latest innovations in eco-friendly products and technologies, allowing us to bring the best in to our clients’ homes.
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-1 my-2'>
                        <Card inverse style={{ borderRadius: 16 }}>
                            <CardImg
                                alt="Card image cap"
                                src={about3}
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
                                    justifyContent: 'flex-start'  // Aligns content at the bottom
                                }}
                            >
                                <CardTitle tag="h5">
                                Growth
                                </CardTitle>
                                <CardText>
                                We make ourselves known in the community; we create long term relations, while constantly expanding. Therefore, we are always bringing in more people to work for us
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
