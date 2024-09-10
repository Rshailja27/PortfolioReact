import React from 'react';
import './ContactMe.css'; // Ensure this path is correct for your project

function ContactMe({ themeMode }) {
  return (
    <div id='contactme' className={`contact-me ${ themeMode }`}>
      <div className="heading">
        <div className="h1">
          <h1 style={{ fontSize: '2rem' }}>Contact Me</h1>
        </div>
        <div className='underline'></div>
      </div>
      <div className="contactUs-form">
          <form >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.." />

            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="lastname" placeholder="someone@something.com" />
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message.." style={{height:"56px"}}></textarea>

            <div class="submit-container">
                <button type='submit' class="submit-button">Submit</button>
            </div>
          </form>
        
      </div>
    </div>
  );
}

export default ContactMe;
