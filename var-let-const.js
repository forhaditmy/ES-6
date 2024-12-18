// var: no reason to use var
// let: allow to reassin
// const : do not allow it to reassign

const money=25;
const rich = money+25;
console.log(rich);


let count = 0;
count = count+10;
console.log(count);

// array 
const number =[23,5,20,14,25];
// numbers =[4,5,6,9,8]
number[1] = 55;
number.push(8,9,21,25,20);
console.log(number)


//object 
const student ={
    name:'moyna pakhi',
    class:12
    
}
// student ={name:'kokil kontho'}
student.name ='moyur konthi'

console.log(student);


// loop
for(let i=0; i<10; i++){
    
}