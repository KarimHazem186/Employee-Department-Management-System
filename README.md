# Employee Management System (MEAN Stack)

This project is a full-stack Employee Management System built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). It allows users to manage employees and departments, including CRUD operations and search functionality.

## Features

- Employee and Department management (Add, Edit, Delete, View)
- Search employees and departments
- Responsive UI with Bootstrap and Bootstrap Icons
- RESTful API backend with Express.js and MongoDB

## Technologies Used

- **Frontend:** Angular 18, Bootstrap 5, Bootstrap Icons
- **Backend:** Node.js, Express.js, MongoDB, Mongoose

## Icon Tool

This project uses [Bootstrap Icons](https://icons.getbootstrap.com/) for UI icons.  
To use them, ensure you have the following in your dependencies and styles:

```json
"bootstrap": "^5.3.3",
"bootstrap-icons": "^1.11.3"
```

And in your `angular.json`:

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
]
```

## Getting Started

### Backend

1. Navigate to the `server` directory.
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the server:  
   ```sh
   npm start
   ```
   The backend runs on `http://localhost:3000`.

### Frontend

1. Navigate to the `client` directory.
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the Angular app:  
   ```sh
   npm start
   ```
   The frontend runs on `http://localhost:4200`.

   ---

## 🛠️ Icon Tool

![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)
![Express](https://img.shields.io/badge/Backend-Express.js-black?logo=express)
![Angular](https://img.shields.io/badge/Frontend-Angular-red?logo=angular)
![Node.js](https://img.shields.io/badge/Server-Node.js-green?logo=node.js)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-blue?logo=bootstrap)
![Icons](https://img.shields.io/badge/Icons-Bootstrap_Icons-purple?logo=bootstrap)
