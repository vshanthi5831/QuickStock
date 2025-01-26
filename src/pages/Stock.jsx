import React, { useState, useEffect } from "react";

export default function Stock() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  return (
    <div className="container">
      <div className="table-container">
        <h1>Table</h1>
      </div>
      <select
        className="dropdown"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="home_decor">Home Decor</option>
        <option value="home">Home</option>
        <option value="fashion">Fashion</option>
        <option value="kitchen">Kitchen</option>
        <option value="sports">Sports</option>
        <option value="fitness">Fitness</option>

      </select>

      <div className="cards-container">
        {filteredItems.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
