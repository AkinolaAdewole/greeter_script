// The original laugh function for reference
function laugh(num) {
    let laughter = '';
    for (let i = 0; i < num; i++) {
        laughter += 'ha';
    }
    return laughter;
}

// emotions function with an argument for myFunc
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Call emotions function with an inline function expression
emotions("happy", function(num) {
    let laughter = '';
    for (let i = 0; i < num; i++) {
        laughter += 'ha';
    }
    return laughter + '!';
});
