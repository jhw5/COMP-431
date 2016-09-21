/**
 * Created by Jeffrey on 9/20/2016.
 */


window.onload = function(){
    var LOGIN = "Login";
    var LOGOUT = "LogOut";
    
//username input field...
    var username = document.getElementById("username");
    var password = document.getElementById("pass");

//creating a login button that turns into a logout button
    var loginBtn = document.getElementById("login");
//initial value of the button
    loginBtn.value = LOGIN;
    if (username != "" && pass!=""){
        loginBtn.onclick = function() {
            //if login is clicked, button turns into logout
            if (loginBtn.value == LOGIN) {
                login();
            } else {
                logout();
            }
        };
    }


    function login() {
        if (!username.value) {
            window.alert("Please enter a username");
        } else {
            //show share/post when login is clicked
            window.location.href="main.html";
            loginBtn.value = LOGOUT;
        }
    }

    function logout() {
        // reverse hiding done in login
        // change the text of button to login
        loginBtn.value = LOGIN;
        username.value="";
        password.value="";
    }
}

function validateForm(){
    var pass;
    var date;

    //validating age requirement
    var inputText = document.getElementsByName("date");
    var dateText = inputText[0].value;
    var dateFormat = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    var date = dateText.split('/');
    var mm = parseInt(date[0]);
    var dd = parseInt(date[1]);
    var yy = parseInt(date[2]);
    // Current year, month, and day
    var d = new Date();
    var cyy = d.getFullYear();
    var cmm = d.getMonth() + 1;
    var cdd = d.getDate();
    var limityy = cyy-18;
    if (yy <= limityy && mm <= cmm && dd <= cdd){
        date = true;
    } else {
        date = false;
    }

    //hidden timestamp
    var milli = d.getTime()
    document.getElementById("currentTime").value = milli;

    //validating password
    var password = document.forms["myForm"]["password"].value;
    var confirm = document.forms["myForm"]['confirm'].value;
    if (password == confirm) {
        pass = true;
    } else {
        pass = false;
    }

    // validating form
    if (pass & date){
        return true;
    }else{
        if (!date & pass){
            alert("You must be 18 years or older to register an account.");
            return false;
        }else if (!pass & date){
            alert("Your password does not match!");
            return false;
        }else{
            alert("You must be 18 years or older to register an account. \nYour password does not match!")
            return false;
        }
    }
}