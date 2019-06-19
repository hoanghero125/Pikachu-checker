import './index.css';
async function getPokemon(name) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    let pokemonData = await response.json();
    let imageUrl = pokemonData.sprites.front_default;
    let img = document.getElementById("pokemon_img")
    img.src = imageUrl;
    let pokename = document.getElementById("name");
    pokename.textContent = pokemonData.name.toUpperCase();
    }


let btn = document.getElementById("btn_get_pokemon")
btn.addEventListener("click", () => {
    let input = document.getElementById("pokemon_name")
    getPokemon(input.value)
})



