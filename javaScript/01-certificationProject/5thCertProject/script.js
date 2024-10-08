const input = document.getElementById("search-input");
const button = document.getElementById("search-button");
const result = document.getElementById("result");
const container = document.getElementById("container");
const pokemonName = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const types1 = document.getElementById("types1");
const hp = document.getElementById("hp");
const atk = document.getElementById("attack");
const def = document.getElementById("defense");
const specialAtk = document.getElementById("special-attack");
const specialDef = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const img = document.getElementById("img");


button.addEventListener("click", search)
  
  const getPokemon = async () => {
    try {
      const pokemonNameOrId = input.value.toLowerCase();
      const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
      const data = await response.json();

      pokemonName.innerHTML = data.name.toUpperCase();
      img.innerHTML = `<img src="${data.sprites.front_default}" id="sprite"></img>`;
      id.innerHTML = "#"+data.id;
      weight.innerHTML = data.weight;
      height.innerHTML = data.height;
      hp.innerHTML = data.stats[0].base_stat;
      atk.innerHTML = data.stats[1].base_stat;
      def.innerHTML = data.stats[2].base_stat;
      specialAtk.innerHTML = data.stats[3].base_stat;
      specialDef.innerHTML = data.stats[4].base_stat;
      speed.innerHTML = data.stats[5].base_stat;
      if (data.types[1]) {
        types.innerHTML = `<div id="type1">${data.types[0].type.name.toUpperCase()}</div>
      <div id="type2">${data.types[1].type.name.toUpperCase()}</div>`
    }else{
        types.innerHTML = `<div id="type1">${data.types[0].type.name.toUpperCase()}</div>`
      };


    } 
    catch(err) {
      alert("Pokémon not found");
    }
  };

  function search (){ 
    clearData();
    getPokemon();
  }
 function clearData(){
   pokemonName.innerHTML = ""
   img.innerHTML = "";
   id.innerHTML = "";
   weight.innerHTML = "";
   height.innerHTML = "";
   hp.innerHTML = "";
   atk.innerHTML = "";
   def.innerHTML = "";
   specialAtk.innerHTML = "";
   specialDef.innerHTML = "";
   speed.innerHTML = "";
   types.innerHTML = "";
 }