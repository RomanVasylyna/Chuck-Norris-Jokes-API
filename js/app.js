

$(document).ready(() => {
console.log('Made By Roman Vasylyna');

$('#jokeBtn').on('click', (e) => {
$('#chuck').addClass('shake');
  getJoke();
  $('#jokeContainer').empty();
})


function getJoke() {
axios.get(`http://api.icndb.com/jokes/random`)
.then((response) => {
let jokes = response.data.value;
$('#jokeContainer').append(`<p id="jokePara" class="mt-3">${jokes.joke}</p>`);
setTimeout(() => $('#chuck').removeClass('shake'), 500);
})
.catch((error) => console.log(error));


}




});
