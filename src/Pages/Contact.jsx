import React from "react";
import "../CSS/Contact.css";
import contact from "../assets/contact.png";
import fish from '../assets/fish.png'
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function Contact() {
    return (
        <>
            <section className="contact-banner">
                <img src={fish} alt="" />
                <div className="ban-content">
                    <h1>Contact</h1>
                    <h2>
                        <Link to='/'>Home</Link>
                        <FaAngleRight />
                        <Link to='/contact'>Contact</Link>
                    </h2>
                </div>

            </section>



            <section className="contact-page">
                <div
                    className="contact-left"
                    style={{ backgroundImage: `url(${contact})` }}>
                    <div className="contact-info-overlay">
                        <h2>Trusted by Aquaculturists Across India</h2>
                        <p>
                            Delivering quality aquaculture healthcare solutions since 2010 —
                            sustainable, reliable, and science-backed.
                        </p>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h1>Get in Touch</h1>
                    <p className="intro-text">
                        We’re here to support your aquaculture journey. Reach out today!
                    </p>

                    <form className="contact-form">
                        <div className="contact-top">
                            <h2>Send Your Inquiry</h2>
                            <p>We respond within 24 hours</p>

                        </div>

                        <div className="con-form">

                            <label>
                                Full Name *
                                <input type="text" placeholder="Enter your full name" required />
                            </label>

                            <label>
                                Email Address *
                                <input type="email" placeholder="you@example.com" required />
                            </label>

                            <label>
                                Phone Number *
                                <input type="tel" placeholder="10-digit mobile number" required />
                            </label>

                            <label>
                                Message (Optional)
                                <textarea
                                    placeholder="Tell us about your aquaculture needs..."
                                    rows="4"
                                />
                            </label>

                            <button type="submit">Send Message →</button>
                        </div>
                    </form>

                    <small>Your trust, our commitment to sustainable aquaculture.</small>
                </div>
            </section>
        </>
    );
}

export default Contact;
