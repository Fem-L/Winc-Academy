//DEEL A
let awesomWords = ['nice', 'awesome', 'tof'];
awesomWords.push('cool');

console.log('Add cool:', awesomWords);
// resultaat: ["nice", "awesome", "tof", "cool"]

//DEEL B
const amountOfElementsInArray = ['appels', 'peren', 'citroenen'];

console.log(amountOfElementsInArray.length); // 3

//DEEL C
const selectBelgiumFromBenelux = ['Belgie', 'Nederland', 'Luxemburg'];

console.log(selectBelgiumFromBenelux[0]); // resultaat: "Belgie"

//DEEL D
const lastElementInArray = ['Haas', 'Cavia', 'Kip', 'Schildpad'];

console.log(lastElementInArray[lastElementInArray.length - 1]); // resultaat: "Schildpad"

//DEEL E
const presidents = ['Trump', 'Obama', 'Bush', 'Clinton'];
console.log(presidents.length);

const impeachTrumpSlice = (array) => {
  return array.slice(1, 4); //kopieert array presidents en verwijderd item 0 uit de kopie = const impeachTrumpSlice
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(presidents); // ['Trump', 'Obama', 'Bush', 'Clinton']

const impeachTrumpSplice = (array) => {
  return array.splice(1, 4); //verwijderd item 1 t/m 3 uit de array presidents en slaat ze op in const impeachTrumpSplice
};

console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]*/
console.log(presidents); // ['Trump']
//DEEL F
const string = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
/*const stringsTogether = (array) => {
  return array.join(' ');
  
  console.log(stringsTogether(string)); //lange schrijfwijze
};*/

const stringsTogether = string.join(' '); //korte schrijfwijze
console.log(stringsTogether); //resultaat: "Winc Academy is leuk ;-}"
//DEEL G

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);

console.log(array3);
