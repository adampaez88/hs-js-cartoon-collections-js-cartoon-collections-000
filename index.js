function dwarfRollCall(dwarves) {
  var string = ""
    for (let i = 0; i < dwarves.length; i++) {
      string += + (i + 1) + ". " + dwarves[i] + " "
    }
  return string
}

function summonCaptainPlanet(planeteerCalls) {
var string = planeteerCalls
for(var i = 0; i < string.length; i++){
    string[i] = string[i].toUpperCase() + "!"
}
return string
}

function longPlaneteerCalls(words) {
  var maxLength = 0 // for the whole array

  words.forEach(function(element) {
    if (element.length > maxLength) {
      maxLength = element.length
    }
  });

  return (maxLength > 4)
}


function findTheCheese (foods) {
var cheese = "no cheese!"
var cheeses = ["camembert", "cheddar", "gouda"]

  foods.forEach(function(element) {
    if (element == "camembert") {
      cheese = element
      return cheese
    }
    else if (element == "cheddar") {
      cheese = element
      return cheese
    }
    else if (element == "gouda") {
      cheese = element
      return cheese
    }
//    else {
  //    cheese = 'no cheese!'
    //  return cheese
    //}
  });
  return cheese
}
