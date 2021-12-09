//Example 1
const fruits = () => {
    var fruit = "apple";

    console.log(fruit);
}

fruits();
console.log(fruit);//Error

//Example 2

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2;//Error

    console.log(x);
    console.log(y);//Error
}

anotherFunction();