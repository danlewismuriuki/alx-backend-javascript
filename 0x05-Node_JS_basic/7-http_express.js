const express = require('express');
const app = express();
const countStudents = require("./3-read_file_async");
const PORT = 1245;



app.get('/', (req, res) => {
    res.send("Hello Holberton School!");
});


app.get('/students', async (req, res) => {
    const filepath = process.argv[2];
    if (!filepath) {
        return res.status(500).send("Database file not provided");
    }
    try {
        await countStudents(filepath);
        res.send("This is the list of our students");
    } catch (error) {
        res.status(500).send(error.message);
    }
});