document.getElementById("ppic"). src = "myphoto.jpg"
var name = prompt("What is your name?");
document.getElementById ("fname").innerHTML = name;
var gender;
var confirmtxt = ("Press OK for F, while Cancel for M.");
if (confirm(confirmtxt) == true) {
    document.getElementById("gender").innerHTML = "F"
}
else {
    document.getElementById("gender").innerHTML = "M"
}
var usr = prompt("Kindly enter username.");
document.getElementById("username").innerHTML = usr;
var dscrp = prompt ("Describe yourself.")
document.getElementById("desc").innerHTML = dscrp
var birthyear = prompt("What year were you born?")
document.getElementById("year").innerHTML = birthyear
year = new Date().getFullYear();
var age = year - birthyear
document.getElementById("age").innerHTML = age