const difference =(x, y) => x - y;
const multifly =(first, second, third) =>first * second * third;


// const getAge =(person) => person.age;
// const student ={name: 'anata', age:45}
// const age = getAge(student)
// console.log(age);


const getAge = persion => persion.name
const student = {name: 'tata', age:45}
const name = getAge(student);
console.log(name);

const getThird = numbers => numbers[2];
const third = getThird( [25,12,45])
console.log(third);

const doubleIt = num =>num * 2
const num = doubleIt (5);
console.log(num)

// no parameter
const getPI = () => Math.PI
console.log(getPI());

// large function
const doMath =( x , y , z) => {
const sum = x + y + z;
const mul = x * y * z;
const result = sum + mul
return result;
}
const nu = doMath(12,25,12);
console.log(nu)

