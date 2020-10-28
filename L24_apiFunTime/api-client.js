//url: https://icanhazdadjoke.com/

const apiUrl = "https://icanhazdadjoke.com/j/R7UfaahVfFd";

const getJokeFromApi = async () => {
  try {
    const joke = `${apiUrl}`;
    const response = await fetch(joke, { method: "GET" });
    console.log(response);
    return response;
  } catch (error) {
    console.log("error");
  }
};
