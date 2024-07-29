export default function getListStudentIds(arrayList) {
  // return [
  //     { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  //     { id: 2, firstName: 'James', location: 'Columbia' },
  //     { id: 5, firstName: 'Serena', location: 'San Francisco' },
  //   ];

  if (!Array.isArray(arrayList)) {
    return [];
  }
  return arrayList.map((student) => student.id);
}
