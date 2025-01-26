import React, { useState } from "react";

export default function AddItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const categories = ["electronics", "kitchen", "home", "home_decor", "fitness", "fashion"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      category,
      price: parseFloat(price),
    };

    try {
      const response = await fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        alert("Item added successfully!");
        setName("");
        setCategory("");
        setPrice("");
      } else {
        alert("Error adding item.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding item.");
    }
  };

  return (
    <div className="add-item-container">
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
