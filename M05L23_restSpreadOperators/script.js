/*Functie 1
-Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
-De functie accepteert meerdere argumenten
-Gebruik de rest operator om ervoor te zorgen dat je functie alle argumenten als een array behandelt*/

const sum1 = (...arguments) => {
  return arguments.reduce(
    (accumelator, currentValue) => accumelator + currentValue
  );
};
console.log(sum1(1, 2, 3)); //6

/*Functie 2:
-Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
-De functie accepteert 1 argument, namelijk een array van cijfers
-Gebruik de spread operator om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.*/

const sum2 = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const nums = [5, 2, 3];

console.log(sum2(...nums)); //10
