const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
console.log(glass);
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);
const values =Object.values(glass)
console.log(values);
// [ 'glass', 'golden', 12, true ]

// array of array , two dimentional array
const pair = Object.entries(glass)
console.log(pair)
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]


//   object remove / delete 
delete glass.isCleaned;
console.log(glass);
//seal or another object add to remove/delete
const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass)

// freeze
Object.freeze(glass);
glass.source = 'bangladesh'
glass.price = 5000;
// console.log(glass)

// Seal
Object.seal(glass);
glass.source = 'bangladesh'
glass.price = 5000;
console.log(glass)