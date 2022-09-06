import React,{ useRef } from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com'

import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p1twplq', 'template_9va7rf4', form.current, 'XM_hMf6hr3LEtM7bT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
    <Header title="Get In Touch" image ={HeaderImage}>
    You can contact us by calling on the numbers given below or by sending us a message via our contact form. 
    </Header>
    <section className="contact">
      <div className="container contact__container">
      <div className="contact__options">
          <article className="contact__option">
            <h4>Computer Showroom</h4>
            <p>Nr. Rajmandir Fast Food, Astron Chowk, Tagore Road, Rajkot - 360001 (Gujarat)(India)</p>
            <p>0281-2464241 0281-2464042</p>
            <p>cpointonline@gmail.com</p>
          </article>
          <article className="contact__option">
            <h4>Shree Sava Support/Sales</h4>
            <p>Tulsidham, 11/14 Sardarnagar, Street Opp. Pujara Telecom, Rajkot - 360001 (Gujarat)(India)</p>
            <p>0281-2462616 +919898416709</p>
          </article>
          <article className="contact__option">
            <h4>Socials</h4>
            <a href="mailto:cpointonline@gmail.com" target="_blank" rel = "noreferrer noopener"><MdEmail/></a>
            <a href="https://m.me/cpointonline" target="_blank" rel = "noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+919879516709" target="_blank" rel = "noreferrer noopener"><IoLogoWhatsapp/></a>
          </article>
        </div>
        
              
            
          
        <div className="contact__wrapper">
          <div className="container textarea">To contact us, use the information on the left sidebar or simply fill our the form below to send us a message. All fields are required. We’ll get back to you as soon as possible. Pinky swear!</div>
          <div className="emptyContainer"></div>
          <form ref={form} onSubmit={sendEmail} className='form'>
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" className="email" placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
          
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact