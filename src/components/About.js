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
                    Renowned for its simple and fresh comfort food, ’s is dedicated to
                    defending the Indian table and its traditions with thoughtful
                    ingredient sourcing and an “off the commercial food grid”
                    philosophy. The mission has remained the same from that first day–
                    to welcome each and every person as though they are guests in our
                    home, to raise the awareness of the beauty of Indian food - its
                    ethnic contributions and regional and geographic abundance, and to
                    celebrate the patchwork of indian culture. ’s wants people to know
                    where their food came from, who grew it and what is good about it.
                    Indian cuisine is much more than Butter Chicken and Palak Paneer;
                    it's Chinese, Mexican, Southern, an elaborate and flavorful food
                    scape created by the generations of people who built India. 27 years
                    ’s has been cooking and baking in a way that is thoughtful, healthy
                    and most importantly, delicious!
                </p>
            </div>
            <h2 className="about-section">Our Speciality</h2>
            <div className="speciality">
            <div className="c-card">
                    <img
                        src="images/about/dal-baati-churma.jpg"
                        alt="dal-baati-churma"
                        style={{ width: "100%" }}
                    /> 
                    {/* images/food/malabar.jpg */}
                    <div className="container">
                        <h2>Dal-Baati-Churma</h2>
                        <p className="title">
                            It is made of three components of bati, dal, and churma. Dal
                            is lentils, bati is a baked wheat ball, and churma is powdered
                            sweetened cereal.
                        </p>
                    </div>
                </div>
                <div className="c-card">
                    <img
                        src="images/about/fish-curry.jpg"
                        alt="fish-curry"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Fish-Curry</h2>
                        <p className="title">
                            This spicy dish is a scintillating stew of curry cooked with
                            vegetables, tamarind and coconut milk, giving it a rich,
                            nuanced flavour.
                        </p>
                    </div>
                </div>
                <div className="c-card">
                    <img
                        src="images/about/kosha-mangsho.jpg"
                        alt="kosha-mangsho"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Kosha-Mangsho</h2>
                        <p className="title">
                            Mutton curry (also referred to as kosha mangsho, lamb curry,
                            or goat curry) is a dish that is prepared from goat meat (or
                            sometimes lamb meat) and vegetables.
                        </p>
                    </div>
                </div>

                <div className="c-card">
                    <img
                        src="images/about/litti-chowkha.jpg"
                        alt="litti-chowkha"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Litti-Chowkha</h2>
                        <p className="title">
                            Litti Chokha is a traditional snack food found in India's Bihar
                            state. It basically consists of wheat and sattu. Litti Chokha of
                            Bihar was originated centuries ago as a staple food in the court
                            of Magadha.
                        </p>
                    </div>
                </div>
                <div className="c-card">
                    <img
                        src="images/about/makki-de-roti.jpg"
                        alt="makki-de-roti"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Makki-de-Roti</h2>
                        <p className="title">
                            Sarson ka Saag te Makki ki Roti is a signature delicacy of
                            Punjab. This delicious and nutrient rich combination is prepared
                            during the winters, especially on the occasion of the festival
                            of Lohri.
                        </p>
                    </div>
                </div>
                <div className="c-card">
                    <img
                        src="images/about/rogan-josh.jpg"
                        alt="rogan-josh"
                        style={{ width: "100%" }}
                    />
                    <div className="container">
                        <h2>Rogan-Josh</h2>
                        <p className="title">
                            Rogan josh consists of pieces of lamb or mutton braised with a
                            gravy flavoured with garlic, ginger and aromatic spices (clove,
                            bay leaves, c-cardamom, and cinnamon), and in some versions
                            incorporating onions or yogurt.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About;
