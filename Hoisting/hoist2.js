function sayHi(name) {
    var greeting = "Hello";
    console.log(greeting + " " + name);
  }
  
  sayHi("Julia");





  function getClothing(isCold) {
    if (isCold) {
      const freezing = 'Grab a jacket!';
    } else {
      const hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }
  
  getClothing(false)




  let x = 1;

function addTwo() {
   let x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);