const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    const filepath = process.argv[2];
    if (!filepath) {
        return res.status(500).send("Database file not provided");
    }

    const msg = 'This is the list of our students\n';
    try {
        const data = await fs.readFile(filepath, 'utf-8');
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        const studentsByField = {};
        const headers = lines[0].split(',');

        lines.slice(1).forEach((line) => {
            const student = line.split(',');
            if (student.length === headers.length) {
                const field = student[3];
                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }
                studentsByField[field].push(student[0]);
            }
        });

        const totalStudents = Object.values(studentsByField)
            .reduce((acc, students) => acc + students.length, 0);

        const messages = [`Number of students: ${totalStudents}`];

        for (const [field, students] of Object.entries(studentsByField)) {
            const message = `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
            messages.push(message);
        }

        res.send(`${msg}${messages.join('\n')}`);
    } catch (error) {
        res.send(`${msg}${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
