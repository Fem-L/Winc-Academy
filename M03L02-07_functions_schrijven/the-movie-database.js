/* The movie database
-maak een object met een title, duration en stars.
-maak een function dat "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes." print
*/

const movie = {
  title: 'Puff the Magic Dragon',
  duration: 30,
  stars: ['Puff', 'Jackie', 'Living Sneezes'],
};

const favoriteMovie = function () {
  let movieInfo =
    movie.title +
    ' last for ' +
    movie.duration +
    ' minutes. Stars: ' +
    movie.stars;
  console.log(movieInfo);
};

favoriteMovie();
