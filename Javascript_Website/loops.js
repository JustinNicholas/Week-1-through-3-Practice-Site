console.log("Hello");

// This is the Fibinocci sequence for the loops page
document.getElementById("fib-seq-button").addEventListener("click", fibSeq);

let fib = [0,1];
let numbers = fib.length;

function fibSeq() {
    while (numbers<10) {
    let newNumber;
    newNumber = fib[fib.length-2] + fib[fib.length-1];
    fib.push(newNumber);
    numbers++;
    }
    console.log(fib);
    document.getElementById("start-seq").innerHTML = "10 digits of Sequence [" + fib.join(", ") + "]";
}

//This is the color changing section of the loops page

document.getElementById("color-change-button").addEventListener("click", colorChange);

let colors = [ 'red', 'blue', 'green', 'yellow', 'brown', 'black', 'white', 'magenta', 'blue', 'green'];
let max = 10;

function colorChange(){
    for ( i=0; i<10; i++){
        task(i);
    }
      
    function task(i) {
      setTimeout(function() {
        document.getElementById("color-change-section").style.backgroundColor = colors[i];
        console.log(colors[i]);
      }, 2000 * i);
}
}

