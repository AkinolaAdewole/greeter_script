sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}




sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}


function getClothing(isCold) {
    if (isCold) {
      var freezing = 'Grab a jacket!';
    } else {
      var hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }
  
  getClothing(false)