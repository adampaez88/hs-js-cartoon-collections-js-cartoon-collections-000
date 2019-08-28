function dwarfRollCall(dwarves) {
  var string = '' ;
  for (let i = 0; i < dwarves.length; i++) {
    string += i + 1 + ". " + dwarves[i] + " " ;
  }
  return string ;
}



function summonCaptainPlanet(planeteerCalls) {
var string = '' ;

for (let i = 0; i < planeteerCalls.length; i++) {
  planeteerCalls[i] = string[i].toUpperCase() + "!" ;
}
return string ;
}



function longPlaneteerCalls(words) {
var maxLength = 4 ;

words.forEach(function(element) {
  if (element.length > maxLength) {
    maxLength = element.length
  }
});
return (maxLength > 4) ;
}



function findTheCheese (foods) {
var cheese = 'no cheese!' ;
var cheeses = ["cheddar", "gouda", "camembert"];

foods.forEach(function(element) {
  if (element == "cheddar") {
    cheese = element ;
    return cheese ;
  }
  if (element == "gouda") {
    cheese = element ;
    return cheese ;
  }
  if (element == "camembert") {
    cheese = element ;
    return cheese ;

  }
});
return cheese ;
}
