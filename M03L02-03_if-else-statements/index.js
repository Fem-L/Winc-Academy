const age = 17;
const isFemale = true;
const driverStatus = "piet";

if (age > 17) {
  console.log("Deze persoon is 18 jaar of ouder");
} else {
  console.log("Deze persoon is nog geen 18 jaar");
}

if (isFemale == true) {
  console.log("Ze mag naar binnen op ladiesnight");
} else {
  console.log("Hij is niet welkom deze avond.");
}

if (driverStatus == "bob") {
  console.log("Deze persoon mag rijden");
} else {
  console.log("Deze persoon heeft gedronken en mag niet rijden");
}
//Ternary operator

age > 17
  ? console.log("Deze persoon is 18 jaar of ouder")
  : console.log("Deze persoon is nog geen 18 jaar");

isFemale == true
  ? console.log("Ze mag naar binnen op ladiesnight")
  : console.log("Hij is niet welkom deze avond.");
