const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
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
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
