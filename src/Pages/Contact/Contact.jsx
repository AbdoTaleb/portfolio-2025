import React from 'react'
import './Contact.scss'
import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


function Contact() {
    const [animate, setAnimate] = useState(false); 
        useEffect(() => {
            const timer = setTimeout(() => {
                setAnimate(true);  
            }, 100); 
            return () => clearTimeout(timer);
        }, []);

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            e.target,
            PUBLIC_KEY
            )
            .then((result) => {
            console.log(result.text);
            alert('Message sent!');
            })
            .catch((error) => {
            console.log(error.text);
            alert('Failed to send message.');
            });

            e.target.reset();
        };
  return (
    <section className={`contact-page ${animate ? 'animate' : ''}`}>

        <div className="background-overlay"></div>

        <div className='left-container'>
            <div className='left-side-contact fade-in'>
            <h1 className='Hello-word'>Hello.</h1>
            <p>Want a website that not only looks stunning but actually works?</p>
            <p>I turn ideas into real, responsive web experiences. Let’s talk.</p>
            </div>
            <div className='contact-links'>
            <p>Email: <a href="mailto:abdo.taleb1@hotmail.com">abdo.taleb1@hotmail.com</a></p>
            <p>
                On the Internet:
                <a href="https://www.linkedin.com/in/abdo-taleb/" target="_blank" rel="noreferrer">LinkedIn</a> /
                <a href="https://github.com/AbdoTaleb" target="_blank" rel="noreferrer">GitHub</a>
            </p>
            </div>
        </div>
        <div className='right-side-contact fade-in'>
            <h2>Contact Me</h2>
            <p>If you have any questions, feedback, or just want to say hello, feel free to reach out!</p>
            <form onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message</label><br />
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact