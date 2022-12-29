const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

console.log(URL_API);

fetch(URL_API)
    .then((response) => response.json())
    .then((data) => {
        const characters = data.results;
        console.log(characters)

        for (let character of characters) {
            console.log(character);
            $container.innerHTML += `
      <div class="option-name"> 
        <img class="tarjeta" src="${character.image}" alt="imagen de ${character.name}"> 
        <div class="info">
        <br>
        <br>
        <br>
        <br>
        <h1 class="nombre"> ${character.name} </h1>
        <br>
        <br>
        Sex: ${character.gender} 
        <br>
        Live in: ${character.location.name} 
        <br> 
        Status: ${character.status}
        <br>
        <br>
        <br>
        </div>
        </div>
       `;
        }
    });

