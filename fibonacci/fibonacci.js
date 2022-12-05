// facts: https://facts.net/history/people/fibonacci-facts#:~:text=1%2001%20Leonardo%20Fibonacci%20learned%20the%20Hindu-Arabic%20numeral,Guglielmo%20Bonacci%20was%20a%20wealthy%20Italian%20merchant.%20

let facts = ["<h4>The Fibonacci sequence has a special rule</h4><br>The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, which is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, … Therefore, 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3 and so on.Go ahead, try it yourself!<br><br>Indian mathematics was the first to describe it.But it was Fibonacci who instituted the sequence into Western European mathematics.In addition, this series can extend to 0 and negative integers like F0 = 0, F - 1 = 1, F - 2 = -1, F - 3 = 2, F - 4 = -3, F - 5 = 5, and so on.", "<h4>We can see Fibonacci numbers in everyday life</h4><br>These numbers appear in mathematics frequently. We can observe it in our daily lives such as using it to calculate or estimate miles to kilometers.<br><br>Let’s take a look at the sequence 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, … and take any two consecutive numbers from this series. 13 and 21: 13 miles = 21 kilometers. 34 and 55: 34 miles = 55 kilometers.<br><br>In Leonardo’s calculation, the Fibonacci numbers start at 1. However, in the modern calculation, it starts at 0.", "<h4>November 23 is Fibonacci Day</h4><br>It is the day of Fibonacci because the numbers are in the Fibonacci sequence of 1, 1, 2, 3. This coincides with the date in mm/dd format (11/23).", "<h4>Leonardo Pisano is the original name of Leonardo Fibonacci</h4><br>In the Middle Ages, he was famous for being the most talented Western mathematician. A French historian coined the name Fibonacci which is short for “Fillius Bonacci”. It means the “son of Bonaccio” which refers to Fibonacci’s father.", "<h4>The Fibonacci sequence has a relation to the Golden Ratio</h4><br>We can find the Golden ratio in the patterns of nature like the spiral leaves.", "<h4>You can also find Fibonacci Numbers in other natural settings</h4><br>It is in nature like the branch of the trees, the arrangement of a pine cone, and the straighten fern. For the flowers, the number of petals is a Fibonacci number. A rare variation of the common three-leaf clover is the four-leaf clover. These four-leaf clovers bring good luck. Because according to superstition, it is lucky since four is not a Fibonacci Number and it is rare."];

/**
 * displayFact
 * output: Cycle the facts
 */
let current_fact = 0;
displayFact();
function displayFact() {
    document.getElementById("fact").innerHTML = facts[current_fact];
    if (current_fact >= facts.length - 1) {
        current_fact = 0;
    } else {
        current_fact++;
    }
}

/**
 * updateWebpage
 * output: when oninput the length change the Sequence and Golden Ratio
 * if number input is over 1477 make it 1477
 */
function updateWebpage() {
    let n = document.getElementById("fib-length").value;
    if (n > 1477) {
        return document.getElementById("fib-length").value = "1477"
    }
    displayFibSequence(n);
    displayGoldenRatio(n);
}

/*
* getFibSequence
*input: n is the number of the fibonacci numbers we will find
*output: list of the first n fibonacci numbers
*/
function getFibSequence(n) {
    let seq = [];
    let i;
    let current_number;

    if (n == 0) return seq;
    seq.push(0);
    if (n == 1) return seq;
    seq.push(1);

    for (i = 2; i < n; i++) {
        current_number = seq[i - 2] + seq[i - 1];
        seq.push(current_number);
    }
    return seq;
}

/*
* displayFibSequence
*input: n is the number of the fibonacci numbers we will find
*output: display the sequence with " | "
*/
function displayFibSequence(n) {
    let fib = getFibSequence(n);
    document.getElementById("sequence").innerHTML = fib.join(" | ");
}

/*
* getGoldenRatio
*input: n is the number of the fibonacci numbers we will find
*output: display the sequence with " | "
*/
function getGoldenRatio(n) {
    let f = getFibSequence(n);
    if (n < 2) return 0;
    return f[f.length - 1] / f[f.length - 2];
}

/*
* displayGoldenRatio
*input: n is the number of the fibonacci numbers we will find
*output: display the Golden Ratio
*/
function displayGoldenRatio(n) {
    let gr = getGoldenRatio(n);
    document.getElementById("golden-ratio").innerHTML = gr;
}