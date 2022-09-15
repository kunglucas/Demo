console.log("Hello")
function square(number) {
    return number * number;
}
console.log(square(5,5))

function logKarl(name = "karl") {
    console.log(name)
}
logKarl();

function logKen(){

    let x = 1;
    while(x < 5){
        console.log("hej");
        x++;
    }
}

logKen();