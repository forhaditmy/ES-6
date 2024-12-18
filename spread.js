const max =Math.max(5,25,12,13,85,20)
const  numbers = [2,3,6,51,40,25,89,78];
const arrayMax = Math.max(...numbers);
// console.log(...numbers)
console.log(arrayMax)

// use spread operation to copy 
const friends = [156,326,55,5]
const bondu = friends;
const dosto = [...friends]
console.log(dosto)
friends.push(100);
console.log(dosto)
console.log(friends)

// advance 
const sonkha =[...friends, 999]
console.log(sonkha)