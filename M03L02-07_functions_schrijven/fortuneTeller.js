/*FortuneTeller
Schrijf een functie met 
-vier argumenten:aantal kinderen, partnernaam, woonplaats en werk
-console log dit met 3 verschillende uitkomsten
*/

let aantalKids;
let partnerNaam;
let woonplaats;
let werk;

const fortuneTeller = function (werk, woonplaats, partnerNaam, aantalKids) {
  let toekomst =
    'Je zal als ' +
    werk +
    ' werken in ' +
    woonplaats +
    ' en je zal getrouwd zijn met ' +
    partnerNaam +
    ' en ' +
    aantalKids +
    ' kinderen hebben';
  console.log(toekomst);
};

fortuneTeller('bakker', 'Geldrop', 'Piet', 2);

fortuneTeller('ontwerper', 'London', 'Mary', 5);

fortuneTeller('kunstenaar', 'Groningen', 'Peter', 3);
