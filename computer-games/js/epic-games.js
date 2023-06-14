const api = "https://mbo-sd.nl/period3-fetch/games-pc-epic-games";
const container = document.querySelector('.data-container');
let gamesArray = [];

fetch(api)
.then(myData => myData.json())
.then(textData => showInPage(textData));

function CreateCard(title, description, img, genres, platforms, price, release) {
    return `
    <div class="col">
    <div class="card mb-3 w-100">
    <img src="${img}" class="card-img-top" alt="${title}">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <hr>
      <p class="card-text">${description}</p>
      <hr>
      <h7 class="card-text"><small class="text-muted">Genres: ${genres}</small></h7>
      <hr>
      <h7 class="card-text"><small class="text-muted">Platforms: ${platforms}</small></h7>
      <hr>
      <h7 class="card-text"><small class="text-muted">Price: ${price}</small></h7>
      <hr>
      <h7 class="card-text"><small class="text-muted">Release Date: ${release}</small></h7>
    </div>
  </div>
    </div>`;
}

function showInPage(data) {
    for(let i = 0; i < data.length; i++) {
        //console.log(data[i].img);
        container.innerHTML += CreateCard(data[i].title, data[i].description, data[i].img, data[i].genres, data[i].platforms, data[i].price, data[i].releaseDate);
    }
}