// DEEL A
// zet de functie om naar een arrow functie
const ikRockArrowFunctions = () => {
  console.log('Joe, ik rock de arrow functions!');
};

ikRockArrowFunctions();

//DEEL B

const fivePlusSeven = () => 5 + 7;

console.log(fivePlusSeven()); //12

//DEEL C
/*schrijf een zo kort mogelijke arrow function, 
zonder naam (je hoeft het dus ook niet in een const te stoppen), die 1 + 2 bij elkaar optelt.*/

() => 1 + 2;

//DEEL D
/*Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), 
die de params a en b bij-elkaar optelt. Noem de functie myFunction.*/

const myFunction = (a, b) => a + b;

console.log(myFunction(1, 3)); //4

//DEEL E
/*Schrijf een arrow function op 1 regel, die de parameter a behoudt, 
en altijd a plus 5 returned. Noem de functie addFive.*/

const addFive = (a) => a + 5;

console.log(addFive(2)); //7

//DEEL F implicit return statement
/*Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel)
 die een simpel object returned: {greeting: "hoi"}*/

let createObject = () => ({ greeting: 'hoi' });

console.log(createObject()); //{ greeting: 'hoi' }
