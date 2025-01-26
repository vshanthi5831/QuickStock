import React, { useState, useEffect } from "react";

export default function RemoveItems() {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState("");

  useEffect(() => {
    // Fetch items from db.json
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = async () => {
    if (!selectedItemId) {
      alert("Please select an item to delete.");
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:3000/items/${selectedItemId}`, // Corrected line
        {
          method: "DELETE",
        }
      );
  
      if (response.ok) {
        // Remove the deleted item from state
        setItems(items.filter((item) => item.id !== selectedItemId));
        alert("Item removed successfully!");
      } else {
        alert("Error deleting item.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error deleting item.");
    }
  };
  

  return (
    <div className="remove-item-container">
      <h1>Remove Item</h1>
      <select
        onChange={(e) => setSelectedItemId(e.target.value)}
        value={selectedItemId}
      >
        <option value="">Select an item</option>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} - {item.category}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Remove Item</button>
    </div>
  );
}