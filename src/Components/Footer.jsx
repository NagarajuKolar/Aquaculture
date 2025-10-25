import React from 'react'
import '../CSS/Footer.css'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-about">
                        <img src={logo} alt="Logo" className="footer-logo" />
                        <p>
                            Pioneering aquaculture healthcare since 2010 with a mission to promote
                            sustainable, healthy aquatic ecosystems across India.
                        </p>
                    </div>

                    <div className="footer-services">
                        <h3>Our Services</h3>
                        <ul>
                            <li>Fish Health Management</li>
                            <li>Water Quality Testing</li>
                            <li>Biosecurity Solutions</li>
                            <li>Feed & Nutrition</li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/contact">Contact</Link>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>  
                            <strong>Office & Factory:</strong><br />
                            D-No.4-60/4, Plot No.114,<br />
                            Bahadurpally, Dundigal-Gandimaisamma (Mandal),<br />
                            Medchal-Malkajgiri (Dist), Telangana - 500043
                        </p>
                        <p><strong>Phone:</strong> +91 97910-75304</p>
                        <p><strong>Email:</strong> meenamaqua@gmail.com</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>©2025 <span>Meena Aqua Needs</span>. All rights reserved. | Committed to sustainable aquaculture excellence.</p>
                </div>
                
            </footer>
            


        </>
    )
}

export default Footer