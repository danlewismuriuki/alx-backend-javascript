export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accum, num) => accum + num.id, 0); // num/student
}
