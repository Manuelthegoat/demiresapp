import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [className, setClassName] = useState("cart-open");
  const [className2, setClassName2] = useState("collapse navbar-collapse");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setClassName2(isMenuOpen ? "collapse navbar-collapse" : "navbar-collapse");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fetch cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="logo-wrapper">
            <a className="logo" href="/">
              <img src="img/logo2.png" className="logo-img" alt="" />
            </a>
          </div>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon">
              <i className={isMenuOpen ? "ti-close" : "ti-menu"}></i>
            </span>
          </button>
          <div className={className2}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/wine">
                  Drinks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="cart">
              <div
                className="cart-icon"
                onClick={() => setClassName("cart-side")}
              >
                <span className="icon ti-shopping-cart cursor-pointer"></span>
                <div className="mad-count">{cartItems.length}</div>
              </div>
              <div className={className}>
                <span
                  className="clos ti-close cursor-pointer"
                  onClick={() => setClassName("cart-open")}
                ></span>
                <div className="titl">
                  <h6>Your Cart</h6>
                  <span>{cartItems.length} Items</span>
                </div>
                <div className="prods">
                  {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    cartItems.map((item) => (
                      <div className="item" key={item._id}>
                        <div className="img">
                          <img src={item.imageURL} alt={item.name} />
                        </div>
                        <div className="cont">
                          <h6>{item.name}</h6>
                          <div className="price">
                            {item.quantity} x <span>₦{item.price}</span>
                          </div>
                        </div>
                        <div className="del valign">
                          <span className="ti-close cursor-pointer"></span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="total">
                  <h6>Subtotal :</h6>
                  <p>₦{calculateSubtotal()}</p>
                </div>
                <a href="#0" className="button-5">
                  Checkout
                </a>&nbsp;&nbsp;&nbsp;
                <a href="/cart">View Cart</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
