import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [shippingCost] = useState(15.0); // Static shipping cost

  useEffect(() => {
    // Fetch cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotal = () => {
    return (parseFloat(calculateSubtotal()) + shippingCost).toFixed(2);
  };

  const handleItemRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <section className="main-cart section-padding bg-cream">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-30">
              <div className="row">
                <div className="col-md-2 col-3 line even">
                  <div className="item-img">
                    <div className="title">
                      <h6 className="playfont">Item</h6>
                    </div>
                    {cartItems.map((item) => (
                      <div className="cont" key={item._id}>
                        <div className="img">
                          <img src={item.imageURL} alt={item.name} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-3 col-6 line">
                  <div className="item-des">
                    <div className="title">
                      <h6 className="playfont">Description</h6>
                    </div>
                    {cartItems.map((item) => (
                      <div className="cont" key={item._id}>
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-2 col-3 line even">
                  <div className="item-price">
                    <div className="title">
                      <h6 className="playfont">Price</h6>
                    </div>
                    {cartItems.map((item) => (
                      <div className="cont" key={item._id}>
                        <p className="playfont">₦{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-2 col-3 line">
                  <div className="item-count">
                    <div className="title">
                      <h6 className="playfont">Count</h6>
                    </div>
                    {cartItems.map((item) => (
                      <div className="cont" key={item._id}>
                        <input
                          type="number"
                          name="shopcart"
                          value={item.quantity}
                          max="50"
                          min="1"
                          onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-2 col-6 line even">
                  <div className="item-total">
                    <div className="title">
                      <h6 className="playfont">Total</h6>
                    </div>
                    {cartItems.map((item) => (
                      <div className="cont" key={item._id}>
                        <p className="playfont">₦{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-1 col-3 line">
                  <div className="remove-item">
                    <div className="title"></div>
                    {cartItems.map((item) => (
                      <div className="cont" key={item._id}>
                        <button onClick={() => handleItemRemove(item._id)}>x</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cart-totals dark-bg">
                <h3>Cart totals</h3>
                <table className="total-table">
                  <tbody>
                    <tr>
                      <th>Cart Subtotal:</th>
                      <td>₦{calculateSubtotal()}</td>
                    </tr>
                    <tr>
                      <th>Shipping Total:</th>
                      <td>₦{shippingCost.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <th>Total:</th>
                      <td>₦{calculateTotal()}</td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit" className="button-5 mt-30">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
