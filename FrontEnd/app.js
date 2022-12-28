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
      <li class="option-name"> Nombre: ${character.name} 
        <br>
        <img class="tarjeta" src="${character.image}" alt="imagen de ${character.name}"> 
        <br>
        Sex: ${character.gender} 
        <br>
        Live in: ${character.location.name} 
        <br> 
        Status: ${character.status}
        <br>
        <br>
        <br>
        </li>
       `;
        }
    });

