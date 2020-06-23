"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var processEntries = function() {
    var isValid = true;

    // get the values
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var contact = "Text";
    if ($("email").checked) { contact = "Email"};
    if ($("none").checked) { contact = "None"};
    var terms = $("terms").checked;

    // validate fields
    if (email == "") {
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("email_address").nextElementSibling.firstChild.nodeValue = "";
    }
    if (phone == "") {
        $("phone").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("phone").nextElementSibling.firstChild.nodeValue = "";
    }
    if (country == "") {
        $("country").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("country").nextElementSibling.firstChild.nodeValue = "";
    }
    if (terms == false) {
        $("terms").nextElementSibling.firstChild.nodeValue = "This field is required";
        isValid = false;
    } else {
        $("terms").nextElementSibling.firstChild.nodeValue = "";
    }

    if (isValid) {
        $("registration_form").submit();
    }
};

var resetForm = function() {
    $("registration_form").reset(); 
    $("email_address").nextElementSibling.firstChild.nodeValue = "*"; 
    $("phone").nextElementSibling.firstChild.nodeValue = "*"; 
    $("country").nextElementSibling.firstChild.nodeValue = "*"; 
    $("terms").nextElementSibling.firstChild.nodeValue = "*"; 
    $("email_address").focus();   
};

window.onload = function() {
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;
    $("email_address").focus();
};
