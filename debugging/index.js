// luam din DOM elementele necesare (input, buton, lista de raspuns)
const input = document.querySelector("#cnp");
const button = document.querySelector("#interpret-cnp");
const resultList = document.querySelector(".result");
// # - id
// . - clase
//   - tag

function extractGender(cnp) {
  // console.log("extractGender() cnp:", cnp);

  const genderCode = cnp.substring(0, 1);

  // console.log("extractGender() genderCode:", genderCode);
  // console.log("extractGender() genderCode === '1':", genderCode === "1");

  if (genderCode === "1") {
    return "masculin";
  } else {
    return "feminin";
  }
}

function extractBirthDate(cnp) {
  const day = cnp.substring(5, 7);
  const month = cnp.substring(3, 5);
  let year = cnp.substring(1, 3);

  // console.log("extractBirthDate() year:", year);

  // if (year < 23) {
  //   year = "20" + year;
  // } else {
  //   year = "19" + year;
  // }

  return `${day}/${month}/${year}`;
}

// setam un event listener pe buton
button.addEventListener("click", function () {
  // o functie care trateaza evenimentul de click pe buton
  // luam valoarea input

  const inputValue = input.value;

  // extragem gender
  const gender = extractGender(inputValue);

  // extragem data nasterii
  const birthdate = extractBirthDate(inputValue);

  // console.log("addEventListener() resultList:", resultList);

  // afisam rezultatul
  resultList.innerHTML += `
    <li>Genul: ${gender}</li>
    <li>Data nasterii: ${birthdate} </li>
  `;
});
