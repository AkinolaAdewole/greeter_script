let fruit = "apple"; // Declare the variable 'fruit' and initialize it with the value "apple".

if (fruit !== "banana") { // Check if 'fruit' is not equal to "banana". Since 'fruit' is "apple", this condition is true.
    let fruit = "banana"; // Declare a new block-scoped variable 'fruit' and initialize it with the value "banana".
    console.log(fruit);   // Output the value of this new 'fruit' variable. Since this 'fruit' is scoped inside the if-block, it will output "banana".
}
console.log(fruit); // Output the value of the outer 'fruit' variable, which is still "apple", since the 'fruit' inside the if-block was block-scoped.
