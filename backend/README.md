
# Product Management API

A RESTful API built using Node.js, Express.js, MongoDB, and Mongoose to manage products and product categories.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Features

### Product Model
- Product name, description, price, category, brand, stock, rating, and image.
- Schema validation for required fields.
- Price validation.
- Stock validation.
- Rating validation (0–5).
- Automatic `createdAt` and `updatedAt` timestamps.

### Category Model
- Category name and description.
- Required field validation.
- Unique category names.
- Automatic timestamps.

### Product API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/products` | Create a new product |
| GET | `/api/v1/products` | Get all products |
| GET | `/api/v1/products/:id` | Get a product by ID |

## API Examples

### 1. Create a Product

**POST** `/api/v1/products`

Request body:

```json
{
  "name": "MacBook Pro",
  "description": "Apple laptop with an M-series chip",
  "price": 149999,
  "category": "Laptop",
  "brand": "Apple",
  "stock": 10,
  "rating": 4.8,
  "image": "https://example.com/macbook.jpg"
}
```

### 2. Get All Products

**GET** `/api/v1/products`

Retrieves all available products.

### 3. Get Product by ID

**GET** `/api/v1/products/:id`

Example:

```text
http://localhost:4000/api/v1/products/PRODUCT_ID
```

Replace `PRODUCT_ID` with an existing product ID.

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd product-management-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure your MongoDB connection string:

   ```text
   mongodb://127.0.0.1:27017/product-management
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   Make sure this command matches your `package.json` scripts.

## Base URL

```text
http://localhost:4000/api/v1/products
```

## Project Roadmap

- [x] Create Product schema
- [x] Create Category schema
- [x] Implement product creation
- [x] Implement get all products
- [x] Implement get product by ID
- [ ] Implement update product
- [ ] Implement delete product
- [ ] Implement Category CRUD
- [ ] Add pagination
- [ ] Add sorting
- [ ] Add filtering
- [ ] Add search
- [ ] Implement centralized error handling
- [ ] Add automated API tests

## Project Status

Currently implementing the core Product Management API features. The next steps are to complete CRUD operations and add pagination, sorting, filtering, search, and consistent error handling.

## Learning Objectives

- Understand REST API development.
- Practice MongoDB and Mongoose.
- Implement schema validation.
- Organize Express routes and controllers.
- Handle HTTP requests and responses.
- Build maintainable backend applications.
