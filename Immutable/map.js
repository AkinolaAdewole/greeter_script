

let menuArray = [
    ['firstItem', 'fries'],
    ['secondItem', 'burgar']
];

let menuMap = Immutable.Map(menuArray);
console.log(menuMap);


let firstMenu = Immutable.Map({'firstname': 'Ade'});
let secondMenu = Immutable.set('firstname', 'Akin');
console.log(firstMenu);
console.log(secondMenu);