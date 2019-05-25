function sumRange(num) {
    //Handle exception
    if(num <= 0) return 0;
    //Base Case
    if(num === 1) return 1;
    //Next input
    return num+sumRange(num-1);
}

console.log(sumRange(5));
console.log(sumRange(0));

function factorial(num) {
    //Handle exception
    if(num<=0) return 0;
    //Base Case
    if(num === 1) return 1;
    //Next input
    return num*factorial(num-1);
}


console.log(factorial(5));
console.log(factorial(0));