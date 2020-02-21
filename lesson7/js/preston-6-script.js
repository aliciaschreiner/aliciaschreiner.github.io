var now = new Date();
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var fdate = day[now.getDay()]+", " + month[now.getMonth()] +" "+ now.getDate() + ", " + now.getFullYear();
document.getElementById("currentdate").innerHTML=fdate;


/* Hamburger Menu*/
const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};

var day = new Date();
var today = day.getDay();

if(today == 5) {
	document.getElementById("popup").className = "show";
}
