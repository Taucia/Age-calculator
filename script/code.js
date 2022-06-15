
function calculate() {
    "use strict";
    var age = document.getElementById("age").value,
        result = age * 365;
    document.getElementById("Output").innerHTML = result;
    if (age === "") {
        document.getElementById("Output").innerHTML = "This Field Is Empty";
    } else if (amount < 0) {
        document.getElementById("Output").innerHTML = "This Field Is Not accepted Negative numbers";
    } else {
        document.getElementById("Output").innerHTML = result;
    }
}