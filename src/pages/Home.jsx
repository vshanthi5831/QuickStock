import React from "react";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <h1 className="home-title">Welcome to QuickStock</h1>
      </div>
      <br />
      <br />
      <div className="center-container">
        <h2 className="center-heading">Items by Category</h2>
      </div>

      <Chart />
      
      <div className="home-content">
        <p className="home-description">
          Welcome to QuickStock, your go-to solution for organizing and tracking your items. 
          This platform helps you efficiently manage inventory across various categories, allowing you to track stock levels, sales data, and more in real-time.
        </p>
        <p className="home-description">
          The interactive dashboard provides an easy-to-understand visualization of your inventory data, helping you make informed decisions about stock management, order planning, and resource allocation.
        </p>
        <p className="home-description">
          Explore the data visualizations and gain valuable insights into your inventory’s performance, trends, and growth. Stay on top of your items and optimize your stock management with ease!
        </p>
      </div>
    </div>
  );
}

