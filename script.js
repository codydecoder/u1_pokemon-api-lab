console.log('working')

let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    //types
    let pokemonType = document.querySelector("#pokemonType")
    //forms
    let pokemonForm = document.querySelector("#pokemonForm")

    //Axios call goes here
    //remember to use Async and Await!
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    console.log(response)
    let pokeName = response.data.name
    let pokeImage = response.data.sprites.front_default
    //for loop to store types array data from api and store in pokeType array
    let pokeType = []
    for(let i = 0; i < response.data.types.length; i++) {
        pokeType.push(` ${response.data.types[i].type.name}`)
    }
    //forms
    let pokeForm = []
    for(let i = 0; i < response.data.forms.length; i++) {
        pokeForm.push(` ${response.data.forms[i].name}`)
    }

    console.log(pokeForm)

    //DOM Setters go here
    pokemonName.innerHTML = `<h2>${pokeName}</h2>`
    pokemonImage.innerHTML = `<img src="${pokeImage}">`
    //types
    pokeType.length > 1 ? pokemonType.innerText = `Types: ${pokeType}`: pokemonType.innerText = `Type: ${pokeType}`
    //forms
    pokeForm.length > 1 ? pokemonForm.innerText = `Forms: ${pokeForm}`: pokemonForm.innerText = `Form: ${pokeForm}`

}
)
