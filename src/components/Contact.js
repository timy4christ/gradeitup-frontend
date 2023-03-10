import React from 'react'
import "../cssfiles/Contact.css"

function Contact() {
    return (
        <>
                <div className="about-section">
                    <h2>Contact Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message</p>
                </div>
                <div className="row">
                    <div className="column1">
                        <img src="images/about/918201095957.jpg" style={{ width: '100%' }} />
                    </div>
                    <div className="column1">
                        <form>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                <option value="india">India</option>
                            </select>
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