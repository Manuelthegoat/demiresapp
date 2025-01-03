import React, { useState, useEffect } from "react";
import Img from "../img/banner6.jpg";
import Booking from "../Components/Booking";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("tab-1"); // Default active tab
  const [products, setProducts] = useState([]); // To store products

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://demires.onrender.com/api/products");
        const data = await response.json();
        // Sort products by 'updatedAt' field (latest first)
        const sortedProducts = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []); // Empty dependency array to run only once when component mounts

  // Add to Cart function
  const handleAddToCart = (product) => {
    // Get existing cart data from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Add the new product to the cart
    const updatedCart = [...existingCart, product];
    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log(`${product.name} added to cart!`);
  };

  // Group products by category and count them
  const categories = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  const categoryItems = Object.keys(categories).map((category) => (
    <li key={category}>
      <a href="shop.html#0">{category}</a>
      <div className="dots"></div> <span>({categories[category]})</span>
    </li>
  ));

  return (
    <>
      <div
        className="banner-header valign bg-img bg-fixed menubg"
        data-overlay-dark="6"
        data-background="img/banner12.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center caption mt-60">
              <h5>Order Now</h5>
              <h1>Our Shop</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="main-shop section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="products-shop">
                <div className="topline">
                  <div className="pagesviews valign">
                    <p>
                      Showing <span>1–6</span> of {products.length} results
                    </p>
                  </div>
                  <div className="sortby select1_inner">
                    <select className="wide select2 select">
                      <option value="0">Sort by popularity</option>
                      <option value="1">Sort by average rating</option>
                      <option value="2">Sort by latest</option>
                      <option value="3">Sort by price: low to high</option>
                      <option value="4">Sort by price: high to low</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  {products.map((product, index) => (
                    <div className="col-md-6" key={product._id}>
                      <div className="item">
                        <div className="img">
                          <img src={product.imageURL} alt={product.name} />
                          <button
                            className="addcart"
                            onClick={() => handleAddToCart(product)} // Add this function
                          >
                            Add To Cart <span className="ti-shopping-cart"></span>
                          </button>
                        </div>
                        <div className="cont">
                          <h6>
                            <a href={`single-product.html?id=${product._id}`}>
                              {product.name}
                            </a>
                          </h6>
                          <div className="info">
                            <p>{product.description}</p>
                          </div>
                          <div className="botm">
                            <h5 className="price">₦{product.price}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <ul className="news-pagination-wrap align-center mb-30 mt-30">
                    <li>
                      <a href="#">
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="shop-sidebar">
                <div className="item">
                  <div className="form search">
                    <div className="form-group">
                      <input type="text" name="search-shop" placeholder="Search products.." />
                      <a href="shop.html#0" className="icon">
                        <span className="ti-search"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="tit">
                    <h4>Latest Products</h4>
                  </div>
                  <div className="pop-prod">
                    {products.slice(0, 3).map((product) => (
                      <div className="product" key={product._id}>
                        <div className="img">
                          <img src={product.imageURL} alt={product.name} />
                        </div>
                        <div className="info">
                          <h6>
                            <a href="single-product.html">{product.name}</a>
                          </h6>
                          <span className="price">
                            Price: <span>₦{product.price}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="item">
                  <div className="tit">
                    <h4>Tags</h4>
                  </div>
                  <div className="tags">
                    <a href="shop.html#0">Food</a>
                    <a href="shop.html#0">Delish</a>
                    <a href="shop.html#0">Dinner</a>
                    <a href="shop.html#0">Healthy</a>
                    <a href="shop.html#0">Recipe</a>
                    <a href="shop.html#0">Pasta</a>
                    <a href="shop.html#0">Soups</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Booking />
    </>
  );
};

export default Menu;
