import React from 'react'
import "../cssfiles/Contact.css"

function Contact() {
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
                        <form>
                            <label htmlFor="fname"> Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label htmlFor="lname">Email</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your Email.." />
                            
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 170 }} defaultValue={""} />
                            <input type="submit" defaultValue="Submit" />
                        </form>
                    </div>
                </div>

        </>
    )
}

export default Contact