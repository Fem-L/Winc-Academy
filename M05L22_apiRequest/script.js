//voorbeeld Callback
/*
const posts = [
  { title: "post one", body: "This is post one" },
  { title: "post two", body: "This is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost({ title: "post three", body: "This is post three" }, getPosts);//getPosts is de callback
*/
/*
const huiswerkMaken = (vak, callback) => {
  setTimeout(() => {
    console.log(`ok,ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
  }, 1000);
};

const klaarMetHuiswerk = () => {
  console.log("Kijk, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("engels", klaarMetHuiswerk);
*/
//Voorbeeld Promises

const posts = [
  { title: "post one", body: "This is post one" },
  { title: "post two", body: "This is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("error: something went wrong");
      }
    }, 2000);
  });
};

//createPost({ title: "post three", body: "This is post three" })
//  .then(getPosts) //.then() is promise method
//  .catch(error => console.log(error)); // gebruikt voor error message

//Promise.all; array van promises
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbey")
);
const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((result) => result.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

//voorbeeld Promises van Winc
/*
const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
const krijgIkEenNieuweiPhone = new Promise((resolve, reject) => {
  if (sinterklaasIsGul) {
    const smartphone = {
      merk: "Apple",
      type: "iPhone 11",
    };
    resolve(smartphone);
  } else {
    const metWelkeReden = new Error(
      "Je bent stout geweest, geen cadeaus voor jou"
    );
    reject(metWelkeReden);
  }
});

// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
  krijgIkEenNieuweiPhone
    .then(function (resolved) {
      // yay, je hebt een nieuwe smartphone
      console.log(resolved);
    })
    .catch(function (error) {
      // oeps, geen Sinterklaas cadeau dit jaar
      console.log(error.message);
    });
};

vraagAanSinterklaas();
*/
//oefening 1

const testNum = (value) => {
  return new Promise((resolve, reject) => {
    if (value >= 10) {
      resolve(`the result is heigher then 10, it's ${value}`);
    } else {
      reject(`the result is lower then 10, it's ${value}`);
    }
  });
};

testNum(9)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

testNum(12)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//Oefening 2

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

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];
const theseAreWords = ["promise", "practice", "break"];
const theseAreNotWords = [1, "hello", 9];

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
