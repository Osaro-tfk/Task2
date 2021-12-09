var inputs = document.getElementsByClassName("input");
let email_input = inputs[0];
let name_input = inputs[1];
let phone_input = inputs[2]

var email = document.getElementById("email");
var name_value = document.getElementById("name");
var phone = document.getElementById("phone");

var subscribe = document.getElementById("subscribe");
subscribe.onclick = function () {
   email.innerHTML = email_input.value;
  name_value.innerHTML = name_input.value;
phone.innerHTML = phone_input.value;
    email_input.value = "";
    name_input.value = "";
    phone_input.value = "";

};