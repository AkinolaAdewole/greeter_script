
const reverseString = (reverseMe) => {
    let reversed = ""; // Use let instead of const for reassignment
    for (let i = reverseMe.length - 1; i >= 0; i--) { // Declare i using let for local scope
        reversed += reverseMe[i];
    }
    return reversed;
};

console.log(reverseString('Julia')); // Output: ailuJ



// Let's break it down:

// The function has one parameter -- a variable named reverseMe.
// reverseMewill store the argument -- the value of the string that we want the function to operate on.
// The variable reversed is intialized as an empty string. 
// It will be used to store the reversed string as as it is being constructed.
// The function loops through each character the reverseMe string using string indexes, 
// from the end to the beginning and adds each character to reversed.
// When the loop is complete, reversed is returned.
