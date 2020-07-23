/*The lifetime supply Calculator
-schrijf een functie calculateSupply
-met twee argumenten: leeftijd en hoeveelheid per dag
-bereken de hoeveelheid voor de rest van je leven (maximum leeftijd ligt vast)
-console log : "You will need NN to last you until the ripe old age of X" drie keer met verschillende waarden.*/

let age;
let dayAmount;

const calculateSupply = function (age, dayAmount) {
  let maxAge = 80;
  let totalAmount = (maxAge - age) * (dayAmount * 365);
  let message =
    'you will need ' +
    totalAmount +
    ' to last you until the ripe old age of ' +
    maxAge +
    ' years';
  console.log(message);
};

calculateSupply(42, 6); //koppen koffie
calculateSupply(20, 0.2); //stuk chocola
calculateSupply(50, 1); //glas wijn
