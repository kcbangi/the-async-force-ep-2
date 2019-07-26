"use strict";
const people = new XMLHttpRequest();
people.addEventListener('load', function(){
    const personList = JSON.parse(this.responseText);
    const results = personList.results;
    console.log(personList);

    // for(let i = 0; i < result.length; i++) {
    //     console.log(results);
    // }
})
people.open("GET", "https://swapi.co/api/people");
people.send();




// const planet = new XMLHttpRequest();
// planet.addEventListener("load", function(){
//     // const planetList = JSON.parse(this.responseText);
//     // console.log(planetList);
// })
// people.open("GET", "https://swapi.co/api/planets/");
// people.send();



// const starship = new XMLHttpRequest();
// starship.addEventListener("load", function() {

// })
// starship.open("GET", "https://swapi.co/api/starships/");
// starship.send();