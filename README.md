QuickStock
QuickStock is a dynamic and efficient inventory management system designed to help you organize and track your items with ease. This project provides an interactive dashboard, allowing users to monitor stock levels, update stock levels & view data visualizations.

Features:
- Dynamic Inventory Updates: Tracks items and notifies users when stock levels fall below a critical threshold (e.g., less than 10 items in a category).
- Interactive Dashboard: Visualizes inventory data in charts for better decision-making.
- Category-Based Organization: Sort and manage items by categories for quick access.
- Real-Time Notifications: Alerts for low-stock items to ensure timely replenishment.
- Responsive Design: Fully responsive interface for seamless use across devices.

Technologies Used:
- Frontend: React.js, CSS
- Backend: JSON Server (mock backend)
- Libraries: Chart.js for data visualization
- Version Control: Git and GitHub

Clone the Repository:
git clone https://github.com/vshanthi5831/QuickStock.git
cd QuickStock

Install Dependencies:
npm install

Start JSON Server(mock backend to serve data from db.json):
npx json-server --watch db.json --port 5000

How It Works:
- Inventory Management: Data is stored in db.json with fields like id, category, and name.
- Add and Remove Items: Users can dynamically add new items or remove existing ones. The updates are reflected in the inventory data and visualized in the dashboard in real-time.
- Visual Insights: The Chart component provides an overview of stock levels categorized for clarity.
