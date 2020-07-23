/* PuppyAgeCalculator
-Schrijf een functie met de naam calculateDogAge met 1 argument: de leeftijd van je hond
-calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
-console log: "Je hond is NN jaar oud in hondenjaren!" drie keer met verschillende waarden

-Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.*/

let dogAge;
let humanAge;

const calculateDogAge = function (dogAge, humanAge) {
  let dogYears = 'Je hond is ' + dogAge * 7 + ' oud in hondenjaren!';
  let humanYears =
    'Jij bent ' + Math.round(humanAge / 7) + ' oud in hondenjaren!!';
  console.log(dogYears, humanYears);
};

calculateDogAge(7, 42);
calculateDogAge(4, 50);
calculateDogAge(13, 65);
