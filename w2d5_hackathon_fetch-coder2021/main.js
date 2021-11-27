//fetch multiple pokemon data 
    //fetch function for 5 pokemon 
    //data we need to fetch: pokemon name, pokemon type, abilities, weight
//create a randomize button 
    //combine using html 
//make all pokemon data into an array index as to randomize the fetched data 
    //link randomize button to fetched data
//Show an array of the fetched data on html 
//fetch 5 pokemon data 

//First Pokemon data fetched - Charizard
// fetch("https://pokeapi.co/api/v2/pokemon/charizard").then(response => response.json()).then(data => console.log(data))
// fetch("https://pokeapi.co/api/v2/pokemon/charizard").then(response => response.json()).then(
//     data => console.log("Pokemon name: " + data.name) + console.log("abilities: " + data.abilities[0].ability.name) + 
//     console.log(data.abilities[1].ability.name) + console.log("Pokemon type: " + data.types[0].type.name) + console.log(data.types[1].type.name) + console.log("Height(m): " + data.height/10)
//     )
//     //const city = getNestedObject(user, ['personalInfo', 'addresses', 0, 'city']);

// //fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then(response => response.json()).then(
//     data => console.log("Pokemon name: " + data.name) + console.log("abilities: " + data.abilities[0].ability.name) + 
//     console.log(data.abilities[1].ability.name) + console.log("Pokemon type: " + data.types[0].type.name) + console.log(data.types[1].type.name) + console.log("Height(m): " + data.height/10)
//     )

    let pokemonButton = document.querySelector('#new-pokemon');
        pokemonButton.addEventListener('click', randomiser);


        
    //    let n = Math.floor(Math.random() * 20) + 1
    //    console.log(n);
    async function randomiser(){
        let n = Math.floor(Math.random() * 150) + 1;
       console.log(n); const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` +n ) 
       console.log(n)
       const data = await response.json();

    console.log("Pokemon name: " + data.name) + console.log("abilities: " + data.abilities[0].ability.name) + 
    console.log(data.abilities[1].ability.name) + console.log("Pokemon type: " + data.types[0].type.name) 
    + console.log(data.types[1].type.name) + console.log("Height(m): " + data.height/10);
         document.querySelector('#name').innerText = "Name: " + data.name;
         document.querySelector('#abilities').innerText = 'Ability: ' + data.abilities[0].ability.name;
         document.querySelector('#type').innerText = 'Type: ' + data.types[0].type.name;
         document.querySelector('#height').innerText = 'Height: '+ data.height/10 + 'meters';

    }
    // async function getQuote() {
    //     const response = await fetch(`https://api.kanye.rest/`);
    //     console.log(response);
    //     const data = await response.json()
    //     console.log(data);
    //     kanyeQuote.innerText = data.quote;