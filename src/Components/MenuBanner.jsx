import React, { useEffect, useState } from 'react';

const MenuBanner = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://demires.onrender.com/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
        // Filter products based on category "drinks"
        const filteredProducts = data.filter(product => product.category === 'drinks');
        
        // Update the state with filtered products
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs once when the component mounts
  
  return (
    <section className="wine-banner menu-book bg-white">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="img left">
              <img src="img/banner3.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6 p-0 valign mb-30">
            <div className="content">
              <div className="section-head mb-60">
                <div className="section-subtitle">Demires Wine Bar</div>
                <div className="section-title">Wine Bar Menu</div>
              </div>

              {/* Dynamically rendering products */}
              <div className="menu-list mb-30">
                {products.map((product) => (
                  <div className="item" key={product._id}>
                    <div className="img">
                      <a href={product.imageURL} className="image-popup-vertical-fit" title={product.name}>
                        <img src={product.imageURL} alt={product.name} title={product.name} />
                      </a>
                    </div>
                    <div className="flex">
                      <div className="title">{product.name}</div>
                      <div className="dots"></div>
                      <div className="price">₦ {product.price}</div>
                    </div>
                    <p>
                      <i>{product.description}</i>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBanner;
