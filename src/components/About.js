import React from "react";
import "../cssfiles/About.css";

function About() {
    return (
        <>

            <div className="about-section">
                <h1>About Us</h1>
            </div>
            <div className="about-section1">
                <h3>Since 1990</h3>
            </div>
            <div className="about-section1">
                <p>
                    GrdeItUp streamlines the submission, review, and grading of assignments, allowing students to submit their work via a GitHub URL and track their progress.
                    Code reviewers can claim and review assignments, leave feedback and post comments on assignment.
                    The system generates reports to track student progress in different subjects and sends automatic notifications to code reviewers and students.
                    The project aims to improve communication and collaboration between students and code reviewers,
                    ultimately designed to help users to effectively manage and,
                    track the progress of assignments enhancing the learning experience for all parties involved.
                </p>
            </div>
            <h2 className="about-section">Our Aspect</h2>
            <div className="speciality">
            <div className="c-card">
                    <img
                        src="images/about/Aboutus.jpg"
                        alt="dal-baati-churma"
                        style={{ width: "100%" }}
                    /> 
                    {/* images/food/malabar.jpg */}
                    <div className="container">
                        <h2>Set your study goals; then realise them</h2>
                        <p className="title">
                            “Success is no accident. It is hard work, perseverance, learning, studying, 
                        sacrifice and most of all, love of what you are doing or learning to do.” 
                        </p>
                    </div>
                </div>
                <div className="c-card">
                    <img
                        src="images/about/tree.jpg"
                        alt="fish-curry"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Don’t give in </h2>
                        <p className="title">
                            “People always say that I didn’t give up my seat because I was tired,
                            but that isn’t true. I was not tired physically…
                            No, the only tired I was, was tired of giving in.”
                        </p>
                    </div>
                </div>
                <div className="c-card">
                    <img
                        src="images/about/book.jpg"
                        alt="kosha-mangsho"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Hard work matters</h2>
                        <p className="title">
                        Work hard for what you want because it won't come to you without a fight.
                            You have to be strong and courageous and know that you can do anything you put your mind to.
                            If somebody puts you down or criticizes you,just keep on believing in yourself and turn,
                            it into something positive.
                        </p>
                    </div>
                </div>

                <div className="c-card">
                    <img
                        src="images/about/late-night.jpg"
                        alt="litti-chowkha"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Find your “thing”</h2>
                        <p className="title">
                        However difficult life may seem, there is always something you can do and succeed at.
                        </p>
                    </div>
                </div>
                <div className="c-card">
                    <img
                        src="images/about/light.jpg"
                        alt="makki-de-roti"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Recipe for success</h2>
                        <p className="title">
                            “Recipe for success: Study while others are sleeping;
                            work while others are loafing;
                            prepare while others are playing;
                            and dream while others are wishing.”
                        </p>
                    </div>
                </div>
                <div className="c-card">
                    <img
                        src="images/about/Aboutus2.jpg"
                        alt="rogan-josh"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Focus</h2>
                        <p className="title">
                            Choose to focus your time, energy and conversation around people who inspire you,
                            support you and help you to grow you into your happiest, strongest, wisest self.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About;
