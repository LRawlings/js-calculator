var display;
var value = ["",""];
var buildValueFlag = 0;
var tempOperator = ["",""];

function refreshDisplay() {
    document.getElementById("display").childNodes[1].innerHTML = display;
}

function buildValue(operation){
    value[buildValueFlag] = value[buildValueFlag] + operation;
    if (buildValueFlag == 0) {
        display = value[buildValueFlag];
    } else {
        display = value[0] + " " + tempOperator[0] + " " + value[1];
    }
}

function numberFunction(operation) {
    if (isNaN(operation) == false){
        buildValue(operation);
    } else if (operation == '.') {
        if (value[buildValueFlag].indexOf(".") == -1){
            buildValue(operation);
        }
    }
}

function clickButton(operation) {
    if (value[buildValueFlag] == "") {
        /* Dealing with the first entry */
        if (operation != '+' && operation != '*' && operation != '/') {
            if (buildValueFlag == 0) {
                if (operation == '-') {
                    value[0] = "-";
                    display = value[0];
                } else if (operation == '.') {
                    value[0] = "0";
                } else {
                    value[0] = "";
                }
            } else {
                if (operation == '-') {
                    value[1] = "-";
                    display = display + " " + value[1];
                } else if (operation == '.') {
                    value[1] = "0";
                } else {
                    value[1] = "";
                }
            }
        }
        numberFunction(operation);
    } else {
        /* Store the value */
        if (operation == '+' || operation == '-' || operation == '/' || operation == '*') {
            if (value[buildValueFlag] != '-'){
                display = value[buildValueFlag] + " " + operation + " ";
                if (tempOperator[0] == "") {
                    tempOperator[0] = operation;
                    buildValueFlag++;
                } else {
                    tempOperator[1] = operation;
                    modifiedEqu(operation);
                }
            }
        }
        numberFunction(operation);
    }
    refreshDisplay();
}

function equals() {
    if (tempOperator[0] == '+') {
        display = +(parseFloat(value[0]) + parseFloat(value[1])).toFixed(12);
    }
    if (tempOperator[0] == '-') {
        display = +(parseFloat(value[0]) - parseFloat(value[1])).toFixed(12);
    }
    if (tempOperator[0] == '/') {
        display = +(parseFloat(value[0]) / parseFloat(value[1])).toFixed(12);
    }
    if (tempOperator[0] == '*') {
        display = +(parseFloat(value[0]) * parseFloat(value[1])).toFixed(12);
    }
    refreshDisplay();

    value = ["",""];
    buildValueFlag = 0;
    tempOperator = ["",""];
}

function modifiedEqu(operation) {
    if (tempOperator[0] == '+') {
        value[0] = +(parseFloat(value[0]) + parseFloat(value[1])).toFixed(12);
    }
    if (tempOperator[0] == '-') {
        value[0] = +(parseFloat(value[0]) - parseFloat(value[1])).toFixed(12);
    }
    if (tempOperator[0] == '/') {
        value[0] = +(parseFloat(value[0]) / parseFloat(value[1])).toFixed(12);
    }
    if (tempOperator[0] == '*') {
        value[0] = +(parseFloat(value[0]) * parseFloat(value[1])).toFixed(12);
    }
    value[1] = "";
    display = value[0] + " " + operation + " ";
    buildValueFlag = 1;
    tempOperator[0] = operation;
    tempOperator[1] = "";
}

function allClear() {
    display = 0;
    value = ["",""];
    buildValueFlag = 0;
    tempOperator = ["",""];
    refreshDisplay();
}

/* Keyboard shortcuts */
document.onkeyup = function(e) {
    if (e.which == 48 || e.which == 96) {
        clickButton(0);
    } else if (e.which == 49 || e.which == 97) {
        clickButton(1);
    } else if (e.which == 50 || e.which == 98) {
        clickButton(2);
    } else if (e.which == 51 || e.which == 99) {
        clickButton(3);
    } else if (e.which == 52 || e.which == 100) {
        clickButton(4);
    } else if (e.which == 53 || e.which == 101) {
        clickButton(5);
    } else if (e.which == 54 || e.which == 102) {
        clickButton(6);
    } else if (e.which == 55 || e.which == 103) {
        clickButton(7);
    } else if (e.which == 56 || e.which == 104) {
        clickButton(8);
    } else if (e.which == 57 || e.which == 105) {
        clickButton(9);
    } else if (e.which == 106) {
            clickButton('*');
    } else if (e.which == 107) {
        clickButton('+');
    } else if (e.which == 109) {
        clickButton('-');
    } else if (e.which == 110) {
        clickButton('.');
    } else if   (e.which == 191) {
        clickButton('/');
    } else if (e.which == 186 || e.which == 13) {
        equals();
    }
}