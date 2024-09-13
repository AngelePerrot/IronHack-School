/* If Else exercice
let name = prompt("What is your name?");
let language = prompt("What language you want to use?");
if (language === "english") {
  console.log("Hello,", name, "!");
} else if (language === "french") {
  console.log("Salut,", name, "!");
} else if (language === "spanish") {
  console.log("Hola,", name, "!");
} else {
  console.log("I am not sure which language that is! Sorry!");
}
*/

/* Switch
let name = prompt("What is your name?");
let language = prompt("What language you want to use?");
switch (language) {
  case "spanish":
    console.log("Hola,", name, "!");
    break;
  case "french":
    console.log("Salut,", name, "!");
    break;
  case "english":
    console.log("English,", name, "!");
  default:
    console.log("I am not sure which language that is! Sorry!");
}
*/

/* Exercises Case Break 
const name = prompt("What is your favorite Game of Thrones character?");
let house = "";
switch (name) {
  case "Daenerys":
    house = "Targaryen";
    break;
  case "Jon Snow":
    house = "Stark";
    break;
  case "Sansa":
    house = "Stark";
    break;
  case "Arya":
    house = "Stark";
    break;
  case "Tyrion":
    house = "Lannister";
    break;
  case "Cersei":
    house = "Lannister";
    break;
  default:
    house = "Others";
}
console.log("Your favorite character is from the house is : " + house);
*/

/* Loop 
let i = 0;
while (i < 30) {
  i++; // this is the same as i = i + 1
  if (i === 10) {
    console.log("ten");
  } else if (i === 20) {
    console.log("twenty");
  } else if (i === 30) {
    console.log("thirty");
  } else {
    console.log(i);
  }
}
  */

/* loop for
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
  */
