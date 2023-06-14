const resultElement = document.querySelector('.result');

function processAPI(apiUrl) {
    fetch(apiUrl)
        .then (thisData => thisData.json())
        .then (thisJsonData => createBootstrapCards(thisJsonData));
}

function createBootstrapCards(thisJsonData){
    const row = createBootstrapRow();

    //deze for loop maakt 3 cards aan en zet elke card in een bootstrap column. Aan het einde wordt de column toegevoegd aan de row.
    for(let i = 0; i < 3; i++){
        const column = createBootstrapColumn();
        const card = createBootstrapCard(thisJsonData[i].img, thisJsonData[i].title, thisJsonData[i].description);
        //voegt de card toe aan de column.
        column.appendChild(card);
        //voegt de column toe aan de row.
        row.appendChild(column);
    }
    
    //de row wordt toegevoegd aan het result element.
    resultElement.appendChild(row);
}

//Creates a bootstrap row.
function createBootstrapRow(){
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
}

//creates a bootstrap column with flex and aligned items stretch (so cards are equal in height).
function createBootstrapColumn(){
    const column = document.createElement('div');
    column.classList.add('col', 'd-flex', 'align-items-stretch');
    return column;
}

//creates a bootstrap 'card' and fills various 'card' classes with data provided.
function createBootstrapCard(imageUrl, cardTitle, cardDescription){
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl
    
    imgElement.classList.add('card-img-top');

    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');

    const cardBodyTitleElement = document.createElement('h4');
    cardBodyTitleElement.classList.add('card-title');
    cardBodyTitleElement.textContent = cardTitle;

    const cardBodyTextElement = document.createElement('p');
    cardBodyTextElement.classList.add('card-text');
    cardBodyTextElement.textContent = cardDescription;

    cardBodyElement.appendChild(cardBodyTitleElement);
    cardBodyElement.appendChild(cardBodyTextElement);

    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardBodyElement);

    return cardElement;
}