var hello = "HELLO";
var hello = "Bye";//Bad practice
let world = "HELLO WORLD";
const helloWorld = "Hello world!";

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//Bad practice-----------------------------
const helloWorld = () => {
    globalVar = "Im global";
}

helloWorld();
console.log(globalVar);

const anotherFunction = () =>{
    localVar = globalVar = "Im global again";
}

anotherFunction();
console.log(globalVar);
//Bad practice------------------------------