
const reverseString = (reverseMe) => {
    let reversed = ""; // Use let instead of const for reassignment
    for (let i = reverseMe.length - 1; i >= 0; i--) { // Declare i using let for local scope
        reversed += reverseMe[i];
    }
    return reversed;
};

console.log(reverseString('Julia')); // Output: ailuJ
