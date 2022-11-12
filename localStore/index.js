// Adaugam cheia name, cu valoarea "Bob":
localStorage.setItem("name", "Bob");

// Extragem valoarea cheii name:
const name = localStorage.getItem("name");
console.log(name);

// Stergem valoarea cheii name:
localStorage.removeItem("name");

// Stergem tot ce se afla in localStorage:
localStorage.clear();

const student = {
  name: "Bob",
  age: 23,
};

localStorage.setItem("student", JSON.stringify(student));

const studentString = localStorage.getItem("student");

const studentFromLocalStorage = JSON.parse(studentString);

studentFromLocalStorage.newField = "new";

console.log(studentFromLocalStorage);
