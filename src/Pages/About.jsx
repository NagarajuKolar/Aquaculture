import React from 'react'
import '../CSS/About.css'
import { FaCheckCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { HiDesktopComputer } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { MdFactory } from "react-icons/md";

function About() {
    return (
        <>
            <section className="banner-top">
                <div className="banner-content">
                    <span className="est-badge">EST. 2010</span>
                    <h1>MEENAM AQUA</h1>
                    <p>Pioneering Aquaculture Healthcare for Sustainable, Healthy Aquatic Ecosystems Across India</p>
                </div>
            </section>

            <section className="about-sec">
                <h2 className="vision-title">OUR VISION FOUNDER</h2>
                <div className="underline"></div>

                <div className="vision-card">
                    <p>
                        With over <span className="highlight">30 years of expertise</span> in
                        aquaculture and engineering, established{" "}
                        <span className="highlight">MEENAM AQUA NEEDS</span> in 2010 as a
                        beacon of innovation and sustainability in India's aquaculture
                        industry.
                    </p>
                    <p>
                        His visionary leadership continues to drive our mission of delivering{" "}
                        <span className="link">science-backed</span>,{" "}
                        <span className="link">eco-conscious solutions</span> that empower
                        farmers and protect aquatic life for generations to come.
                    </p>
                </div>

                <div className="info-grid">
                    <div className="info-card">
                        <div className="icon-box">
                            <FaCheckCircle />
                        </div>
                        <div>
                            <h4>30+ Years Expertise</h4>
                            <p>Decades of industry leadership and innovation</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="icon-box">
                            <IoLocationSharp />
                        </div>
                        <div>
                            <h4>Telangana Innovation Hub</h4>
                            <p>
                                State-of-the-art facilities driving aquaculture advancement
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mis-vis">
                <div className="mission-container">
                    <h2>Our Mission &amp; Values</h2>
                    <p className="subtitle">
                        Driving innovation with sustainable practices and premium products
                    </p>

                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="icon-box">
                                <HiDesktopComputer />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To deliver high-performance aquaculture products that ensure healthier
                                ponds, happier fish/shrimp, and thriving farms across India.
                            </p>
                        </div>

                        <div className="mission-card">
                            <div className="icon-box">
                                <FaCheck />
                            </div>
                            <h3>Company Policy</h3>
                            <p>
                                Committed to manufacturing top-quality products with a focus on
                                sustainability and responsible aquaculture practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="manufacture">
                <div className="manufacture-header">
                    <h2>Manufacturing Excellence</h2>
                    <p>State-of-the-art production units with cutting-edge technology</p>
                </div>

                <div className="manufacture-grid">
                    <div className="unit-card">
                        <h3><MdFactory /> Unit I: Minerals & Supplements</h3>

                        <div className="info-box">
                            <h4>Products</h4>
                            <p>Minerals, Disinfectants and Feed Supplements</p>
                        </div>

                        <div className="info-box">
                            <h4>Address</h4>
                            <p>
                                D-No.4-60/4, Plot No.114, Bahadurpally, Dundigal-Gandimaisamma
                                (Mandal), Medchal-Malkajgiri (Dist) Telangana - 500043
                            </p>
                        </div>


                        <div className="map-box">
                            <iframe
                                title="Unit I Map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15214.445996795634!2d78.431244!3d17.573674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fbdc336e94d%3A0xc31e3d1d8b0d22d1!2sMEENAM%20AQUA%20NEEDS!5e0!3m2!1sen!2sin!4v1760783007646!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="unit-card">
                        <h3><MdFactory /> Unit II: Probiotics</h3>

                        <div className="info-box">
                            <h4>Products</h4>
                            <p>Advanced Probiotics for Aquaculture</p>
                        </div>

                        <div className="info-box">
                            <h4>Address</h4>
                            <p>
                                D-60/2/35, Plot No.35, Bahadurpally, Dundigal Gandimaisamma
                                (Mandal), Medchal Malkajgiri (Dist) Telangana - 500043
                            </p>
                        </div>

                        <div className="map-box">
                            <iframe
                                title="Unit II Map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15214.445996795634!2d78.431244!3d17.573674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fbdc336e94d%3A0xc31e3d1d8b0d22d1!2sMEENAM%20AQUA%20NEEDS!5e0!3m2!1sen!2sin!4v1760783007646!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-footer">
                <div className="contact-container">
                    <h2>Join Our Aquaculture Revolution</h2>
                    <p>
                        Partner with <strong>MEENAM AQUA</strong> to transform your aquaculture operations
                        with our science-backed, sustainable solutions.
                    </p>
                    <button className="contact-footer-btn">Contact Us Today</button>
                </div>
            </section>



        </>
    )
}

export default About