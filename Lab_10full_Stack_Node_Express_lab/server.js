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