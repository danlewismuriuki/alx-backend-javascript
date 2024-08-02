interface Teacher  {
    firstName: string,
    fullTimeEmployee: boolean,
    lastName: string,
    location: string,
    contract?: boolean,
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };


console.log(teacher3)

interface Directors extends Teacher {
    numberOfReports: number;
}

const directors1: Directors = {

    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    numberOfReports: 5
}
console.log(directors1)