# Rustik Plank Ecommerce Lab

Full-stack ecommerce implementation for Lab 12 using Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB.

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   copy .env.example .env
   ```
3. Start MongoDB locally, then seed data:
   ```bash
   npm run seed
   ```
4. Run the backend:
   ```bash
   npm run server
   ```
5. In another terminal, run the frontend:
   ```bash
   npm run dev
   ```

Frontend: `http://localhost:3000`

Backend API: `http://localhost:5000/api`

## Implemented Features

- Responsive Rustik Plank-inspired ecommerce homepage.
- Product listing, filtering, search, and product details.
- Cart with local storage persistence.
- Admin product CRUD connected to Express API.
- Express REST API with MongoDB/Mongoose models.
- Seed data and image assets extracted from the provided mockup.
