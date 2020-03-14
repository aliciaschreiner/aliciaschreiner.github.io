/* Footer */

var now = new Date();
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var fdate = day[now.getDay()]+", " + month[now.getMonth()] +" "+ now.getDate() + ", " + now.getFullYear();
document.getElementById("currentdate").innerHTML=fdate;

var day = new Date();
var today = day.getDay();

if(today == 5) {
	document.getElementById("popup").className = "show";
}


/* Hamburger Menu*/

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};

/* Lazy Load */

const images = document.querySelectorAll("[data-src]");

function preloadImage(img){ 
    const src = img.getAttribute("data-src");
    if (!src) { return; }
    img.src = src;
}

function removeImg(img){ 
    img.removeAttribute("data-src");
}

const ImgOptions = {
    rootMargin: "0px 0px -300px 0px" 
};

const ImgObserver = new IntersectionObserver((entries, ImgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            ImgObserver.unobserve(entry.target);
            removeImg(entry.target);
        }
    });
}, ImgOptions);

images.forEach(image => {
    ImgObserver.observe(image);
})

/* Form */

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


