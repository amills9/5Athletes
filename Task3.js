/** 
 * Task 3
 * Based on the 5 athletes scripts 
 * @author Andrew Mills 
 * Created for TAFE NSW Australia
 * Cert IV Programming
 * ICTPRG414 - Programming Skills
 * @license MIT This project is licensed under the MIT License
 * @copyright Andrew Mills 2021
*/


// Declare the array for storing the athletes data
let athletes = [];

/**
 * Takes the information passed in from the HTML form and pushes to the array of athletes.
 *  
 * @param {string} name The person's name
 * @param {number} height The person's age
 */
function addAthlete(name, height) {
  athletes.push({Name: name, Height: height});
  sortAthlete(name, height);
};

/**
 * Take the HTML name form entry and search the array for the athlete.
 * 
 * @param {string} athletes The array object we are searching through
 * @param {string} target The name of the athlete that we are trying to find within the array
 * @returns Position of where the athlete is in the array
 */
function getAthlete(athletes, target) {
  var firstIndex = 0;
  var lastIndex = athletes.length - 1;

  while (firstIndex <= lastIndex) {
    var middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    if (athletes[middleIndex].Name == target) {
        return middleIndex;
    } else if (athletes[middleIndex].Name < target) {
        firstIndex = middleIndex + 1;
    } else {
        lastIndex = middleIndex - 1;
    }
  }

  return -1;
}


/**
 * This will sort the array in alphabetic order ready for the searching funcition.
 * 
 * @param {string} name The name of the athlete
 * @param {number} height The height of the athlete
 */
function sortAthlete(name, height) {
  athletes.sort(function(a, b){
    if (a.Name < b.Name) return -1;
    if (a.Name > b.Name) return 1;
    return 0;
  })

}

// EventListener for the Save button. 

document.getElementById("save").addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let height = document.getElementById("height").value;

// Checks the length of the array and push entry if enough roon un the array
  if (athletes.length < 5) {
      addAthlete(name, height);
      document.getElementById("message").innerHTML = "Sucessfully added athlete";
      document.getElementById("name").select();

// Prints an error if the array is full

  } else {
      document.getElementById("message").innerHTML = "Sorry the array is full";

  }
});


// EventListener for the find button
document.getElementById("find").addEventListener("click", function(){

// Takes the name we are searching for and creates the target value
  
  let target = document.getElementById("name").value;
  
// Passes the information to the getAthlete function and alerts the return value if found.
  
  alert(getAthlete(athletes, target));
});