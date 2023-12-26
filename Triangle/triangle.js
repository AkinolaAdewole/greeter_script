// creates a line of * for a given length
function makeLine(length) {
    let line = "";
    for (let j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// creates a triangle with the height specified by num
function buildTriangle(height) {
    let triangle = "";
    for (let i = 1; i <= height; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}

// test the buildTriangle function by printing the resulting triangle
console.log(buildTriangle(10));
