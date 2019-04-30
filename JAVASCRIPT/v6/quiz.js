// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();
//open a new connection, using the get request on the url endpoint
request.open('GET', 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy');

request.onLoad= function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  data.forEach(movie => {
  // Log each movie's title
  console.log(movie.title);
});
}
request.send();
