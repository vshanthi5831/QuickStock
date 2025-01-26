import React from "react";

export default function About() {
  return (
    <>
      <div className="accordion" id="accordionExample">

      <div className="table-container">
        <h1 >About</h1>
      </div>
      <br />
      <br />
      <br />
        {/* Chart */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Bar Chart
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Bar Chart component visualizes the inventory data.</strong> It provides an easy-to-read graphic of stock levels, helping with inventory tracking and management.
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Inventory Table
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Inventory Table is a reusable component for displaying product data.</strong> It shows all items in the stock with relevant details like name, quantity, price, etc.
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Low-Stock Notifications
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Notifications List component alerts users when an item is low in stock.</strong> This helps in keeping track of inventory levels and ensuring timely restocking.
            </div>
          </div>
        </div>

        {/* Add Item Form */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Add Item Form
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Add Item Form allows users to input new product details.</strong> This form captures item names, prices, quantities, and other necessary details for inventory addition.
            </div>
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Filter Dropdown
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Filter Dropdown allows users to filter inventory by categories.</strong> This helps users narrow down their search and quickly find specific product types.
            </div>
          </div>
        </div>

        {/* Sort Buttons */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Sort Inventory
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Sort Buttons allow users to sort the inventory by various attributes.</strong> Sorting by price, stock quantity, or name makes it easier to view items in a structured way.
            </div>
          </div>
        </div>

        {/* Highlight Row */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Highlight Row
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Highlight Row feature emphasizes selected rows in the table.</strong> This feature highlights specific rows, such as low-stock items, to draw attention to them.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
