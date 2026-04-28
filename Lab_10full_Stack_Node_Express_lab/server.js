const express = require('express');
const app = express();
const PORT = 3000;

// Student data stored in array
const students = [
    { id: 1, name: 'Shiraz Ahmad', email: 'shirazahmad@example.com', grade: 'A' },
    { id: 2, name: 'Ahad', email: 'ahad@example.com', grade: 'B+' },
    { id: 3, name: 'Rehan', email: 'rehan@example.com', grade: 'A-' },
    { id: 4, name: 'Achu', email: 'achu@example.com', grade: 'B' },
    { id: 5, name: 'Tayyab', email: 'tayyab@example.com', grade: 'A+' }
];

// GET route to display student list
app.get('/', (req, res) => {
    // Generate HTML list items
    const studentList = students.map(student => 
        `<li>${student.name} - ${student.email} (Grade: ${student.grade})</li>`
    ).join('');

    // Send HTML response
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            background: #f0f0f0;
            margin: 10px 0;
            padding: 15px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Student List</h1>
    <ul>
        ${studentList}
    </ul>
</body>
</html>
    `;
    
    res.send(html);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Task 2: Simple Message Routes System

// Route /home
app.get('/home', (req, res) => {
    res.send('<h1>Welcome Home</h1><p><a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/">Students</a></p>');
});

// Route /about
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is the about page.</p><p><a href="/home">Home</a> | <a href="/contact">Contact</a> | <a href="/">Students</a></p>');
});

// Route /contact
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1><p>Email: info@example.com</p><p><a href="/home">Home</a> | <a href="/about">About</a> | <a href="/">Students</a></p>');
});

// Task 3: Dynamic User Page
app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`<h1>Hello ${userName}</h1><p><a href="/home">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/">Students</a></p>`);
});