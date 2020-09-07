//Promise (deze schrijven hoort bij backend)
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function procesRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information ${response}`);
  });
}

//Promise methode; (Het aanroepen van de promise is frontend)

/*
makeRequest("Google")
  .then((response) => {
    console.log("Response received");
    return procesRequest(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((error) => console.log(error));
*/

//Async await methode
//await zegt dat de code moet wachten met uitvoeren
async function doWork() {
  try {
    //in try komt alle code die kan falen
    const response = await makeRequest("Google"); //aanroepen van de eerste functie makeRequest
    console.log("Response received");
    const processedResponse = await procesRequest(response); //aanroepen tweede functie processedResponse
    console.log(processedResponse);
  } catch (error) {
    //catch vangt de code die faalt
    console.log(error);
  }
}

doWork();
