function dwarfRollCall(dwarves) {
  var string = '' ;
  for (let i = 0; i < dwarves.length; i++) {
    string += i + 1 + ". " + dwarves[i] + " " ;
  }
  return string ;
}



function summonCaptainPlanet(planeteerCalls) {
var string = planeteerCalls ;

for (let i = 0; i < string.length; i++) {
  string[i] = string[i].toUpperCase() + "!" ;
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

// grapes, cheddar, gouda
foods.forEach(function(element) {  // also a type of for loop
  if (cheese == 'no cheese!' && element == "cheddar") {
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

// words = [ "dog", "bear", "cat", "boat" ]
function wordsWithB(words){
  var string = []
  words.forEach(function(element) {
    if (element[0] == 'b' ) {   // acceesses first letter of an element
      return string.push(element)
    }
  })
  return string ;
} // return [ "bear", "boat" ]
// this function returns all elements in the array and returns the ones that start with a b
