let athletes = [];

function addAthlete(name, height) {
  athletes.push({Name: name, Height: height});
};

function getAthlete(index) {
  
};

function removeAthleteByName(name) {
  for (let i = 0; i < athletes.length; i++) {
    if (athletes[i].Name == name) {
      athletes.splice(i, 1);

      return true;
    }
  }

  return false;
};

document.getElementById("save").addEventListener('onclick', function(e) {
  let name = document.getElementById("name").value;
  let height = document.getElementById("height").value;

  if (athletes.length < 5) {
      addAthlete(name, height);

      alert('sucessfully added someone!');
  } else {
      alert('array is full!');
  }
});

