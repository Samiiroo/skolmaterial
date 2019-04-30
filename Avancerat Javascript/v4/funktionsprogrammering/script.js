const axios = require("axios")
axios.get("https://ghibliapi.herokuapp.com/films")

.then((response) => response)
.catch(function (error) {
   console.log("error");
})
.then (function (resp) {

  let castle = /Castle/g
  resp.data
  .map(obj => {
  if (obj.title.match(castle))
  console.log(obj.title);
})

});

