// default----if value is not provided,take this as a default



function add(num1=99, num2=0, num3=55){
    const result = num1 + num2 +num3;
    console.log(num1, num2, result);
    return result;
}

const sum =add(5, 7);
// const sum =add(5);
// const sum =add(5, );

function fullName(first, last){
    const full =first + ' ' + last;
    console.log(first + ' ' + last, full);
    return full;
   
}
const su = add(5,7);


function friedns(numbs= []){

}