import React, { useEffect } from 'react'
import '../CSS/Products.css'
import { useState } from 'react';
import { useLocation } from "react-router-dom";

function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [allproducts, setallproducts] = useState([])
  const [displayedproducts, setdisplayedproducts] = useState([]);
  const [view, setview] = useState('list')
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  async function getallproducts() {
    try {
      const response = await fetch('https://api.meenamaquaneeds.com/getall')
      const products = await response.json()
      setallproducts(products.data.categories);
      console.log("all", products.data.categories)
    }
    catch (error) {
      console.log("error", error)
    }
  }
  useEffect(() => {
    getallproducts()
  }, [])

  useEffect(() => {
    if (activeCategory === "All Products") {
      const allItems = [];

      // for (const cat of allproducts) {
      //   if (Array.isArray(cat.products)) {
      //     allItems.push(...cat.products);
      //   }
      // }
      for (const cat of allproducts) {
        if (Array.isArray(cat.products)) {
          const productsWithCategory = cat.products.map(prod => ({
            ...prod,
            category: cat.name,
          }));
          allItems.push(...productsWithCategory);
        }
      }

      setdisplayedproducts(allItems);
    }

    else if (activeCategory) {
      const selectedCategory = allproducts.find(cat => cat.name === activeCategory);
      setdisplayedproducts(selectedCategory?.products || []); 
    }
  }, [activeCategory, allproducts]);

  const filteredProducts = displayedproducts.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name?.toLowerCase().includes(query) ||
      product.composition?.toLowerCase().includes(query) ||
      product.benifits?.toLowerCase().includes(query) ||
      product.Dosage?.toLowerCase().includes(query) ||
      product.Packing?.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <section className="product-top">
        <div className="top-content">
          <h1>Meenam Aqua Needs</h1>
          <h4>Advanced Nutrition for Aquaculture Excellence</h4>
        </div>

        <div className="category-buttons">
          <button className={activeCategory === "All Products" ? "active" : ""}
            onClick={() => setActiveCategory("All Products")} > All Products
          </button>
          {allproducts.map((cat) => (
            <button key={cat._id} className={activeCategory === cat.name ? "active" : ""} onClick={() => setActiveCategory(cat.name)}>{cat.name} </button>
          ))}
        </div>

        <div className="search-section">
          <input type="text"
            placeholder="🔍 Search products by name, composition, benefits, dosage, or packing..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
          <div className="toggle-buttons">
            <button className={view === 'list' ? 'active' : ''}
              onClick={() => setview('list')}>List</button>
            <button className={view === 'table' ? 'active' : ''}
              onClick={() => setview('table')}>Table</button>
          </div>
        </div>
      </section>


      {view === 'list' && (
        <section className="products-section">
          <div className="product-count">
            <h2>{activeCategory}</h2>
            <span>{filteredProducts.length} products found</span>
          </div>

          <div className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product._id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>

                  <div className="product-info">
                    <div className="product-details-middle">
                      <div className="product-title">
                        {product.name}
                        <span className="category">
                          {activeCategory === 'All Products' ? product.category : activeCategory}
                        </span>
                      </div>
                      <div className="detail">
                        <h4><li>Composition</li></h4>
                        <p>{product.composition}</p>
                      </div>
                      <div className="detail dosage">
                        <h4><li>Dosage</li></h4>
                        <p>{product.Dosage}</p>
                      </div>
                    </div>

                    <div className="product-details-right">
                      <div className="detail">
                        <h4><li>Benefits</li></h4>
                        <p><ul>
                          {product.benifits?.split('\n\n')
                            .filter(line => line.trim() !== '')
                            .map((line, i) => (
                              <li key={i}>{line}</li>
                            ))}
                        </ul>
                        </p>
                      </div>
                      <div className="detail">
                        <h4><li>Packing</li></h4>
                        <p>{product.Packing}</p>
                      </div>
                      <div className="detail">
                        <h4> <li>Storage</li></h4>
                        <p>Store in cool and dark place, avoiding the sun light, keep the container tightly closed after every use to achieve maximum shelf life.</p>
                      </div>
                    </div>

                  </div>

                </div>
              ))
            ) : (
              <p className="no-products">No products found for this category.</p>
            )}
          </div>
        </section>
      )
      }

      {view === 'table' && (
        <section className="products-table-section">
          <table className="products-table">
            <thead>
              <tr>
                <th>PRODUCT IMAGE</th>
                <th>PRODUCT NAME</th>
                <th>CATEGORY</th>
                <th>COMPOSITION</th>
                <th>BENEFITS</th>
                <th>DOSAGE</th>
                <th>PACKING</th>
                <th>STORAGE</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <img src={product.image} alt={product.name} className="table-product-img" />
                    </td>
                    <td>{product.name}</td>
                    <td>{activeCategory === 'All Products' ? product.category : activeCategory}</td>
                    <td>{product.composition}</td>
                    <td>
                      <ul>
                        {product.benifits?.split('\n\n')
                          .filter(line => line.trim() !== '')
                          .map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                      </ul>
                    </td>

                    <td>{product.Dosage}</td>
                    <td>{product.Packing}</td>
                    <td>
                      Store in cool and dark place, avoiding the sunlight, keep the container tightly
                      closed after every use to achieve maximum shelf life.
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-products">
                    No products found for this category.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      )}






    </>
  )
}

export default Products