const buildCount = (x) => {
    let count = x;
    const displayCount = () =>{
        console.log(count++);
    }

    //Display
    return displayCount;
}

const myCount = buildCount(1);

myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);

myOtherCount();
myOtherCount();