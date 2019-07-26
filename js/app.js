"use strict";

const people = new XMLHttpRequest();
people.addEventListener('load', function(){
    const personList = JSON.parse(this.responseText);
    const results = personList.results;
    for(let i = 0; i < results.length; i++) {
        let human = results[i];
        console.log(`People${[i + 1]}: ${human.name}`);
    }
})
people.open("GET", "https://swapi.co/api/people");
people.send();


const planets = new XMLHttpRequest();
planets.addEventListener("load", function(){
    const planetList = JSON.parse(this.responseText);
    const results = planetList.results;
    for(let i = 0; i < results.length; i++) {
        let planet = results[i];
        console.log(`Planet${[i + 1]}: ${planet.name}`);
    }
})
planets.open("GET", "https://swapi.co/api/planets/");
planets.send();


const starship = new XMLHttpRequest();
starship.addEventListener("load", function() {
    // console.log(JSON.parse(this.responseText));
    const starshipList = JSON.parse(this.responseText);
    const results = starshipList.results;
    for(let i = 0; i < results.length; i++) {
        let starships = results[i];
        console.log(`Starship ${[i + 1]}: ${starships.name}`);
    }

})
starship.open("GET", "https://swapi.co/api/starships/");
starship.send();