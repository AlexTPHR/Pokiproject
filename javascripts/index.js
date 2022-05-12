document.querySelector('#search').addEventListener("click", getPokemon)
document.querySelector('#pokemonList').addEventListener("click", getPokemonInfo)
window.addEventListener("keydown", event => {
    if (event.key === 'ArrowDown') {
        document.querySelector("body").style.background = "black";}
    else {document.querySelector("body").style.background = "white";}
    });

function populateData (data) {
    document.querySelector(".pokemonBox").innerHTML = `
        </div>
        </div>
        <div class="pokemonInfo">
        </div>
        <h1>Current area selected: ${data.name}</h1>
        <p>Pokemon encounters for this area: ${data.pokemon_encounters.map(e=> e.pokemon.name).join(", ")}</p>
        `
}

function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    fetch(`https://pokeapi.co/api/v2/location-area/${name}`)
    .then(response => response.json())
    .then(data => {
        populateData(data);
        });
}
function showPokemon(data){
    document.querySelector(".pContainer").innerHTML = `
        </div>
        </div>
        <div>
        <img
            src=${data.sprites['front_default']}
            alt=${data.name}
            />
        </div>
        <h1>Pokemon: ${data.name}</h1>
        `
}

function getPokemonInfo(e) {
    const name = document.querySelector("#pokemonSearch").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(data => {
        showPokemon(data);
        });
    }
