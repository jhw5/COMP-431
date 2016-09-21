/**
 * Created by Jeffrey on 9/8/2016.
 */

//arrays for later references of labels, idNames, titles, alerts, and so on
var defaultLabels = ["Jeffrey Wang", "Jhw5@rice.edu", "123-123-1234", "77005", "01/01/1998", "password", "password"];
var idNames = ["dName", "email", "phone", "zip","DOB", "password", "cPass"];
var inputTitles = ["Display Name", "Email Address", "Phone Number", "Zip Code", "Date of Birth", "Password", "Confirm Password"];
var defaultAlerts = ["","Please enter a valid email address", "Please enter your phone number in the following format: 123-123-1234",
    "Please enter a valid 5 digit zip code", "You follow the format mm/dd/yyyy and you must be 18 years old to register!", "Passwords don't match!"];
var inputRegex = [/.*$/, /(.*)+[@]+(.*)[.]+(.*)$/, /\d\d\d[\-]\d\d\d[\-]\d\d\d\d$/, /\d\d\d\d\d$/, /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/];
var updateVals = ["dName", "email", "phone", "zip", "password"];


function insertDiv (idName, idIndex) {
    //insert DIV tags into the body with attributes based on the idName
    //insert input box and labels
    //assign type for input
    var div = document.createElement("DIV");
    div.id = idName;
    div.className = "inputFields";
    var title = document.createElement("p");
    title.innerHTML = inputTitles[idIndex];

    var label = document.createElement("label");
    label.innerHTML = defaultLabels[idIndex];
    label.className = idName;
    if (idName == "cPass" || idName == "password") {
        input.type = "password";
    }
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = inputTitles[idIndex];

    if (idName == "cPass" || idName == "password") {
        input.type = "password";
    }


    div.appendChild(title);
    div.appendChild(input);
    div.appendChild(label);

    document.getElementById('currentInfo').appendChild(label);
    if (idName != "DOB"){
        document.getElementById("inputs").appendChild(div);
    }
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
    var label = document.getElementsByClassName(idName)[0];

    //only go in if the user typed something in the input
    if (inputVal.value != "") {
        console.log(label);
        console.log(idName);
        if (checkRegex(idName, titleIndex)) {
            //if pass Regex, we change the label value

            label.innerHTML = inputVal.value;
            changedFields += " "+ inputTitles[titleIndex];
            //once submitted, we clear the input val
            inputVal.value = "";
        }
        if (idName == "password" && checkRegex(idName, titleIndex)) {
            //in the case of the password, we need to change the confirm password fied
            label.innerHTML = inputVal.value;
            document.getElementById("cPass").getElementsByTagName("label")[0].innerHTML = inputVal.value;
            document.getElementById("cPass").getElementsByTagName("input")[0].value = "";
            changedFields += " "+ "Confirm Password";

        }

    }




}

window.onload = function(){
    //for each id in idNames... we perform insertDiv on it
    idNames.forEach(insertDiv);

    //when we click on submit of the button
    //we update the labels with the inputs and alerts the user what changed
    document.getElementById("submit").onclick = function(){
        updateVals.forEach(updateLabels);
    };

};