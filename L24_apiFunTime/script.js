const waitingForJoke = async () => {
  try {
    const jokeForDom = document.getElementById("joke"); //div element is parent voor img element
    const getjoke = await getJokeFromApi(); //object
    //const genresList = getGenres.genres; //van object naar array
    //functie om listItems te plaatsen in de DOM
    // const addJokeToDom =
    //     let listItem = document.createElement("img"); //img element maken
    //     movieGenres
    //       .appendChild(listItem) //li toevoegen aan ul element
    //       .append(`Genre naam: ${genresList.name} id: ${genresList.id}`);
    //   });
    // };
    // addListToDom(genresList);
  } catch (error) {
    console.log(error);
  }
};

waitingForJoke();
