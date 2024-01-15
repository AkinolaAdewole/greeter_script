// Import Immutable.js library
const Immutable = require('immutable');

let menuArray = [
    ['firstItem', 'fries'],
    ['secondItem', 'burgar']
];

let menuMap = Immutable.Map(menuArray);
console.log(menuMap);
