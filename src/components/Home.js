import React from "react";
import "../cssfiles/Home.css"

function Home() {
  return (
    <div>
      {/* hero section */}
      <div id="hero-section" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#hero-section"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#hero-section"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-item active c-item">
            <img
              src="images/hero/study.jpg"
              className="d-block w-100 c-img"
              alt="..."
            />
          </div>
          <div className="carousel-item c-item">
            <img
              src="images/hero/study2.jpg"
              className="d-block w-100 c-img"
              alt="..."
            />
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hero-section"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hero-section"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      {/* story section */}
      <div className="story" style={{
        background: "url(images/story/1.jpg)",
        backgroundAttachment: "fixed"
      }}>
        <div>
          <img src="images/story/story1.jpg" alt="" />
          <img src="images/story/story2.jpg" alt="" />
        </div>
        <div className="story-cntx">
          <h1>Our Story</h1>
          <p>
            <small>
              ABC is a pure home based restaurant serving delicious food
              cooked with freshest ingredients. Over the years the brand is
              recognized for its uncompromising levels in food & service.
            </small>
          </p>
          <h4>
            <i>
              Whisper to us about your feelings, and we will prepare what you
              need now.
            </i>
          </h4>
          <button className="button">DISCOVER MORE</button>
        </div>
      </div>

      {/* banner section */}
      <div className="banner" style={{
        background: "url(images/banner/1.jpg)"
      }}>
        <h3>
          <span className="text first-text">Your Students Deserve an </span>
          <span className="text second-text">Exceptional Education Experience</span>
        </h3>
        <p>
          Combining Best-in-Tech Solutions to Power Your Success
        </p>
        <button className="button">LOGIN NOW</button>
      </div>
    </div>
  );
}

export default Home;
