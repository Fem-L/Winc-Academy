console.log(randomPersonData);

//Variabelen
const menuBtns = document.querySelectorAll("#button-lijst li button"); //nodelist van buttons
const dataList = document.getElementById("lijst"); //ul is het ouder element

//Functie om datalijsten te verwijderen
const removeList = () => {
  while (lijst.firstChild) {
    lijst.removeChild(lijst.firstChild);
  }
};

//Algemene sorteerFunctie
const sorteer = (resultaat) => {
  if (resultaat) {
    return 1;
  } else {
    return -1;
  }
};

//1: landenlijst
//FilterFunctie
let getCountries = randomPersonData
  .map((land) => land.region) //sorteert op de landen
  .sort(); //in alfabetische volgorde
let landen = new Set(getCountries); //maakt van een array een Set, verwijderd daarmee alle duplicaten
getCountries = Array.from(landen); //zet Set om naar array

//plaatsingsFunctie
const addCountriesToDom = (array) => {
  array.forEach((getCountries) => {
    const listItem = document.createElement("li"); //li element maken
    dataList.appendChild(listItem);
    listItem.innerHTML = `${getCountries}`;
  });
};

//2: steenbokvrouwen

//Sorteerfuncties

//sorteer deze lijst op voornaam
// steenbokvrouwen.sort((a, b) => {
//   if (a.name > b.name) return 1;
//   else if (b.name > a.name) return -1;
//   return 0;
// });

const isFemale = (person) => person.gender === "female"; //selecteer vrouwen
const isOver30 = (person) => person.age > 30; //selecteer boven de 30 jaar
const sortByName = (woman1, woman2) => sorteer(woman1.name > woman2.name); //sorteer op alfabet
const isSteenbok = (person) => {
  let birthdays = person.birthday.mdy.split("/");
  if (
    (birthdays[1] >= 22 && birthdays[0] == 12) ||
    (birthdays[1] <= 19 && birthdays[0] == 1) //-een steenbok zijn (jarig van 22 december t/m 19 januari);
  )
    return birthdays;
};
//FilterFunctie
const getSteenbokvrouwen = randomPersonData
  .filter(isFemale)
  .filter(isOver30)
  .filter(isSteenbok)
  .sort(sortByName);

//plaatsingsFunctie
const addWomenToDom = (array) => {
  array.forEach((randomPersonData) => {
    const listItem = document.createElement("li"); //li element maken
    dataList.appendChild(listItem);
    const textItem = document.createElement("p");
    listItem.appendChild(textItem);
    textItem.innerHTML = `${randomPersonData.name} ${randomPersonData.surname} `; //laat voor- en achternaam en hun foto zien
    const portretImg = document.createElement("img"); // img element maken
    listItem.appendChild(portretImg); // portretImg toevoegen aan li element
    portretImg.setAttribute("class", "portret-img");
    portretImg.setAttribute("src", "https://picsum.photos/200");
  });
};

//3: ouwe creditcards

//Sorteerfunctie

const getAdults = (person) => person.age >= 18; //selecteert volwassenen

//Functie om datum om te zetten naar losse getallen
const convertExpDate = (card) => {
  const creditCardDate = card.credit_card.expiration.split("/");
  const expYear = creditCardDate[1];
  const expMonth = creditCardDate[0];
  card.expDateCreditcard = { expMonth, expYear };
  return card;
};
//Datum van vandaag
let today = new Date();
let thisMonth = today.getMonth() + 1;

//Functie om de datum over een jaar te bepalen
const oneYearFromNow = new Date();
oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

//Functie filtert op verloopdatum binnen een jaar
const getExpDateWithinYear = (card) => {
  let year = today.getFullYear().toString().split(""); //fulYear geeft 4 nummers
  let thisYear = year[2] + year[3]; //dit jaar teruggebracht tot twee nummers
  let yearAhead = oneYearFromNow.getFullYear().toString().split("");
  let expYear = yearAhead[2] + yearAhead[3];
  let creditcardsExpDate = card.credit_card.expiration.split("/");
  if (creditcardsExpDate[1] === thisYear || creditcardsExpDate[1] === expYear)
    return creditcardsExpDate;
};

//Sorteer de lijst zodat de snelst verlopende creditcards bovenaan staan(nog niet gelukt!)
//functie die sorteert van januari tot december
const sortByExpMonth = (card1, card2) =>
  card1.expDateCreditcard.expMonth - card2.expDateCreditcard.expMonth;

//FilterFunctie
const getPeople = randomPersonData
  .filter(getAdults)
  .map(convertExpDate)
  .filter(getExpDateWithinYear)
  .sort(sortByExpMonth);
//console.log(getPeople);

//plaatsingfunctie
const addPeopleToDom = (array) => {
  array.forEach((randomPersonData) => {
    const listItem = document.createElement("li"); //li element maken
    dataList.appendChild(listItem);
    listItem.setAttribute("class", "people");
    listItem.innerHTML = `Naam: ${randomPersonData.name} ${randomPersonData.surname}`; // - voornaam, achternaam
    const phonenumber = document.createElement("li");
    listItem.appendChild(phonenumber);
    phonenumber.setAttribute("class", "people-lijst");
    phonenumber.innerHTML = `Telefoonnummer: ${randomPersonData.phone}`; // - telefoonnummer
    const creditcard = document.createElement("li");
    listItem.appendChild(creditcard);
    creditcard.setAttribute("class", "people-lijst");
    creditcard.innerHTML = `Kaartnummer: ${randomPersonData.credit_card.number} Exp: ${randomPersonData.credit_card.expiration}`; //creditcardnummer verloopdatum
  });
};

//4: meeste mensen

//Functies;
//Alle landen die voorkomen in de data.
let countries = randomPersonData.map((country) => country.region);

// optellen van de duplicaten in een array (stackoverflow)
const countingPeople = countries.reduce((prev, cur) => {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});
//console.log(countingPeople);

//een array met objecten van de resultaten
const getPeoplePerCoutry = [];
for (land in countingPeople)
  getPeoplePerCoutry.push({ land: land, aantal_mensen: countingPeople[land] });
//console.log(getPeoplePerCoutry);

//SorteerFunctie; De lijst moet zo gesorteerd zijn dat de landen met de meeste mensen bovenaan staan.
const sortByNumberOfPeople = getPeoplePerCoutry.sort(
  (a, b) => b.aantal_mensen - a.aantal_mensen
);
//console.log(sortByNumberOfPeople);

//plaatsingsfunctie
// Achter elk land moet komen te staan hoeveel van de mensen in de lijst in dat land wonen.
const addCountriesToDom2 = (array) => {
  array.forEach((sortByNumberOfPeople) => {
    const listItem = document.createElement("li"); //li element maken
    dataList.appendChild(listItem);
    listItem.innerHTML = `Land: ${sortByNumberOfPeople.land}  (${sortByNumberOfPeople.aantal_mensen})`;
  });
};

//5: gemiddelde leeftijd
// Als we op de knop voor deze opdracht drukken komt er een lijst met knoppen te staan. De opdracht-knoppen blijven ook staan.
// Elk van de nieuwe knoppen heeft als naam een land ("Nederland" bijvoorbeeld).
// Als we dan op één van de landknoppen drukken zien we ergens in de pagina een zin verschijnen
// met de tekst "De gemiddelde persoon in {land} is {jaar} oud".
// Om die zin te kunnen laten zien moeten we de gemiddelde leeftijd voor dat land berekenen.
// Rond de gemiddelde leeftijd af naar hele cijfers ( 18.4999 → 18 en 18.5 → 19).

//6: matchmaking
// Als we op de knop voor deze opdracht drukken zien we een lijst van alle mensen.
// -de lijst is gesorteerd op voornaam
// -we willen alleen volwassenen zien
// -van elke persoon zien we:
// -voornaam, achternaam
// -foto
// -land
// -leeftijd
// -sterrenbeeld (Steenbok, Weegschaal etc)
// Bij elke persoon zien we een knop met als titel "vind matches".
// Als we op die knop drukken:
// -verdwijnt de grote lijst met mensen
// -zien we de aangeklikte persoon bovenaan staan
// -daaronder zien we een lijst van "matches" van die persoon
// -iemand mag niet met zichzelf matchen
// functie om data in de DOM te plaatsen:
// const addDataToDom = (array) => {
//   array.forEach((randomPersonData) => {
//     const listItem = document.createElement("li"); //li element maken
//     dataList.appendChild(listItem);
//     const textItem = document.createElement("p");
//     listItem.appendChild(textItem);
//     if (array === "getCountries") {
//       textItem.innerHTML = `${getCountries}`;
//     } else if (array === "getSteenbokvrouwen") {
//       textItem.innerHTML = `${randomPersonData.name} ${randomPersonData.surname} `; //laat voor- en achternaam en hun foto zien
//       const portretImg = document.createElement("img"); // img element maken
//       listItem.appendChild(portretImg); // portretImg toevoegen aan li element
//       portretImg.setAttribute("class", "portret-img");
//       portretImg.setAttribute("src", "https://picsum.photos/200");
//     }
//   });
// };

//switch functie om de verschillende buttons aan te sturen
const addListHandler = (event) => {
  const filterName = event.target.id;
  console.log(filterName);
  const expr = filterName;
  switch (expr) {
    case "landenlijst":
      removeList();
      addCountriesToDom(getCountries);
      break;
    case "steenbokvrouwen":
      removeList();
      addWomenToDom(getSteenbokvrouwen);
      //console.log("steenbokvrouwen", getSteenbokvrouwen);
      break;
    case "ouwe-creditcards":
      removeList();
      addPeopleToDom(getPeople);
      //console.log("people", people);
      break;
    case "meeste-mensen":
      removeList();
      addCountriesToDom2(sortByNumberOfPeople);
      break;
    case "gemiddelde-leeftijd":
      removeList();

      break;
    case "matchmaking":
      removeList();

      break;
  }
};

//eventlistener aan menubtns

menuBtns.forEach((btn) => {
  btn.addEventListener("click", addListHandler);
});
