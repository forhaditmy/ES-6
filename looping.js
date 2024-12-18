const numbers = [1,2,3,5,6,8];
// for(let i =)
for(const num of numbers ){
    // console.log(num)
}
const nobab ='sijar ud doula'
for(const char of nobab){
    // console.log(char)
}
// 
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
// for(const key in glass){
//     const value =glass[key];
//     console.log(key, value)
// }

// optional
const keys = Object.keys(glass)
console.log(keys);
for(const key of keys){
    const value = glass [key]
    console.log(key, value)
}



