let sequence = [];
let length;
let term = [];
let d = [];
let r = [];

function main() {
    getTerms();
	displayType();
    displaySequence();
	displaySeries();
    displayFormula();
}

function getTerms() {
	let term_id = ["term1","term2","term3","term4"];
    length = document.getElementById("length_of_sequence").value;
	for (let i = 0; i<term_id.length;i++){
		term[i] = document.getElementById(term_id[i]).value;
	}
}

function displayType(){
	if (checkType()=="Arithmetic"){
	document.getElementById("type").innerHTML = checkType() + " with common difference of " + d[0];
	} else if (checkType()=="Geometric"){
	document.getElementById("type").innerHTML = checkType() + " with common ratio of " + r[0];
	} else {
		document.getElementById("type").innerHTML = checkType();
	}
}

function checkType() {
    d[0]= term[1] - term[0];
    d[1] = term[2] - term[1];
    d[2] = term[3] - term[2];
    r[0] = term[1] / term[0];
    r[1] = term[2] / term[1];
    r[2] = term[3] / term[2];
	
    if(d[0] == d[1] && d[1] == d[2]) {
		return "Arithmetic";
    } else if(r[0] == r[1] && r[1] == r[2]) {
		return "Geometric";
    } else {
		return "None";
    }
}

function displaySequence() {
	document.getElementById("sequence").innerHTML = createSequence(term).join(", ");
}

function createSequence(term) {
	sequence = [];
    let term_now = parseInt(term[0]);
    if(checkType() == "Arithmetic") {
        for(let i = 0; i < length; i++) {
            sequence[i] = term_now;
            term_now = term_now + d[0];
        }
    } else if(checkType() == "Geometric") {
        for(let i = 0; i < length; i++) {
            sequence[i] = term_now;
            term_now = term_now * r[0];
        }
    } 
	return sequence;
}

function displaySeries() {
	if(checkType() != "None") {
        document.getElementById("series").innerHTML = sequence.join(" + ") + " = " + sumSeries(sequence);
    }
}

function sumSeries(seq) {
    let sum = 0;
    for(let i = 0; i < seq.length; i++) {
        sum = sum + seq[i];
    }
	return sum;
}

function displayFormula() {
    let sup = "n-1";
    if(checkType() == "Arithmetic") {
        document.getElementById("formula").innerHTML = "[" + d[0] + " (n - 1) " + " + (" + sequence[1] + ")]";
    } else if(checkType() == "Geometric") {
        document.getElementById("formula").innerHTML = "[" + sequence[1] + " (" + r[0] + ")" + sup.sup() + "]";
    }
}