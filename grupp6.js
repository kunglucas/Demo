console.log("Hello"); //Lucas kommentar
function square(number) {   // Vadzim function square 
    return number * number;
}
console.log(square(5,5))

function logKarl(name = "karl") { // Karl function: log provided name, if not provided default to karl
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

let mette = "forvirrad"; // en liten variabel

console.log(mette);

function Lucas() //Lucas funktion
{
let message = 'Hello group 6';
console.log(message);
} 
Lucas();