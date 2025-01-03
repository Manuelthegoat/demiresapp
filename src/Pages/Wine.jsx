import React, { useState, useEffect } from "react";
import Img from "../img/banner6.jpg";

const Wine = () => {
  const [products, setProducts] = useState([]); // Store fetched products

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://demires.onrender.com/api/products");
        const data = await response.json();
        // Filter only products with the "drink" category
        const drinkProducts = data.filter((product) => product.category === "drinks");
        setProducts(drinkProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div
        className="banner-header valign bg-img bg-fixed bg2"
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center caption mt-60">
              <h5>Restaurant</h5>
              <h1>
                Our Exclusive Drinks <span>Hot & Wine</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="section-padding faq-1">
        <div className="container">
          <div className="row menu-book">
            <div className="col-md-12">
              <ul className="accordion-box clearfix">
                {products.length > 0 ? (
                  <li className="accordion block active">
                    <div className="acc-btn">Drinks</div>
                    <div className="acc-content show">
                      <div className="content">
                        <div className="row">
                          {products.map((product, index) => (
                            <div key={index} className="col-md-6">
                              <div className="menu-list mb-30">
                                <div className="item">
                                  <div className="img">
                                    <a
                                      href={product.imageURL}
                                      className="image-popup-vertical-fit"
                                      title={product.name}
                                    >
                                      <img
                                        src={product.imageURL}
                                        alt={product.name}
                                      />
                                    </a>
                                  </div>
                                  <div className="flex">
                                    <div className="title">{product.name}</div>
                                    <div className="dots"></div>
                                    <div className="price">₦{product.price}</div>
                                  </div>
                                  <p>
                                    <i>{product.description}</i>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <p>No drinks available at the moment.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wine;
