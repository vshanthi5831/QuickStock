import React from "react";
import AddItem from "../components/AddItem";
import RemoveItems from "../components/RemoveItems";

export default function Edit() {
  return (
    <div className="edit-container">
      <div className="edit">
      <h1>Edit Items</h1>
      </div>
      
      <div className="add-item-section">
        <AddItem />
      </div>
      <div className="remove-item-section">
        <RemoveItems />
      </div>
    </div>
  );
}
