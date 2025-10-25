import React from 'react'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import '../CSS/Home.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from 'react'
import { IoCubeOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

function Home() {
    const homedata = [
        {
            title: 'Innovation in Aqua Health',
            description: 'Backed by Research and Development, we bring science-driven solutions to modern aquaculture.',
            image: pic1,
        },
        {
            title: 'Innovative Aquaculture Healthcare Solutions',
            description: 'At MEENAM AQUA NEEDS, we are dedicated to promoting the health and wellbeing of aquatic life through top-quality products and sustainable practices.',
            image: pic2,
        },
        {
            title: 'Innovative Aquaculture Healthcare Solutions',
            description: 'At MEENAM AQUA NEEDS, we are dedicated to promoting the health and wellbeing of aquatic life through top-quality products and sustainable practices.',
            image: pic2,
        }

    ];
    const [categories, setCategories] = useState([])
    async function category() {
        try {
            const response = await fetch('https://api.meenamaquaneeds.com/getallcategories')
            const data = await response.json()
            console.log(data)
            console.log('dta',data.data)
            setCategories(data.data)

        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        category()
    }, [])

    const [currentSlide, setCurrentSlide] = useState(0);
    const handleNext = () => {
        setCurrentSlide(currentSlide === homedata.length - 1 ? 0 : currentSlide + 1);
    };

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? homedata.length - 1 : currentSlide - 1);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentSlide, homedata.length]);

    return (
        <>

            <div className="home">
                {homedata.map((item, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
                        <div className="home-content">
                            <h1>{item.title}</h1>
                            <h5>{item.description}</h5>
                        </div>
                        <div className='home-img'>
                            <img src={item.image} alt="slider" />
                        </div>


                    </div>

                ))}

                <FaChevronLeft className="arrow left" onClick={handlePrev} />
                <FaChevronRight className="arrow right" onClick={handleNext} />
            </div>

            <section className="categories-section">
                <h2>Product Categories</h2>
                <p>
                    Explore our premium range of aquaculture healthcare solutions
                    designed for optimal results
                </p>

                <div className="categories-grid">
                    {categories.map((cat) => (
                        <div className="category-card" key={cat._id}>
                            <div className="icon-box">
                                <IoCubeOutline />
                            </div>
                            <h3>{cat?.name}</h3>
                            <button><Link to='/products'>View Details</Link></button>
                        </div>
                    ))}
                </div>
                <button className='view-btn'> 
                    View All Categories<span><IoMdArrowForward/></span>  </button>
            </section>


        </>
    )
}

export default Home