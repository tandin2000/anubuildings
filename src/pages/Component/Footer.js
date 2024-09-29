import React from 'react'
import './Footer.css'
import AwardImg from "../../images/award.png"
export default function Footer() {
  return (
    <div className='footer'>
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.8071899033594!2d-79.25765193038218!3d43.80961416599391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5031f51b33c09%3A0xa67a8fe6d42b912f!2sAnu%20building%20Services!5e0!3m2!1sen!2slk!4v1727453243355!5m2!1sen!2slk"
          width="640"
          height="250"
          style={{ border: 0}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
          <div className='contact' style={{justifyContent:'center', textAlign:'center'}}>
            <img src={AwardImg} height={250} width={220}/>
          </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
        <div className='footer-content-wrapper'>
          <div className='contact'>
            <span className='title '>CONTACT</span>
            <span><i class='bx bxs-phone' ></i> (647) 773-4356</span>
            <span><i class='bx bxs-envelope' ></i> info@anubuildingservices.com</span>
            <span><i class='bx bxs-map-pin' ></i> 5215, Finch Ave E Unit: 153,<br/> &nbsp;&nbsp;&nbsp; Scarborough, Ontario </span>
          </div>
          <div className='contact'>
            <span className='title '>SOCIAL MEDIA</span>
            <div className='social-icons'>
              <a href='' style={{ marginRight: 16 }}><i class='bx bxl-facebook-circle bx-sm'></i></a>
              <a href='' style={{ marginRight: 16 }}><i class='bx bxl-instagram-alt bx-sm' ></i></a>
              <a href='' style={{ marginRight: 16 }}><i class='bx bxl-tiktok bx-sm' ></i></a>
            </div><br />
          </div>
        </div>
        <div>
          <hr  style={{color:'white'}}/>
          <span style={{color:'white'}}>Anu Building Services © 2024</span>
          <br/>
          <span style={{color:'white', fontSize:14}}>Developed and Maintained by OrandBT</span>
        </div>
      </div>
      </div>
      )
}