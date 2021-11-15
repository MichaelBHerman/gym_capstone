import React from 'react';


function Contact() {
    return(
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form action="https://formsubmit.co/mikebherman6@gmail.com" method='POST'>
                <input type='hidden' name='_subject' value='New Inquiry for IronGround Gym'/>
                <input type='text' placeholder='Full Name' required/>
                <input type='email' placeholder='Enter Your Email Address' required/>
                <textarea placeholder='Write your message here......' name='message'></textarea>
                <input type='submit' value='Send'/>
            </form>
        </div>
    )
}
export default Contact;