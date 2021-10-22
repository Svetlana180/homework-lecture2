console.log("Start");
console.log("Result PIN : " + pinCodeGenerator(5));

function pinCodeGenerator(lengthPin) {
    let pin = '';
    for(let i=0; i<lengthPin; i++) {
        var c = Math.floor(Math.random() * 10);
        // console.log("Generated number - " + c);
        pin = pin + c;
    }
    return pin;
}

console.log("Finish");