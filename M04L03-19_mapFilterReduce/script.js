//Opdracht Superpowers
const superheroes = [
  {
    name: 'Batman',
    publisher: 'DC Comics',
    alter_ego: 'Bruce Wayne',
    first_appearance: 'Detective Comics #27',
    weight: '210',
  },
  {
    name: 'Superman',
    publisher: 'DC Comics',
    alter_ego: 'Kal-El',
    first_appearance: 'Action Comics #1',
    weight: '220',
  },
  {
    name: 'Flash',
    publisher: 'DC Comics',
    alter_ego: 'Jay Garrick',
    first_appearance: 'Flash Comics #1',
    weight: '195',
  },
  {
    name: 'Green Lantern',
    publisher: 'DC Comics',
    alter_ego: 'Alan Scott',
    first_appearance: 'All-American Comics #16',
    weight: '186',
  },
  {
    name: 'Green Arrow',
    publisher: 'DC Comics',
    alter_ego: 'Oliver Queen',
    first_appearance: 'All-American Comics #16',
    weight: '195',
  },
  {
    name: 'Wonder Woman',
    publisher: 'DC Comics',
    alter_ego: 'Princess Diana',
    first_appearance: 'The Incredible Hulk #180',
    weight: '165',
  },
  {
    name: 'Blue Beetle',
    publisher: 'DC Comics',
    alter_ego: 'Dan Garret',
    first_appearance: 'Mystery Men Comics #1',
    weight: '145',
  },
  {
    name: 'Spider Man',
    publisher: 'Marvel Comics',
    alter_ego: 'Peter Parker',
    first_appearance: 'Amazing Fantasy #15',
    weight: '167',
  },
  {
    name: 'Captain America',
    publisher: 'Marvel Comics',
    alter_ego: 'Steve Rogers',
    first_appearance: 'Captain America Comics #1',
    weight: '220',
  },
  {
    name: 'Iron Man',
    publisher: 'Marvel Comics',
    alter_ego: 'Tony Stark',
    first_appearance: 'Tales of Suspense #39',
    weight: '250',
  },
  {
    name: 'Thor',
    publisher: 'Marvel Comics',
    alter_ego: 'Thor Odinson',
    first_appearance: 'Journey into Myster #83',
    weight: '200',
  },
  {
    name: 'Hulk',
    publisher: 'Marvel Comics',
    alter_ego: 'Bruce Banner',
    first_appearance: 'The Incredible Hulk #1',
    weight: '1400',
  },
  {
    name: 'Wolverine',
    publisher: 'Marvel Comics',
    alter_ego: 'James Howlett',
    first_appearance: 'The Incredible Hulk #180',
    weight: '200',
  },
  {
    name: 'Daredevil',
    publisher: 'Marvel Comics',
    alter_ego: 'Matthew Michael Murdock',
    first_appearance: 'Daredevil #1',
    weight: '200',
  },
  {
    name: 'Silver Surfer',
    publisher: 'Marvel Comics',
    alter_ego: 'Norrin Radd',
    first_appearance: 'The Fantastic Four #48',
    weight: 'unknown',
  },
];
//1. Maak een array van alle superhelden namen, met .map()

const namesHeroes = superheroes.map((hero) => hero.name);

console.log('Dit zijn de namen van de helden: ', namesHeroes);

//2. Maak een array van alle "lichte" superhelden (< 190 pounds) met .filter()

const lightWeightHeroes = superheroes.filter((hero) => hero.weight < 190);
console.log('Dit zijn de lichtgewichten:', lightWeightHeroes);

//3. Maak een array met de namen van de superhelden die 200 pounds wegen

const heavyWeightHeroes = superheroes
  .filter((hero) => hero.weight > 200)
  .map((hero) => hero.name);

console.log('Dit zijn de zwaargewichten: ', heavyWeightHeroes);

//4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad

const firstAppearance = superheroes.map((hero) => hero.first_appearance);

console.log(
  'dit zijn de comics waar de helden hun eerste optreden hadden: ',
  firstAppearance
);

//5. Maak een array met alle superhelden van:
//DC Comics.
const dcComics = superheroes
  .filter((hero) => hero.publisher == 'DC Comics')
  .map((hero) => hero.name);
console.log('De helden van Dc Comics: ', dcComics);
//Marvel Comics
const marvelComics = superheroes
  .filter((hero) => hero.publisher == 'Marvel Comics')
  .map((hero) => hero.name);
console.log('De helden van Marvel Comics: ', marvelComics);

//6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op

const heroesDcComics = superheroes.filter(
  (hero) => hero.publisher == 'DC Comics'
);
console.log('heroes van dc comics: ', heroesDcComics);

const weightHeroesDccomics = heroesDcComics.map((hero) => {
  return parseInt(hero.weight);
});
console.log('Gewicht van de helden: ', weightHeroesDccomics);

const totalWeightHeroesDccomics = weightHeroesDccomics.reduce(
  (accumelator, currentvalue) => accumelator + currentvalue
);

console.log(
  'Dit is het totaal gewicht van de helden van Dc Comics: ',
  totalWeightHeroesDccomics
);

//Tel het gewicht van alle superhelden van Marvel Comics bij elkaar op

//verzamel alle helden van Marvel Comics
const heroesMarvelComics = superheroes.filter(
  (hero) => hero.publisher == 'Marvel Comics'
);
console.log('heroes van Marvel comics: ', heroesMarvelComics);

//maak een array van hun gewichten

const weightHeroesMarvelcomics = heroesMarvelComics.map((hero) =>
  parseInt(hero.weight)
);
console.log('Gewicht van de helden: ', weightHeroesMarvelcomics);

//Filter het "unknown" gewicht uit de array

//functie om NaN uit de array te filteren door gebruik te maken van het feit dat NaN een boolean
//gevonden op stackoverflow
const weightFilter = (arr) => {
  return arr.filter(Boolean);
};

const weightHeroesMC = weightFilter(weightHeroesMarvelcomics);
console.log('weightHeroesMC: ', weightHeroesMC);

//Tel alle gewichten bij elkaar op met .recuce()
const totalWeightHeroesMC = weightHeroesMC.reduce(
  (accumelator, currentvalue) => accumelator + currentvalue
);

console.log(
  'Dit is het totaal gewicht van de helden van Dc Comics: ',
  totalWeightHeroesMC
); //uitkomst = 2637

//BONUS: zoek de zwaarste superheld!

const weightH = superheroes.map((hero) => parseInt(hero.weight));
//console.log(weightH);

const weightHeroes = weightFilter(weightH);
//console.log(weightHeroes);

console.log('de zwaarste held is: ', Math.max(...weightHeroes)); //Math.max geeft het hoogste nummer terug
