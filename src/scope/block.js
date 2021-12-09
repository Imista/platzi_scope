//Example 1
const fruits = () =>{
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }

    console.log(fruits1);
    //console.log(fruits2);//Error
    //console.log(fruits3);//Error
}

fruits();

//Example 2
let x = 1;
{
    let x = 2;
    console.log(x);//2
}
console.log(x);//1

//Example 3
var x = 1;
{
    var x = 2;
    console.log(x);//2
}
console.log(x);//2

//Example 4
const anotherFunction = () =>{
    for(var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);//10
        }, 1000)
    }
}

anotherFunction();

//Example 5
const anotherFunction = () =>{
    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();