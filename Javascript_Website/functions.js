console.log('hello');

// This is the Fibinocci sequence button
document.getElementById("fib-seq-button-two").addEventListener("click", fibSeqTwo);

let fibTwo = [0,1];

function fibSeqTwo() {
    let newNumberTwo;
    newNumberTwo = fibTwo[fibTwo.length-2] + fibTwo[fibTwo.length-1];
    fibTwo.push(newNumberTwo);
    console.log(fibTwo);
    document.getElementById("start-seq-two").innerHTML = fibTwo.length + " digits of Sequence [" + fibTwo.join(", ") + "]";
}