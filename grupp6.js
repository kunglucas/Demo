console.log("Hello")
function square(number) {   // Vadzim function square 
    return number * number;
}
console.log(square(5,5))

function logKarl(name = "karl") {
    console.log(name)
}
logKarl();

function logKen(){          // Kenneth function with while loop with the name logKen

    let x = 1;
    while(x < 5){
        console.log("hej");
        x++;
    }
}

logKen();

let mette = "forvirrad";
console.log(mette);