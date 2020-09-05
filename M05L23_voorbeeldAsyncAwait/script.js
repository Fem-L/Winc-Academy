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

//Promise methode
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

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response received");
    const processedResponse = await procesRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork();
