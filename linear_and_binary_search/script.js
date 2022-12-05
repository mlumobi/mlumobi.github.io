let list_of_numbers = [];
let current_number_index = 10;
let checked_index = [];
let rejected_index = [];
let seek_number = -1;
let lower_bound;
let upper_bound;


makeListOfNumbers();

/**
* checkInList(index, list)
* input: index, single number
* input: list, list of numbers
* output: return true if the index exists in the list of numbers
* otherwise return false
*/
function checkInList(index, list) {
    for (let i = 0; i < list.length; i++) {
        if (index == list[i]) {
            return true;
        }
    }
    return false;
}

/**
 * buildList(list)
 * input: list
 * output: mark up current_number_index, checked_index and rejected_index 
 */
function buildList(list) {
    let s = "";

    for (let i = 0; i < list.length; i++) {
        if (i == current_number_index) {
            s = s + "<span class='current-index'>" + list[i] + " " + "</span>"
        }
        else if (checkInList(i, checked_index)) {
            s = s + "<span class='checked-index'>" + list[i] + " " + "</span>"
        }
        else if (checkInList(i, rejected_index)) {
            s = s + "<span class='rejected-index'>" + list[i] + " " + "</span>"
        }
        else {
            s = s + list[i] + " ";
        }
    }
    return s;
}

/**
 * displayList(list)
 * input: list
 * display list on html
 */
function displayList(list) {
    document.getElementById("number-list").innerHTML = buildList(list);
}

/**
 * makeListOfNumbers()
 * input: N/A
 * output: call displayList to display a random list with the length number from input box
 */
function makeListOfNumbers() {
    let n = document.getElementById("list-length").value;
    let next_number = 0;
    let range = Math.floor(Math.random() * n + 10);

    list_of_numbers = [];

    for (let i = 0; i < n; i++) {
        next_number += Math.floor(Math.random() * range);
        list_of_numbers.push(next_number);
    }

    current_number_index = Math.floor(n / 2);
    displayList(list_of_numbers);
    getSeekNumber();
    reset();
}

/**
 * reset()
 * input: N/A
 * output: reset all variables
 */
function reset() {
    current_number_index = -1;
    checked_index = [];
    rejected_index = [];
    displayList(list_of_numbers);
}

/**
 * getSeekNumber()
 * input: N/A
 * output: get a random number or a random number form the list
 */
function getSeekNumber() {
    if (Math.random() < 0.1) { //pick any random number
        seek_number = Math.floor(Math.random() * (list_of_numbers[list_of_numbers.length - 1] + 5))
    }
    else { //pick a random number from the list
        seek_index = Math.floor(Math.random() * (list_of_numbers.length - 1))
        seek_number = list_of_numbers[seek_index];
    }
    displaySeekNumber();
}

/**
 * displaySeekNumber()
 * input: N/A
 * output: display seek number
 */
function displaySeekNumber() {
    document.getElementById("seek-display").innerHTML = "Seek Number: " + seek_number;
}

/**
 * displayCount()
 * input: N/A
 * output: display length of checked number
 */
function displayCount() {
    document.getElementById("count-display").innerHTML = "Count: " + checked_index.length;
}

/**
 * markRejectedNumber()
 * input: index of middle number, bigger or not
 * output: push all bigger or smaller number to rejected list
 */
function markRejectedNumber(index, bigger) {
    if (bigger == false) {
        for (let i = 0; i < index; i++) {
            rejected_index.push(i);
        }
    }
    if (bigger == true) {
        for (let i = index; i < list_of_numbers.length; i++) {
            rejected_index.push(i);
        }
    }
}

/***
 * useBinarySearch()
 * input: N/A
 * output: send all needed value to other function and display the built list of numbers
 */
function useBinarySearch() {
    if (current_number_index == -1) {
        lower_bound = 0;
        upper_bound = list_of_numbers.length - 1;

    }

    current_number_index = Math.floor(lower_bound + (upper_bound - lower_bound) / 2);

    if (list_of_numbers[current_number_index] != seek_number) {
        checked_index.push(current_number_index);

        if (upper_bound < lower_bound) {
            displayList(list_of_numbers);
            return;
        }
        if (list_of_numbers[current_number_index] < seek_number) {
            lower_bound = current_number_index + 1;
            markRejectedNumber(current_number_index, false);
        }
        if (list_of_numbers[current_number_index] > seek_number) {
            upper_bound = current_number_index - 1;
            markRejectedNumber(current_number_index, true);
        }
        if (list_of_numbers[current_number_index] == seek_number) {
            return;
        }
    }
    displayList(list_of_numbers);
    displayCount();
}

// Procedure binary_search
//    A ← sorted array
//    n ← size of array
//    x ← value to be searched

//    Set lowerBound = 1
//    Set upperBound = n 

//    while x not found
//       if upperBound < lowerBound 
//          EXIT: x does not exists.

//       set midPoint = lowerBound + ( upperBound - lowerBound ) / 2

//       if A[midPoint] < x
//          set lowerBound = midPoint + 1

//       if A[midPoint] > x
//          set upperBound = midPoint - 1 

//       if A[midPoint] = x 
//          EXIT: x found at location midPoint
//    end while

function useLinearSearch() {
    if (current_number_index == -1) {
        current_number_index = 0;
    }

    if (current_number_index == list_of_numbers.length) {
        return;
    }

    if (list_of_numbers[current_number_index] == seek_number) {
        return;
    }

    checked_index.push(current_number_index);
    current_number_index += 1;
    displayList(list_of_numbers);
    displayCount();
}