# ClientFlow CRM Demo Guide

## Start The Project

Open two PowerShell terminals.

**Terminal 1: Backend**

```powershell
cd D:\Final_Term_Project_CRM\server
npm run dev
```

Wait for:

- MongoDB connected successfully
- Server is running on port 5000

**Terminal 2: Frontend**

```powershell
cd D:\Final_Term_Project_CRM\client
npm run dev
```

Open `http://localhost:3000`.

## Demo Order And What To Say

1. **Landing page**  
   Say: "ClientFlow CRM is a full stack CRM for managing customers, pipeline status, invoices, and secure user accounts."

2. **Register**  
   Say: "A new user can register with name, email, and password. The password is hashed before saving."

3. **Login**  
   Say: "After login, the backend returns a JWT token. The frontend stores it and sends it with protected requests."

4. **Protected dashboard**  
   Say: "This dashboard is protected. Without a valid token, the user is redirected to login."

5. **Load 15 sample customers**  
   Say: "This button creates demo customer records for the logged-in user only."

6. **Dashboard stats**  
   Say: "The dashboard calculates total customers, leads, active customers, inactive customers, and pipeline value."

7. **Add customer**  
   Say: "This reusable customer form validates required fields and sends data to the backend."

8. **Search customer**  
   Say: "Search is dynamic. The frontend sends a search query and the backend returns matching names."

9. **Filter by status**  
   Say: "The status tabs filter records by Lead, Active, or Inactive without a full page reload."

10. **Edit customer**  
    Say: "The edit page loads one customer by ID and updates only the logged-in user's record."

11. **Delete customer**  
    Say: "Delete requires confirmation and only affects the current user's customer."

12. **Generate invoice**  
    Say: "The invoice module selects a customer, adds services, calculates totals, and stores the invoice."

13. **Download PDF**  
    Say: "The frontend uses jsPDF to generate a branded downloadable invoice."

14. **Chatbot / Quick Assistant**  
    Say: "The assistant is rule-based. It can show a short customer list, navigate to CRM pages, and does not use any external AI API."

15. **Logout**  
    Say: "Logout clears the saved token and user session."

## Viva Explanations

**Frontend**  
The frontend is the part users see. It is built with Next.js and React.

**Backend**  
The backend receives requests, processes logic, talks to MongoDB, and sends responses.

**Database**  
MongoDB stores users, customers, and invoices permanently.

**Model**  
A model defines the structure of documents in MongoDB.

**Route**  
A route is an API endpoint like `/api/customers`.

**Controller**  
A controller contains the logic for what happens when a route is called.

**Middleware**  
Middleware runs before the controller. In this project, auth middleware checks JWT tokens.

**JWT**  
JWT is a token given after login. The frontend sends it with protected requests.

**Password hashing**  
Passwords are converted into unreadable hashes before saving to the database.

**Protected route**  
A protected route only works if the request has a valid Bearer token.

**Search/filter**  
The frontend sends search and status query values to the backend, and the backend returns matching customers.

**Invoice PDF**  
The frontend uses jsPDF to generate a downloadable invoice file.

**Chatbot**  
The chatbot is rule-based and only responds to predefined commands. No external AI API is used.

## Final Reminder

Do not commit `server/.env` or `client/.env.local`.
