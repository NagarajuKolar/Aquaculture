import React from 'react';
import galleryban from '../assets/gallery.png';
import '../CSS/Gallery.css';
import gal1 from '../assets/gal1.png';
import gal2 from '../assets/gal2.png';

function Gallery() {
    const galleryimages = [
        { title: "Bacterial Analysis", image: gal1 },
        { title: "UV Spectrophotometer", image: gal2 },
        { title: "High Resolution Microscope", image: gal1 },
        { title: "Production of PS", image: gal2 },
        { title: "Fermenter", image: gal1 },
        { title: "Blender", image: gal2 },
        { title: "High Resolution Microscope", image: gal1 },
        { title: "Production of PS", image: gal2 },
        { title: "Fermenter", image: gal1 },
        { title: "Blender", image: gal2 },
    ];

    return (
        <>
            <section className="gallery-banner">
                <div className="gallery-overlay">
                    <div className="gallery-content">
                        <h1>Gallery</h1>
                        <h4>A glimpse into our advanced aquaculture and water testing facilities.</h4>
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="gallery-grid">
                    {galleryimages.map((item, index) => (
                        <div className="gallery-card" key={index}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>

                <button className="backtop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Back to Top
                </button>

            </section>
        </>
    );
}

export default Gallery;
