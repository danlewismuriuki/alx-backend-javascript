const http = require('http');
const fs = require('fs').promises;

const path = process.argv[2];

const port = 1245;

// Define countStudents function
async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
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
    let result = `Number of students: ${totalStudents}\n`;

    for (const [field, students] of Object.entries(studentsByField)) {
      result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain'); // Set content type to plain text

  if (req.url === '/') {
    // Handle root URL
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Handle /students URL
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    try {
      // Fetch and write student data
      const data = await countStudents(path);
      res.write(data);
    } catch (error) {
      // Handle errors
      res.statusCode = 500;
      res.write(`Error: ${error.message}`);
    } finally {
      // End the response
      res.end();
    }
  } else {
    // Handle 404 Not Found
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Start the server and listen on port 1245
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app; // Export the app
