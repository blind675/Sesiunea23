const student = {
  name: "Bob",
  age: 23,
};

// Pentru a transforma obiectele/array-urile in string-uri, avem nevoie de JSON.stringify.
const stringifiedStudent = JSON.stringify(student);

// stringifiedStudent este string , codul de mai jos nu va avea efectul dorit
stringifiedStudent.age = 39;

console.log(stringifiedStudent);

// Pentru a transforma un sir de caractere obtinut prin JSON.stringify inapoi intr-un obiect/array, ne folosim de metoda JSON.parse.
const startingObject = JSON.parse(stringifiedStudent);

startingObject.age = 39;

console.log(startingObject);
