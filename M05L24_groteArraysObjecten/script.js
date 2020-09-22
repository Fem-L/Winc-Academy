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

//SorteerFunctie
const sorteer = (a, b) => {
  return a - b;
};

//1: landenlijst
//FilterFunctie
let landenLijst = randomPersonData
  .map((land) => land.region) //sorteert op de landen
  .sort(); //zet lijst in alfabetische volgorde
let landen = new Set(landenLijst); //maakt van een array een Set, verwijderd daarmee alle duplicaten
landenLijst = Array.from(landen); //zet Set om naar array

//plaatsingsFunctie
const addCountriesToDom = (array) => {
  array.forEach((landenLijst) => {
    const listItem = document.createElement("li"); //li element maken
    const portretImg = document.createElement("img"); // img element maken
    dataList.appendChild(listItem);
    listItem.innerHTML = `${landenLijst}`;
  });
};

//2: steenbokvrouwen
//FilterFunctie
const steenbokvrouwen = randomPersonData.filter((person) => {
  let birthdays = person.birthday.mdy.split("/");
  if (
    ((birthdays[1] >= 22 && birthdays[0] == 12) ||
      (birthdays[1] <= 19 && birthdays[0] == 1)) && //-een steenbok zijn (jarig van 22 december t/m 19 januari);
    person.gender == "female" && //-vrouw zijn
    person.age >= 30 //-ouder zijn dan 30
  ) {
    return birthdays;
  }
});

//Sorteerfunctie
//sorteer deze lijst op voornaam
steenbokvrouwen.sort((a, b) => {
  if (a.name > b.name) return 1;
  else if (b.name > a.name) return -1;
  return 0;
});

//plaatsingsFunctie
const addWomenToDom = (array) => {
  array.forEach((randomPersonData) => {
    const listItem = document.createElement("li"); //li element maken
    dataList.appendChild(listItem);
    listItem.innerHTML = `${randomPersonData.name} ${randomPersonData.surname} `; //laat voor- en achternaam en hun foto zien
    const portretImg = document.createElement("img"); // img element maken
    listItem.appendChild(portretImg); // portretImg toevoegen aan li element
    //portretImg.setAttribute("class", "portret-img");
    //portretImg.setAttribute("src", "https://picsum.photos/200");
  });
};

//3: ouwe creditcards
//Variabelen

//Datum van vandaag
let today;
today = new Date();
let jaar = today.getFullYear().toString().split(""); //fulYear geeft 4 nummers
let thisYear = jaar[2] + jaar[3]; //dit jaar teruggebracht tot twee nummers

//FilterFunctie
const people = randomPersonData.filter((person) => {
  let creditcardsExpDate = person.credit_card.expiration.split("/");
  if (
    (creditcardsExpDate[1] == thisYear || //// De verloopdatum moet in de toekomst liggen (van dit jaar).
      creditcardsExpDate[1] == parseInt(thisYear) + 1) && //// De verloopdatum moet in het komende jaar liggen.
    person.age >= 18 // De lijst mag alleen volwassenen bevatten.
  ) {
    return creditcardsExpDate; //
  }
});
//console.log(people);
//Sorteerfunctie //Sorteer de lijst zodat de snelst verlopende creditcards bovenaan staan/////moet nog
// const sortedPeople = people.filter((person) => {
//   const creditCardDateArray = people.map((date) =>
//     date.credit_card.expiration.split("/")
//   );
//   console.log("creditCards", creditCardDateArray);

//   let sortedDate = creditCardDateArray.sort((a, b) => a - b);
//   console.log("sortedDate", sortedDate);
//   return sortedDate;
// });
// console.log("sortedPeople", sortedPeople);

const creditCardDateArray = people.map((date) =>
  date.credit_card.expiration.split("/")
);
console.log("creditCards", creditCardDateArray);
const creditCardMonth = creditCardDateArray.map((month) => month[0]);
let sortedDate = creditCardMonth.sort((a, b) => a - b);
console.log(sortedDate);

const addPeopleToDom = (array) => {
  array.forEach((randomPersonData) => {
    const listItem = document.createElement("li"); //li element maken
    dataList.appendChild(listItem);
    listItem.setAttribute("class", "people");
    listItem.innerHTML = `${randomPersonData.name} ${randomPersonData.surname}`; // - voornaam, achternaam
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
// Maak een lijst van alle landen die voorkomen in de data.
// Achter elk land moet komen te staan hoeveel van de mensen in de lijst in dat land wonen.
// De lijst moet zo gesorteerd zijn dat de landen met de meeste mensen bovenaan staan.

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

//switch functie om de verschillende buttons aan te sturen
const executeClickedButton = (event) => {
  const filterName = event.target.id;
  console.log(filterName);
  const expr = filterName;
  switch (expr) {
    case "landenlijst":
      removeList();
      addCountriesToDom(landenLijst);
      //console.log("landenLijst", landenLijst);
      break;
    case "steenbokvrouwen":
      removeList();
      addWomenToDom(steenbokvrouwen);
      //console.log("steenbokvrouwen", steenbokvrouwen);
      break;
    case "ouwe-creditcards":
      removeList();
      addPeopleToDom(people);
      //console.log("people", people);
      break;
    case "meeste-mensen":
      removeList();

      break;
    case "gemiddelde-leeftijd":
      removeList();

      break;
    case "matchmaking":
      removeList();

      break;
  }
};

//eventhandler aan menubtns

menuBtns.forEach((btn) => {
  btn.addEventListener("click", executeClickedButton);
});
