let colorList = ["red", "green", "blue"]; //list of colors to circulate
let colorIndex = 0; //Counter for circulation

function submitColor() {
    let colorName = document.getElementById("submitColor").value; //get user input
    if (colorName === "") { return } //if no input no submit
    colorList.push(colorName); //add input to list
    document.getElementById("submitColor").value = ""; //clean input box
}

function changeColor() {
    document.body.style.backgroundColor = colorList[colorIndex]; //set color 
    document.getElementById("colorName").innerHTML = colorList[colorIndex]; //show color name
    colorIndex++; //go to next color
    //go back to first one when list is done
    if (colorIndex === colorList.length) {
        colorIndex = 0;
    }
}

function deleteColor() {
    //if the page is last color do nothing to prevent error
    if (colorIndex - 1 === -1) {
        alert("Invalid Operation");
        return
    }
    colorList.splice(colorIndex - 1, 1); //delete color on the page
    colorIndex--;
    console.log(colorIndex);
    changeColor(); //show next color 
}