var a = 'Hello';

function hello(){
    let b = 'hello world';
    const c = 'hello world !!!';
    if (true){
        let d = 'hello madafaca';
        debugger
    };
}

hello();

const moneyBox = ()=> {
    debugger
    var saveCoins = 0;
    const countCoins = (coins)=>{
        debugger
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }
    return countCoins;

}
let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);