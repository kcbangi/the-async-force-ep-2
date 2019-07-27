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
                errorEl.innerHTML = `Error ${this.status}.`;
                if (this.status === 404) {
                    const noInfo = document.createElement("h3");
                    noInfo.innerHTML = `No Information found.`;
                    errorEl.appendChild(noInfo);
                }
            }
    
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
        });
        peopleReq.open("GET", "https://swapi.co/api/people/" + inputID);
        peopleReq.send();
    }
});
