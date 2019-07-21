async function getPokemon(name) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    let pokemonData;
    if(response.status === 200) {
        pokemonData = await response.json()
    }
    else {
        pokemonData = null;
    }
    console.log(pokemonData);
    if(pokemonData == null){
        alert("You have enter a wrong name or number of the Pokemon. Please enter again!")
    } else {
        let imageUrl = pokemonData.sprites.front_default;
        let img = document.getElementById("pokemon_img")

        img.src = imageUrl;
        let pokename = document.getElementById("name");
        pokename.textContent = pokemonData.name.toUpperCase();
    }
    
    }
let btn = document.getElementById("btn_get_pokemon")
form.addEventListener("submit", (event) => {
    let pokename = document.getElementById("name");
    let img = document.getElementById("pokemon_img")
    pokename.innerHTML = ""
    img.src = ""
    event.preventDefault();
    let input = document.getElementById("pokemon_name").value
        if (input == "") {
            let pokename = document.getElementById("name");
    let img = document.getElementById("pokemon_img")
    pokename.innerHTML = ""
    img.src = ""
        alert("You have to fill Pokémon names or numbers into the box")
    }
    else{
        getPokemon(input)
    }
})



