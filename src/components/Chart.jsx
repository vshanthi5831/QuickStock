import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Chart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch 
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const categoryCounts = items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: "Number of Items per Category",
        data: Object.values(categoryCounts),
        backgroundColor: "#6EC1E4", 
        borderColor: "#1c4662", 
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
}
