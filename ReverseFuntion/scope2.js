function whereAmIAssessible(a) {
  if (a) {
    var x = "x is accessible";  // Declared with 'var', function-scoped.
    let y = 'y is accessible';  // Declared with 'let', block-scoped.
    const z = 'z is accessible'; // Declared with 'const', block-scoped.
    console.log("Inside the if block scope:");
    console.log(x);  // Prints: "x is accessible"
    console.log(y);  // Prints: "y is accessible"
    console.log(z);  // Prints: "z is accessible"
  }
}

whereAmIAssessible(true);

console.log("Outside the function scope:")
console.log(x); // Will result in an error, because 'x' is function-scoped, not accessible outside the function.
console.log(y); // Will result in an error, because 'y' is block-scoped to the 'if' statement, not accessible here.
console.log(z); // Will result in an error, because 'z' is also block-scoped to the 'if' statement.
