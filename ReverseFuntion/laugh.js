let laughter = "";
function laugh(num) {
    for (let i = 0; i < num; i++) {
        laughter += 'ha';
    }
    return laughter + "!";
}

// test code
console.log(laugh(0)); // Output: "!"
console.log(laugh(3)); // Output: "hahaha!"
console.log(laugh(4)); // Output: "hahahaha!"