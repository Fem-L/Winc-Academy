/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (number) => {
  return new Promise((resolve, reject) => {
    if (number >= 10) {
      resolve(`the result is heigher then 10, it's ${number}`);
    } else {
      reject(`the result is lower then 10, it's ${number}`);
    }
  });
};

testNum(9)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

testNum(12)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

/*
Exercise 2:
Write two functions that use Promises that you can chain! 
The first function, makeAllCaps(): 
will take in an array of words and capitalize them, and then the second function, sortWords(), 
will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

//Variabelen
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];
const theseAreWords = ["promise", "practice", "break"];
const theseAreNotWords = [1, "hello", 9];

//Functie om van alle woorden in de array hoofdletters te maken
const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    if (
      words.every((word) => {
        return typeof word === "string"; //checkt of de array alleen uit strings bestaat. Geeft een boolean terug
      })
    ) {
      resolve(
        sortWords(
          //bij true roept functie sortWords aan
          words.map((word) => {
            return word.toUpperCase(); //geeft een array in hoofdletters terug
          })
        )
      );
    } else {
      reject("Not a string!");
    }
  });
};

//functie om array in alfabetische volgorde te zetten
const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject("strings only!");
    }
  });
};

makeAllCaps(arrayOfWords)
  .then(sortWords(arrayOfWords)) //zet result in alfabetische volgorde
  .then((result) => console.log(result)) //result
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords(arrayOfWords))
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); //result

makeAllCaps(theseAreWords)
  .then(sortWords(theseAreWords)) //zet de array in alfabetische volgorde
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(theseAreNotWords)
  .then(sortWords(theseAreNotWords))
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); //result
