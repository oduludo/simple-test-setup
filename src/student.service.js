var STUDENTS = [
  {
    id: 1,
    firstName: "Piet",
    lastName: "Janssen",
    year: 2
  },
  {
    id: 2,
    firstName: "Frits",
    lastName: "de Boer",
    year: 1
  },
  {
    id: 3,
    firstName: "Mark",
    lastName: "de Vries",
    year: 4
  },
  {
    id: 4,
    firstName: "Klaas",
    lastName: "Petersen",
    year: 2
  }
];

export const StudentService = {
  allStudents() {
    return STUDENTS;
  },
  getStudent(id) {
    return STUDENTS.find(function (student) {
      return student.id === id;
    });
  }
};