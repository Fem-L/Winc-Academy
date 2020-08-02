//DEEL A Gebruik .find() om spiderman te vinden
const superheroes = [
  { name: 'Batman', alter_ego: 'Bruce Wayne' },
  { name: 'Superman', alter_ego: 'Clark Kent' },
  { name: 'Spiderman', alter_ego: 'Peter Parker' },
];
/*
const findSpiderMan = superheroes.find((hero) => {
  //volledig uitgeschreven
  return hero.name === 'Spiderman';
});

console.log(findSpiderMan);
*/
const findSpiderMan = superheroes.find((hero) => hero.name === 'Spiderman');

console.log(findSpiderMan); // {name: "Spiderman", alter_ego: "Peter Parker"}

//DEEL B gebruik .map() om de integers in een array te verdubbelen.
let arrayValues = [1, 2, 3];

let doubleArrayValues = arrayValues.map((x) => x * 2);

console.log(doubleArrayValues); // result should be [2, 4, 6]

//DEEL C gebruik .some() om te checken of een statement waar is
const containsNumbers = [1, 4, 3, 6, 9, 7, 11];
const containsLowerNumbers = [1, 2, 1, 2, 1, 2];

const containsNumberBiggerThan10 = (e) => e > 10; //functie die checkt eof een element het een number boven de 10 is

console.log(containsNumbers.some(containsNumberBiggerThan10)); // result should be true
console.log(containsLowerNumbers.some(containsNumberBiggerThan10)); // result should be false

//DEEL D gebruik .includes() om een element te vinden
const isItalyInTheGreat7 = [
  'Canada',
  'France',
  'Germany',
  'Italy',
  'Japan',
  'United Kingdom',
  'United States',
];

console.log(isItalyInTheGreat7.includes('Italy')); // result should be true

//DEEL E gebruik .forEach() om de integers te vertienvoudigen
let arrayIntegers = [1, 4, 3, 6, 9, 7, 11];

const tenfold = (array) => {
  let tenfoldIntegers = [];
  array.forEach((number) => {
    tenfoldIntegers.push(number * 10);
  });
  return tenfoldIntegers;
};

console.log(tenfold(arrayIntegers)); // result should be [10, 40, 30, 60, 90, 70, 110]

//DEEL F gebruik .every() m te checken of alle waarden onder de 100 zijn.
const aLotOfNumbers = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  101,
  11,
  77,
  84,
  98,
];

const isBelow100 = (e) => e < 100;

console.log(aLotOfNumbers.every(isBelow100)); // result should be: false

//DEEL G gebruik .reduce() om alle waardes in de array bij elkaar op te tellen
const bigSum = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  11,
  77,
  84,
  98,
  101,
  206,
  234,
];

const reducer = (accumelator, currentvalue) => accumelator + currentvalue;

console.log(bigSum.reduce(reducer)); // result should be 1118
