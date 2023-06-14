const container = document.querySelector(".container");
fetch("https://mbo-sd.nl/period3-fetch/games-console-activision-blizzard")
    .then(myJsonData => myJsonData.text())
    .then(valuedData => consoleLog(valuedData))

function consoleLog(data) {
    const dataparsed = JSON.parse(data)
    for (let i = 0; i < dataparsed.length; i++) {
        createCard(dataparsed[i]);
    }
}
function createCard(object) {
    container.innerHTML +=
        `
        <div class="row d-flex justify-content-center mt-5">
        <div class="col-6 border shadow-3-strong">
            <h3 class="h3">${object.title}</h3>
            <p>
                ${object.description}
                <br>
                playercount of: ${object.playerCount}
                <br>
                with sales of: ${object.sales}
            </p>
            <p class="text-black">
                ${object.firstGame}
            </p>
            <p class="text-black">
                ${object.genres}
            </p>
        </div>
        <div class="col-6">
            <img src="${object.img}" class="img-fluid" alt="">
        </div>
    </div>
    </div>`
}