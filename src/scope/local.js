//First example
const helloWorld = () => {
    const hello = "Hello world";

    console.log(hello);
}

helloWorld();
console.log(hello);//Error

//Second example

var scope = "I'm global";

const funtionScope = () => {
    var scope = "I'm just a local";

    const func = () => {
        return scope;//Local
    }

    console.log(func());
}

funtionScope();
console.log(scope);//Global