"use strict";

const request = document.querySelector("#requestResourceButton");
request.addEventListener("click", function() {
    const input = document.querySelector("#resourceType").value;
    const inputID = document.querySelector("#resourceId").value;
    const container = document.querySelector("#contentContainer");
  
    if (input === "people") {
        const peopleReq = new XMLHttpRequest();
        peopleReq.addEventListener("load", function() {
            if (this.status !== 200) {
                const errorEl = document.createElement("h2");
                errorEl.innerHTML = `Error ${this.status}`;
                container.appendChild(errorEl)
                if (this.status === 404) {
                    const noInfo = document.createElement("h3");
                    noInfo.innerHTML = `${inputID} not found.`;
                    container.appendChild(noInfo);
                }
            } else {
                const personName = document.createElement("h2");
                const responseText = JSON.parse(this.responseText);
                personName.innerHTML = responseText.name;
                container.appendChild(personName);
            
                const personGender = document.createElement("p");
                personGender.innerHTML = responseText.gender;
                container.appendChild(personGender);
            
                const personSpecies = document.createElement("p");
                const speciesReq = new XMLHttpRequest();
                speciesReq.addEventListener("load", function() {
                    const responseText = JSON.parse(this.responseText);
                    personSpecies.innerHTML = responseText.name;
                    container.appendChild(personSpecies);
                });
                speciesReq.open("GET", responseText.species.toString());
                speciesReq.send();
            }
        });
        peopleReq.open("GET", "https://swapi.co/api/people/" + inputID);
        peopleReq.send();
    }

    if (input === "planets") {
        const planetsReq = new XMLHttpRequest();
        planetsReq.addEventListener("load", function() {
            if (this.status !== 200) {
                const errorEl = document.createElement("h2");
                errorEl.innerHTML = `Error ${this.status}`;
                container.appendChild(errorEl)
                if (this.status === 404) {
                    const noInfo = document.createElement("h3");
                    noInfo.innerHTML = `${inputID} not found.`;
                    container.appendChild(noInfo);
                }
            } else {
                const planetsName = document.createElement("h2");
                const responseText = JSON.parse(this.responseText);
                planetsName.innerHTML = responseText.name;
                container.appendChild(planetsName);

                const planetsTerrain = document.createElement("p");
                planetsTerrain.innerHTML = responseText.terrain;
                container.appendChild(planetsTerrain);

                const planetsPopulation = document.createElement("p");
                planetsPopulation.innerHTML = responseText.population;
                container.appendChild(planetsPopulation);
            }
        });
        planetsReq.open("GET", "https://swapi.co/api/planets/" + inputID);
        planetsReq.send();
    }

    if(input === "starships") {
        const starshipsReq = new XMLHttpRequest();
        starshipsReq.addEventListener("load", function() {
            if (this.status !== 200) {
                const errorEl = document.createElement("h2");
                errorEl.innerHTML = `Error ${this.status}`;
                container.appendChild(errorEl)
                if (this.status === 404) {
                    const noInfo = document.createElement("h3");
                    noInfo.innerHTML = `${inputID} not found.`;
                    container.appendChild(noInfo);
                }
            } else {
                const starshipsName = document.createElement("h2");
                const responseText = JSON.parse(this.responseText);
                starshipsName.innerHTML = responseText.name;
                container.appendChild(starshipsName);

                const starshipsManufacturer = document.createElement("p");
                starshipsManufacturer.innerHTML = responseText.manufacturer;
                container.appendChild(starshipsManufacturer);

                const starshipsClass = document.createElement("p");
                starshipsClass.innerHTML = responseText.starship_class;
                container.appendChild(starshipsClass);

                const filmsUL = document.createElement("ul");
                filmsUL.classList = "filmUL";
                container.appendChild(filmsUL);

                const filmReq = new XHMHttpRequest();
                filmReq.addEventListener("load", function() {
                    const result = JSON.parse(this.responseText);
                    for(let i = 0; i < films.length; i++) {
                        const filmsLI = document.createElement("li");
                        filmsLI.classList = "filmLI"
                        filmsLI.innerHTML = result[i].films;
                        filmsUL.appendChild(filmsLI);
                    }
                })
                filmReq.open("GET", films[i]);
                filmReq.send();
            }
        })
        starshipsReq.open("GET", "https://swapi.co/api/starships/" + inputID);
        starshipsReq.send();
    }
});
