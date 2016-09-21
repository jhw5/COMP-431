/**
 * Created by Jeffrey on 9/8/2016.
 */

//arrays for later references of labels, idNames, titles, alerts, and so on
var defaultLabels = ["Jeffrey Wang", "Jhw5@rice.edu", "123-123-1234", "77005", "password", "password"];
var idNames = ["dName", "email", "phone", "zip", "password", "cPass"];
var inputTitles = ["Display Name", "Email Address", "Phone Number", "Zip Code", "Password", "Confirm Password"];
var defaultAlerts = ["","Please enter a valid email address", "Please enter your phone number in the following format: 123-123-1234", "Please enter a valid 5 digit zip code", "Your password does not match!"];
var inputRegex = [/.*$/, /(.*)+[@]+(.*)[.]+(.*)$/, /\d\d\d[\-]\d\d\d[\-]\d\d\d\d$/, /\d\d\d\d\d$/, /.*$/];
var updateVals = ["dName", "email", "phone", "zip", "password"];


function insertDiv (idName, idIndex) {
    //insert DIV tags into the body with attributes based on the idName
    //insert input box and labels
    //assign type for input
    var div = document.createElement("DIV");
    div.id = idName;
    div.innerHTML = inputTitles[idIndex];
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = inputTitles[idIndex];
    if (idName == "cPass" || idName == "password") {
        input.type = "password";
    }
    var label = document.createElement("label");
    label.innerHTML = defaultLabels[idIndex];
    div.appendChild(input);
    div.appendChild(label);
    document.body.appendChild(div);
}

function checkRegex (idName, titleIndex) {
    //return a boolean value to see if it passes the Regex requirements

    var boolean;
    if (idName != "password") {
        var input = document.getElementById(idName).getElementsByTagName("input")[0];
        boolean=inputRegex[titleIndex].test(input.value);
    } else {
        //if it is a password, we have a seperate kind of requirements to pass
        boolean = checkPassword();
    }

    if (boolean == false) {
        alert(defaultAlerts[titleIndex]);
        return false;
    } else {
        return true;
    }
}




//global variable for the inputs that change.
var changedFields = "";


function checkPassword () {
    //checks if password and confirmed password are the same
    var password = document.getElementById("password").getElementsByTagName("input")[0].value;
    var cPass = document.getElementById("cPass").getElementsByTagName("input")[0].value;
    return (password === cPass);
}

function updateLabels(idName, titleIndex){
    //update the labels with the input, perform checkRegex and checkPassword

    //getting the input values and current label from users
    var inputVal = document.getElementById(idName).getElementsByTagName("input")[0];
    var label = document.getElementById(idName).getElementsByTagName("label")[0];

    //only go in if the user typed something in the input
    if (inputVal.value != "") {
        if (checkRegex(idName, titleIndex)) {
            //if pass Regex, we change the label value
            label.innerHTML = inputVal.value;
            changedFields += " "+ inputTitles[titleIndex];
        }
        if (idName == "password" && checkRegex(idName, titleIndex)) {
            //in the case of the password, we need to change the confirm password fied
            label.innerHTML = inputVal.value;
            document.getElementById("cPass").getElementsByTagName("label")[0].innerHTML = inputVal.value;
            document.getElementById("cPass").getElementsByTagName("input")[0].value = "";
            changedFields += " "+ "Confirm Password";

        }
        //once submitted, we clear the input val
        inputVal.value = "";
    }



}

window.onload = function(){
    //for each id in idNames... we perform insertDiv on it
    idNames.forEach(insertDiv);

    //when we click on submit of the button
    //we update the labels with the inputs and alerts the user what changed
    document.getElementById("submit").onclick = function(){
        updateVals.forEach(updateLabels);
        if (changedFields == ""){
            alert("Nothing Changed") ;
        } else {
            alert("You changed the following fields: "+ changedFields);
        }
        changedFields = "";
    };

};