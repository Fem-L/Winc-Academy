/* Hollands Broodje
Take a slice of bread
put the chees on the bread
put a slice of bread on top
*/

//Deel A schrijf een functie

//function expression
const hollandsBroodje = function () {
  console.log(
    'Take a slice of bread. Put the chees on the bread. Put a slice of bread on top.'
  );
};

hollandsBroodje();

//Deel B schrijf een functie met een argument

//1: Function Declaration
function makeSandwich(topping) {
  console.log('There you go, a sandwich with ' + topping);
} //declareert

makeSandwich('jam'); //called

//2: Fuction expression
const makeSandwich2 = function (topping) {
  console.log('There you go, a sandwich with ' + topping);
}; //declareert

makeSandwich2('chocopasta'); //called

//Deel C gebruik een return statement

const calculateDiscountedPrice = function (totalAmount, discount) {
  return totalAmount - discount;
};

console.log(Math.round(calculateDiscountedPrice(40, 23.75))); //uitkomst is 16.25, afgerond 16

//Deel D gebruik meerdere return statements

const calculatePrice = function (totalAmount, discount) {
  if (totalAmount > 25) {
    return totalAmount - discount;
  } else {
    return totalAmount;
  }
};

console.log(calculatePrice(20, 15)); //totalAmount zonder korting
console.log(calculatePrice(50, 15)); //totalAmount met korting
