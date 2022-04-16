//const pokemonURL = "https://pokeapi.co/api/v2/pokemon/"; //almaceno la URL en la api
const todosLosPokemons = 151; //El nº que necesito recoger de pokemons

const gallery$$ = document.querySelector(".gallery"); //creo el nodo con mi div con clase "gallery"

const findPokemon = async (i) => {
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(
      (res) => res.json()
    );
    return pokemon;
  };

function getCards(){
for (let index = 1; index < todosLosPokemons; index++) {
    buscarPokemon(index)
}}

function buscarPokemon(index){
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    .then((res) => res.json())
    .then((resParsedToJSON) => {
        console.log(resParsedToJSON);
        printCards(resParsedToJSON);
    })
}


const printCards = (card) => {
    console.log("card", card);
        const figure$$ = document.createElement("figure");
        const title$$ = document.createElement("h2");
        const image$$ = document.createElement("img");
        const type$$ = document.createElement("p");

        title$$.textContent = card.name;
        image$$.src = card.sprites.other['official-artwork'].front_default;
        type$$.textContent = card.types.map ((item) => item.type.name);

        figure$$.appendChild(title$$);
        figure$$.appendChild(image$$);
        gallery$$.appendChild(figure$$);
        figure$$.appendChild(type$$);

}

getCards();