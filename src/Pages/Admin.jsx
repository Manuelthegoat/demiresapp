import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Starters",
    description: "",
    price: "",
    imageURL: "", // Changed to imageURL to store the URL instead of file
  });

  const [previewImage, setPreviewImage] = useState(null); // No longer needed
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsAuthorized(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!isAuthorized) {
    return null; // Prevent rendering until the token check is complete
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Comment out the image upload functionality since we're using URL now
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, image: file });
  //   setPreviewImage(URL.createObjectURL(file));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get("authToken");

    const payload = {
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      category: formData.category,
      imageURL: formData.imageURL, // Use the URL entered by the user
    };

    try {
      const response = await fetch("https://demires.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to add product. Please check the input.");
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Product added successfully!");

      // Reset form
      setFormData({
        name: "",
        category: "food",
        description: "",
        price: "",
        imageURL: "", // Reset imageURL as well
      });
    } catch (err) {
      console.error("Error:", err.message);
      alert(err.message);
    }
  };

  return (
    <section className="admin-section">
      <div className="admin-container">
        <div className="form-header">
          <h6>Manage Your Menu</h6>
          <h4>Add New Menu Item</h4>
        </div>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="food">Food</option>
              <option value="drinks">Drinks / Wine</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the product"
              required
            />
          </div>
          <div className="form-group">
            <label>Price (₦)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Enter price"
              required
            />
          </div>
          
          {/* New input for the image URL */}
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Comment out the image preview and upload functionality */}
          {/* {previewImage && (
            <div className="image-preview">
              <h5>Preview:</h5>
              <img src={previewImage} alt="Preview" />
            </div>
          )} */}

          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
