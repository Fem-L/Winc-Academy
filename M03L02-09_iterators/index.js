//Oude stijl: loops

//While loop

const colors = ['yellow', 'blue', 'red', 'orange'];

let i = 0;

while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

// For loop

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//Nieuwe stijl: array methods
//function declaration, met naam

colors.forEach(printItem);

function printItem(item, index, arr) {
  console.log(index, item);
}

//function expression, met anonieme functie

colors.forEach(function (item, index, arr) {
  console.log(item);
});

//arrow schrijfwijze
colors.forEach((item, index, arr) => console.log(item));

/*vragen + antwoord
1.Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
while loop is 5 regels
for loop is 3 regels

2.Hoeveel regels neemt mijn forEach method in beslag?
afhankelijk van de schrijfwijze:
function declaration: 4 regels
function expression: 3 regels
arrow function: 1 regel


3.Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?

-Een array methode blijft niet lopen
-Het is duidelijker wat de bedoeling is met deze methode.
-Je hebt gemakkelijk toegang tot de items in de array.*/
