# Customer Relationship Management System Using MERN + Next.js

## Student / Project Information

- Student Name:
- Roll Number:
- Course: Full Stack Programming Lab
- Class:
- Lecturer:
- GitHub Repository URL:

## 1. Introduction

ClientFlow CRM is a Customer Relationship Management system built for managing customer records, tracking customer status, generating invoices, and protecting user data with authentication. The system allows a user to register, log in, manage customers, search and filter records, create invoices, download invoice PDFs, and use a small rule-based CRM assistant.

## 2. Objectives

- Build secure user authentication.
- Add customer create, read, update, and delete features.
- Search and filter customers by name and status.
- Generate and store customer invoices.
- Download invoices as PDF files.
- Show success and error notifications.
- Add a rule-based chatbot for simple CRM commands.
- Create a clean responsive user interface.

## 3. Technologies Used

- MongoDB
- Express.js
- Node.js
- Next.js
- React
- JWT
- bcryptjs
- Mongoose
- Tailwind CSS
- Axios
- jsPDF

## 4. System Modules

**Authentication module**  
Handles registration, login, JWT token generation, and protected profile access.

**Customer management module**  
Allows adding, viewing, updating, deleting, and seeding customer records.

**Search/filter module**  
Allows users to search customers by name and filter them by Lead, Active, or Inactive status.

**Invoice module**  
Allows users to generate invoices for selected customers, save invoices, and download PDF invoices.

**Notification module**  
Shows success and error messages using toast notifications.

**Chatbot module**  
Provides a small rule-based CRM assistant that shows a short customer list and navigates to common pages using predefined commands.

## 5. Database Design

**Users collection**  
Stores registered user name, email, hashed password, and timestamps.

**Customers collection**  
Stores customer name, email, phone, company, status, source, value, notes, createdBy user reference, and timestamps.

**Invoices collection**  
Stores invoice number, selected customer, services, total amount, summary, invoice date, createdBy user reference, and timestamps.

## 6. API Routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile`
- `GET /api/customers`
- `POST /api/customers`
- `POST /api/customers/seed`
- `GET /api/customers/:id`
- `PUT /api/customers/:id`
- `DELETE /api/customers/:id`
- `GET /api/invoices`
- `POST /api/invoices`
- `GET /api/invoices/:id`
- `DELETE /api/invoices/:id`

## 7. Security

Passwords are hashed using bcryptjs before they are stored in MongoDB. After login, the backend creates a JWT token. The frontend sends this token as a Bearer token with protected API requests. The backend verifies the token before allowing access to protected customer and invoice routes.

## 8. Screenshots Section

### Landing Page

[Insert screenshot here]

### Register Page

[Insert screenshot here]

### Login Page

[Insert screenshot here]

### Dashboard

[Insert screenshot here]

### Customers Page

[Insert screenshot here]

### Add Customer

[Insert screenshot here]

### Edit Customer

[Insert screenshot here]

### Invoice Generation

[Insert screenshot here]

### Invoice PDF

[Insert screenshot here]

### Quick Assistant

[Insert screenshot here]

### MongoDB Collections

[Insert screenshot here]

### Postman Protected Route Tests

[Insert screenshot here]

## 9. Conclusion

ClientFlow CRM successfully demonstrates a full stack CRM system using MongoDB, Express.js, Next.js, React, and Node.js. It includes secure authentication, customer management, search and filter, invoice generation, PDF download, notifications, and a rule-based assistant. The project is responsive and suitable for a university final term demonstration.

## 10. GitHub Repository

GitHub Repository URL:
