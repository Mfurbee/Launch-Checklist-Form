// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function () {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         let planet = Math.floor(Math.random() * 6);;
         // Add HTML that includes the JSON data
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[planet].name}</li>
            <li>Diameter: ${json[planet].diameter}</li>
            <li>Star: ${json[planet].star}</li>
            <li>Distance from Earth: ${json[planet].distance}</li>
            <li>Number of Moons: ${json[planet].moons}</li>
         </ol>
         <img src="${json[planet].image}">
                  `;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         return;
      }
      else {
         if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
            alert("Please check your entries.")
            return;
         }
      }

      let faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = "visible";

      let pilotStatus = document.querySelector("li[id=pilotStatus]");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} ready for launch!`;
      
      let copilotStatus = document.querySelector("li[id=copilotStatus]");
      copilotStatus.innerHTML = `Copilot ${copilotName.value} ready for launch!`;

      let fuelStatus = document.querySelector("li[id=fuelStatus]");
      let cargoStatus = document.querySelector("li[id=cargoStatus]");
      let launchStatus = document.getElementById("launchStatus");
      
      if (fuelLevel.value < 10000) {
         fuelStatus.innerHTML = `Fuel Level ${fuelLevel.value} not enough fuel for the journey!`;
      }
      else {
         fuelStatus.innerHTML = `Fuel Level ${fuelLevel.value} ready for launch!`;
      }
      if (cargoMass.value > 10000) {
         cargoStatus.innerHTML = `Cargo Mass ${cargoMass.value} too high for the journey!`;
      }
      else {
         cargoStatus.innerHTML = `Cargo Mass ${cargoMass.value} ready for launch!`; 
      }
         
      if (fuelLevel.value < 10000 || cargoMass.value > 10000)
      {
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = "red";
      }
      else 
      {
         launchStatus.innerHTML = "Shuttle is ready for launch!";
         launchStatus.style.color = "green";
      }
   });


});

