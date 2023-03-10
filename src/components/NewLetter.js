import React from 'react'
import "../cssfiles/NewLetter.css"

function NewLetter() {
  return (
    <div>
        <div id="newletter" className="section-padding1">
        <div id="text_part">
            <h3>Sign Up For Newsletters</h3>
            <h6>
                Get E-mail updates about our lastest shop and
                <span> special offers.</span>
            </h6>
        </div>

        <form id="input-container">
            <input id="email_input" type="email" placeholder="Your email address" required />
            <button id="signup">Sign Up</button>
        </form>
    </div>

    </div>
  )
}

export default NewLetter