
import "../cssfiles/Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

function Contact() {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_47fh35j', 'template_50yqeyl', form.current, '2MLFf8V2d9L8eokye')
        .then((result) => {
            console.log(result.text);
            console.log('message sent');
            toast.success("Message sent successfully");
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <>
                <div className="about-section">
                    <h2>Contact Us</h2>
                    <p>“Success is the sum of small efforts, repeated day in and day out.”.... leave us a message</p>
                </div>
                <div className="row">
                    <div className="column1">
                        <img src="images/about/About.jpg" style={{ width: '100%' }} />
                    </div>
                    <div className="column1">
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="fname"> Name</label>
                            <input type="text" id="fname" name="user_name" placeholder="Enter Name" />
                            <label htmlFor="lname">Email</label>
                            <input type="text" id="lname" name="user_email" placeholder="Enter Email" />
                            
                            <label htmlFor="subject">Message</label>
                            <textarea id="subject" name="message" placeholder="Write something.." style={{ height: 170 }} defaultValue={""} />
                            <input type="submit" defaultValue="Submit" />
                        </form>
                    </div>
                </div>

        </>
    )
}

export default Contact