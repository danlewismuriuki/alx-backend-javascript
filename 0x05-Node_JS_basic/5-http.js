const http = require('http');
const countStudents = require('./3-read_file_async');
const path = process.argv[2];

const port = 1245;


const app  = http.createServer((req, res) => {
    res.setHeader( 'Content-Type', 'text/plain')

    if (req.url === '/'){
        res.statusCode = 200;
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.statusCode = 200;
        res.write('This is the list of our students\n')

        try {
            const data = await countStudents(path);
            res.write(data);
        } catch (error) {
            res.statusCode = 500;
            res.write(`Error: ${error.message}`);
        }
        res.end();
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app;