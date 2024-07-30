export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradeArray = newGrades.reduce((acc, { studentId, grade }) => {
    acc[studentId] = grade;
    return acc;
  }, {});

  return students.filter((students) => students.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: gradeArray[student.id] !== undefined ? gradeArray[student.id] : 'N/A',
    }));
}
