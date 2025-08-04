# mern-react-js-project


🛍️ Full Stack Shop Application
A full stack web application for a simple e-commerce shop, built with the MERN stack (MongoDB, Express, React, Node.js), using Zustand for state management and REST API for backend communication.





📚 Table of Contents

Features
Tech Stack
API Endpoints
Getting Started
Folder Structure




✨ Features

Responsive design
Add products to cart
Filter and sort products
Display list of products
Real-time updates with Zustand
Add, edit, and delete products




🛠️ Tech Stack


🔗 Frontend:

React
Chakra UI
React Router DOM
Zustand (state management)

🔗 Backend:

Node.js
MongoDB
Express.js
RESTful API


🚀 Getting Started

1. Clone the repository
git clone https://github.com/Nairi-Khachatryan/mern-react-js-project.git

3. Setup Backend
npm install
npm run dev

Create a .env file in root folder


MONGO_URI=your_mongodb_connection_string
PORT=5000


All backend dependencies are defined in the root folder. You can see them in the root package.json file.


3. Setup Frontend

cd frontend
npm install
npm run dev


📁 Folder Structure


/frontend
    node_modules
    src/
      /components
      /pages
      /shared
      /store        
      App.jsx
      main.jsx

/backend
    config
       /db.js
    /controllers
        /product.controller.js
    /models
        product.model.js
    /routes
        product.route.js
    server.js
    .env
package.lock.json  
package.json
README.md





| Method | Route              | Description        |
| ------ | ------------------ | ------------------ |
| GET    | /api/products      | Get all products   |
| GET    | /api/products/id   | Get product by id  |
| POST   | /api/products      | Create new product |
| PUT    | /api/products/\:id | Update a product   |
| DELETE | /api/products/\:id | Delete a product   |



I will wait for your stars.












