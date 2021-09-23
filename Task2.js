"use strict";
// Create two arrays, Names and Heights

let athleteNames = new Array();
let athleteHeights = new Array();
        
// Add athlete Name to Name array
// add athlete Height to Height array

function addAthlete(name, height) {
    for (let i = 0; i < 5;){
        name = athleteNames[i] = prompt("Enter Name:");
        height = athleteHeights[i] = prompt("Enter Height in cms");
        console.log("Added " + athleteNames[i] + " and " + athleteHeights[i] + " to array at position " + (i += 1))
    } 
    console.log("Array is full");
    
}

// Find athlete name in array based on possition in array

function findAthlete(position) {
    position = prompt("Enter array position for athlete (1, 2, 3, 4, or 5)");
    position -= 1
    var athleteString = "Athlete " + athleteNames[position] + " and height " + athleteHeights[position];
    console.log(athleteString);
}

// Remove athletes name and height from the arrays

function removeAthlete(athleteName){
    var athlete = window.prompt("Enter name to remove");
    var athleteName = athleteNames.indexOf(athlete);
        if (athleteName > -1 ) {
          athleteNames.splice(athleteName, 1);
          athleteHeights.splice(athleteName, 1);
          console.log("Athlete has been removed")
        }
        else
        {
          console.log ("Name not found")
        }
}

addAthlete();
findAthlete();
removeAthlete();
