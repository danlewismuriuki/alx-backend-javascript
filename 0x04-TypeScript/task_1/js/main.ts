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




// Write a function printTeacher:

// It accepts two arguments firstName and lastName
// It returns the first letter of the firstName and the full lastName
// Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction.

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`
}
console.log(printTeacher('Jack', "Neuman"));