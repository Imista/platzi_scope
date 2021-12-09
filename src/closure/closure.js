//Common structure

const moneyBox = (coins) => {
    var saveCoins  = 0;
    saveCoins += coins;

    console.log(`Money box: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

//Closure

const moneyBox = () => {
    var saveCoins  = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;        
        console.log(`Money box: $${saveCoins}`);

    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);//4
myMoneyBox(6);//10
myMoneyBox(10);//20
