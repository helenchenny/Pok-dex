const pokemon = document.getElementById("search-input")
const search = document.getElementById("input")
const pokemonName = document.getElementById('pokemon-name')
const pokemonID = document.getElementById('pokemon-id')
const pokemonWeight = document.getElementById('weight')
const pokemonHeight = document.getElementById('height')
const pokemonImg = document.getElementById('image')
const pokemonType = document.getElementById('types')
const hp = document.getElementById('hp')
const attack = document.getElementById('attack')
const defense = document.getElementById('defense')
const sepcialA = document.getElementById('special-attack')
const specialD = document.getElementById('special-defense')
const speed = document.getElementById('speed')



const getPokemon = async () => {
  try {
    const pokemonInput = pokemon.value.toLowerCase()
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonInput}`);
    const data = await res.json();	
    renderPokemon(data)
    
  } catch (err) {
    reset()
    alert("Pokémon not found")
  }};


const renderPokemon = (data) => {
  const {height, name, id, sprites, stats, weight, types} = data
  const {front_default} = sprites

  pokemonName.textContent = `${name.toUpperCase()}`
  pokemonID.textContent = `#${id}`
   pokemonWeight.textContent = `Weight: ${weight}`
    pokemonHeight.textContent = `Height: ${height}`
    pokemonImg.innerHTML = `<img src = '${front_default}' id = "sprite">`
    pokemonType.innerHTML = types.map((x)=> {
      const {type} = x
      const {name} = type
      return `<p>${name}</p>`
    }).join("").toUpperCase()
    hp.textContent = stats[0].base_stat
    attack.textContent = stats[1].base_stat
    defense.textContent = stats[2].base_stat
    sepcialA.textContent = stats[3].base_stat
    specialD.textContent = stats[4].base_stat
    speed.textContent = stats[5].base_stat
}

const reset = () => {
  pokemonName.textContent = ""
  pokemonID.textContent = ""
   pokemonWeight.textContent = ""
    pokemonHeight.textContent = ""
    pokemonImg.innerHTML = ""
    pokemonType.innerHTML = ""
    hp.textContent = ""
    attack.textContent = ""
    defense.textContent = ""
    sepcialA.textContent = ""
    specialD.textContent = ""
    speed.textContent = ""
}


search.addEventListener("submit",(e) => {
  e.preventDefault()
  getPokemon()
})
