console.log(randomPersonData);

//Variabelen
const menuBtns = document.querySelectorAll("#button-lijst li button"); //nodelist van buttons
const dataList = document.getElementById("lijst"); //ul is het ouder element

//Functies om datalijsten te verwijderen
const removeList = () => {
  while (lijst.firstChild) {
    lijst.removeChild(lijst.firstChild);
  }
};

const removeAnswers = () => {
  while (answers.firstChild) {
    answers.removeChild(answers.firstChild);
    answers.setAttribute("class", "");
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

//1: LANDENLIJST//////////////////////////////////////////////////////////////////////////////////////////////

//FilterFunctie
let getCountries = randomPersonData
  .map((land) => land.region) //sorteert op de landen
  .sort(); //in alfabetische volgorde
let landen = new Set(getCountries); //maakt van een array een Set, verwijderd daarmee alle duplicaten
getCountries = Array.from(landen); //zet Set om naar array

//plaatsingsFunctie
const addCountriesToDom = (array) => {
  array.forEach((getCountries) => {
    const listItem = document.createElement("li");
    dataList.appendChild(listItem);
    dataList.setAttribute("class", "lijst");
    listItem.innerHTML = `${getCountries}`;
  });
};

//2: STEENBOKVROUWEN////////////////////////////////////////////////////////////////////////////////////////////////////

//Sorteerfuncties

//sorteer deze lijst op voornaam
// steenbokvrouwen.sort((a, b) => {
//   if (a.name > b.name) return 1;
//   else if (b.name > a.name) return -1;
//   return 0;
// });

const isFemale = (person) => person.gender === "female"; //selecteer vrouwen
const isOver30 = (person) => person.age > 30; //selecteer boven de 30 jaar
const sortByName = (person1, person2) => sorteer(person1.name > person2.name); //sorteer op alfabet
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
    const listItem = document.createElement("li");
    dataList.appendChild(listItem);
    const textItem = document.createElement("p");
    listItem.appendChild(textItem);
    dataList.setAttribute("class", "lijst");
    textItem.innerHTML = `${randomPersonData.name} ${randomPersonData.surname} `; //laat voor- en achternaam en hun foto zien
    const portretImg = document.createElement("img");
    listItem.appendChild(portretImg); // portretImg toevoegen aan li element
    portretImg.setAttribute("class", "portret-img");
    portretImg.setAttribute("src", "https://picsum.photos/200");
    const birthdate = document.createElement("p");
    listItem.appendChild(birthdate);
    birthdate.innerHTML = `Geboortedatum: ${randomPersonData.birthday.dmy}`;
  });
};

//3: OUWE CREDITCARDS//////////////////////////////////////////////////////////////////////////////////////

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

//Sorteer de lijst zodat de snelst verlopende creditcards bovenaan staan(niet gelukt!)
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
    const listItem = document.createElement("li");
    dataList.appendChild(listItem);
    dataList.setAttribute("class", "lijst");
    listItem.setAttribute("class", "people");
    listItem.innerHTML = `Naam: ${randomPersonData.name} ${randomPersonData.surname}`;
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

//4: MEESTE MENSEN///////////////////////////////////////////////////////////////////////////////////
//Functies;
//Alle landen die voorkomen in de data.
const countries = randomPersonData.map((country) => country.region);

// optellen van de duplicaten in een array (stackoverflow)
const countingPeople = countries.reduce((prev, cur) => {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

//SorteerFunctie; De lijst moet zo gesorteerd zijn dat de landen met de meeste mensen bovenaan staan.
const sortByNumberOfPeople = (a, b) => b.aantal_mensen - a.aantal_mensen;

//een array met objecten van de resultaten
const getPeoplePerCountry = [];
for (land in countingPeople) // for-in loop
  getPeoplePerCountry.push({ land: land, aantal_mensen: countingPeople[land] });
getPeoplePerCountry.sort(sortByNumberOfPeople);

//plaatsingsfunctie
// Achter elk land moet komen te staan hoeveel van de mensen in de lijst in dat land wonen.
const addCountriesToDom2 = (array) => {
  array.forEach((getPeoplePerCountry) => {
    const listItem = document.createElement("li");
    dataList.appendChild(listItem);
    dataList.setAttribute("class", "lijst");
    listItem.setAttribute("class", "people-country");
    listItem.innerHTML = ` ${getPeoplePerCountry.land}  (${getPeoplePerCountry.aantal_mensen})`;
  });
};

//5: GEMIDDELDE LEEFTIJD///////////////////////////////////////////////////////////////

//functie om de gemiddelde leeftijd te berekenen

const getAverageAgeOfPeoplePerCountry = (country) => {
  const peopleFromCountry = randomPersonData.filter(
    (person) => person.region === country
  ); //pakt het aantal mensen per land

  const amountOfPeople = peopleFromCountry.length; //pakt de lengte van de array

  const totalAge = peopleFromCountry.reduce(
    (sum, current) => sum + current.age,
    0
  ); //telt de leeftijden van de mensen in de array bij elkaar op

  return Math.round(totalAge / amountOfPeople);
};

//plaatsingsFunctie

const addButtonsToDom = (array) => {
  array.forEach((getCountries) => {
    const listItem = document.createElement("li"); //li element maken
    dataList.appendChild(listItem);
    listItem.setAttribute("class", "countries");
    dataList.setAttribute("class", "countries-menu");
    const button = document.createElement("button");
    button.setAttribute("class", "menu_button countries-menu_button");
    listItem.appendChild(button);
    button.append(`${getCountries}`);
    button.addEventListener("click", addCountryBtnHandler);
  });
};

//bedieningsfunctie voor nieuwe btnknoppen

const addCountryBtnHandler = (event) => {
  removeAnswers();
  const country = event.target.innerHTML;
  let average_age = getAverageAgeOfPeoplePerCountry(country);
  let answers = document.getElementById("answers");
  answers.setAttribute("class", "answers-style");
  const tekst = document.createElement("p");
  answers.appendChild(tekst);
  tekst.append(
    `De gemiddelde persoon in ${country} is ${average_age} jaar oud`
  );
};

//6: MATCHMAKING////////////////////////////////////////////////////////////////////////////////////
// Als we op de knop voor deze opdracht drukken zien we een lijst van alle mensen.
//Functie om sterrenbeelden te bepalen
const ARIES = "Ram";
const TAURUS = "Stier";
const GEMINI = "Tweeling";
const CANCER = "Kreeft";
const LEO = "Leeuw";
const VIRGO = "Maagd";
const LIBRA = "Weegschaal";
const SCORPIO = "Schorpioen";
const SAGGITARIUS = "Boogschutter";
const CAPRICORN = "Steenbok";
const AQUARIUS = "Waterman";
const PISCES = "Vissen";

const getStarSign = (month, day) => {
  if (month === 1 && day <= 20) return CAPRICORN;
  if (month === 1 && day >= 21) return AQUARIUS;
  if (month === 2 && day <= 19) return AQUARIUS;
  if (month === 2 && day >= 20) return PISCES;
  if (month === 3 && day <= 20) return PISCES;
  if (month === 3 && day >= 21) return ARIES;
  if (month === 4 && day <= 20) return ARIES;
  if (month === 4 && day >= 21) return TAURUS;
  if (month === 5 && day <= 20) return TAURUS;
  if (month === 5 && day >= 21) return GEMINI;
  if (month === 6 && day <= 21) return GEMINI;
  if (month === 6 && day >= 22) return CANCER;
  if (month === 7 && day <= 22) return CANCER;
  if (month === 7 && day >= 23) return LEO;
  if (month === 8 && day <= 23) return LEO;
  if (month === 8 && day >= 24) return VIRGO;
  if (month === 9 && day <= 21) return VIRGO;
  if (month === 9 && day >= 22) return LIBRA;
  if (month === 10 && day <= 22) return LIBRA;
  if (month === 10 && day >= 23) return SCORPIO;
  if (month === 11 && day <= 21) return SCORPIO;
  if (month === 11 && day >= 22) return SAGGITARIUS;
  if (month === 12 && day <= 21) return SAGGITARIUS;
  if (month === 12 && day >= 22) return CAPRICORN;
};

const addStarSign = (person) => {
  const month = parseInt(person.birthday.dmy.split("/")[1]); // 1..12
  const day = parseInt(person.birthday.dmy.split("/")[0]); // 1..31
  person.sign = getStarSign(month, day);
  return person;
};

//FilterFunctie
const getPeopleList = randomPersonData
  .filter(getAdults) //selecteert boven de 18 jaar, gebruikt van opdracht:3
  .map(addStarSign); // voegt sterrenbeeld toe

//plaatsingsfunctie
const addListToDom = (array) => {
  array.forEach((randomPersonData) => {
    const listItem = document.createElement("li");
    dataList.appendChild(listItem);
    dataList.setAttribute("class", "match-list");
    listItem.setAttribute("class", "match-people");
    listItem.innerHTML = `Naam: ${randomPersonData.name} ${randomPersonData.surname}`; // -voornaam, achternaam

    const country = document.createElement("p");
    listItem.appendChild(country);
    country.innerHTML = `Land: ${randomPersonData.region}`; // -land

    const age = document.createElement("p");
    listItem.appendChild(age);
    age.innerHTML = `Leeftijd: ${randomPersonData.age}`; // -leeftijd

    const birthdate = document.createElement("p");
    listItem.appendChild(birthdate);
    birthdate.innerHTML = `Geboortedatum: ${randomPersonData.birthday.dmy}`; //geboortedatum

    const starSign = document.createElement("p");
    listItem.appendChild(starSign);
    starSign.setAttribute("class", "starSign");
    starSign.innerHTML = `Sterrenbeeld: ${randomPersonData.sign}`; //sterrenbeeld

    const button = document.createElement("button");
    button.setAttribute("class", "match-button");
    button.dataset.id = `${randomPersonData.credit_card.number}`;
    button.dataset.parent = `${randomPersonData.sign}`;
    listItem.appendChild(button);
    button.append(`Vind matches`); // Bij elke persoon zien we een knop met als titel "vind matches".
    button.addEventListener("click", addMatchesHandler);
  });
};

//Bedieningsfunctie voor vind match button

const addMatchesHandler = (event) => {
  removeList(); // -verdwijnt de grote lijst met mensen

  let cardId = event.target.dataset.id; //unieke ID ophalen
  let signOfTarget = event.target.dataset.parent;
  let cardSelf = event.target;
  console.log(cardSelf);
  //Matchfunctie
  const sameSign = (person) => person.sign === signOfTarget;
  const uniekId = (person) => person.credit_card.number !== cardId;

  const getMatchingPeopleList = getPeopleList.filter(sameSign).filter(uniekId);
  console.log("getMatchingPeople", getMatchingPeopleList);
  addListToDom(getMatchingPeopleList); // -daaronder zien we een lijst van "matches" van die persoon
};

//switch functie om de verschillende buttons aan te sturen/////////////////////////////////////////
const addListHandler = (event) => {
  const filterName = event.target.id;
  const expr = filterName;
  switch (expr) {
    case "landenlijst":
      removeList();
      removeAnswers();
      addCountriesToDom(getCountries);
      break;
    case "steenbokvrouwen":
      removeList();
      removeAnswers();
      addWomenToDom(getSteenbokvrouwen);
      break;
    case "ouwe-creditcards":
      removeList();
      removeAnswers();
      addPeopleToDom(getPeople);
      break;
    case "meeste-mensen":
      removeList();
      removeAnswers();
      addCountriesToDom2(getPeoplePerCountry);
      break;
    case "gemiddelde-leeftijd":
      removeList();
      removeAnswers();
      addButtonsToDom(getCountries);
      break;
    case "matchmaking":
      removeList();
      removeAnswers();
      addListToDom(getPeopleList);
      break;
  }
};

//eventlistener aan menubtns

menuBtns.forEach((btn) => {
  btn.addEventListener("click", addListHandler);
});
