var fruit = "apple"; // Declare the variable 'fruit' using 'var' and initialize it with "apple".

if (fruit !== "banana") { // Check if 'fruit' is not equal to "banana". Since 'fruit' is "apple", this condition is true.
    var fruit = "banana"; // Re-declare 'fruit' using 'var', which is function-scoped or globally-scoped. This changes the value of 'fruit' to "banana" even outside the block.
    console.log(fruit);   // Output the value of 'fruit'. This will print "banana".
}
console.log(fruit); // Since 'var' is not block-scoped, this will also print "banana", as the value of 'fruit' was changed globally in the 'if' block.
