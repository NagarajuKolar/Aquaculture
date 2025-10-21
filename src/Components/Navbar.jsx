import React, { useState,useEffect } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';
import { FaAngleDown } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handledropdown = () => (setIsDropdownOpen(!isDropdownOpen))
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const [categories, setCategories] = useState([])
    async function category() {
        try {
            const response = await fetch('https://api.meenamaquaneeds.com/getallcategories')
            const data = await response.json()
            console.log(data)
            console.log('dta', data.data)
            setCategories(data.data)

        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        category()
    }, [])

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="hamburger" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <div className={`navbar-Links ${isMobileMenuOpen ? "show" : ""}`} >
                    <NavLink to="/" onClick={() => setIsDropdownOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsDropdownOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>

                    <div className="dropdown" onClick={handledropdown}>
                        <NavLink  >
                            Products  <span className='angledown'><FaAngleDown /></span>
                        </NavLink>

                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <NavLink  state={{ category:'All Products' }} to="/products">All Products</NavLink>
                                {categories.map((cat)=>(
                                     <NavLink key={cat._id}  state={{ category: cat.name }} to="/products">{cat.name}</NavLink>
                                ))}
                                {/* <NavLink to="/products/fish-feed">Fish Feed</NavLink>
                                <NavLink to="/products/probiotics">Probiotics</NavLink>
                                <NavLink to="/products/water-treatment">Water Treatment</NavLink>
                                <NavLink to="/products/minerals">Minerals</NavLink>
                                <NavLink to="/products/probiotics">Probiotics</NavLink>
                                <NavLink to="/products/water-treatment">Water Treatment</NavLink>
                                <NavLink to="/products/minerals">Minerals</NavLink> */}
                            </div>
                        )}
                    </div>

                    <NavLink to="/contact" onClick={() => setIsDropdownOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
                        Contact
                    </NavLink>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
