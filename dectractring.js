const actor ={
    name:'anata',
    age:30,
    phone:'01707992611',
    money:1251123132123





}
// if right side is an object left side of destructring will be objects
// use property name as a variable that contains the property value
 const {phone, age: boyos, money, name } = actor
// const phone =actor.phone;
// const name= actor.name;
// const age =actor.age;
// const money = actor.money;

// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(boyos)
// console.log(boyos)
// console.log(boyos)
// console.log(boyos)
// console.log(money)
// console.log(money)
// console.log(money)
// console.log(money)

// arry dectructuring
const numbers =[45,25]
const [first, second]= numbers;
const [x, y] = [12, 66];
// console.log(x)
// console.log(y)
// console.log(first)
// console.log(second)


// advanced 
function doubleThem(a, b){
    return [a * 2, b * 2];
}
const [prothom, ditiyo] =doubleThem(6, 9);
console.log(prothom, ditiyo)
