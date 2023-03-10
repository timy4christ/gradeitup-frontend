import React from "react";
import "../cssfiles/Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer-container section-padding1">
        <div className="col">
          <h3>Contact</h3>
          <p>
            <strong>Address:</strong> VIVEK COMPLEX, #114, Sadar Patrappa Rd,
            Karnataka 560002
          </p>
          <p>
            <strong>Phone:</strong> +123-456-7890 / +123-986-7190
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 21:00 Mon-Sat
          </p>
          <div className="follow">
            <h3>Follow Us</h3>
            <div className="icons">
              <Link to={"#"} className="fab fa-facebook-f"></Link>
              <Link to={"#"} className="fab fa-twitter"></Link>
              <Link to={"#"} className="fab fa-instagram"></Link>
              <Link to={"#"} className="fab fa-linkedin"></Link>
              <Link to={"#"} className="fab fa-pinterest"></Link>
            </div>
          </div>
        </div>

        <div className="col">
          <h3>Quick Links</h3>
          <Link to={"/home"}>Home </Link>
          <Link to={"/order_online"} >Order Online</Link>
          <Link to={"/about"}>About Us </Link>
          <Link to={"/contactus"}>Contact </Link>
        </div>

        {/* <div className="col">
          <h3>Install Apps</h3>
          <p>From App Store or Google Store</p>
          <div className="row">
            <img src="images/pay/app.jpg" alt="" />
            <img src="images/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateway</p>
          <img src="images/pay/pay.png" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
