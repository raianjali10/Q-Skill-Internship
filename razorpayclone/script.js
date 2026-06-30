// ===========================
// FAQ ACCORDION
// ===========================

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((item) => {

    item.addEventListener("click", function () {

        this.classList.toggle("active");

        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {

            panel.style.display = "none";

        } else {

            panel.style.display = "block";

        }

    });

});


// ===========================
// TESTIMONIAL SLIDER
// ===========================

const reviews = [

{
name:"Rahul Sharma",
review:"PayEase transformed our business. Payments are now super fast."
},

{
name:"Anjali Verma",
review:"Amazing support and a beautiful dashboard."
},

{
name:"Vikas Maurya",
review:"Very easy integration. Highly recommended!"
},

{
name:"Amit Patel",
review:"Secure payment gateway with excellent performance."
}

];

let index = 0;

function changeReview(){

document.getElementById("review").innerHTML =
reviews[index].review;

document.getElementById("client").innerHTML =
"- " + reviews[index].name;

index++;

if(index==reviews.length){

index=0;

}

}

setInterval(changeReview,3000);


// ===========================
// COUNTER ANIMATION
// ===========================

const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter=>{

let target = counter.innerText;

let number = parseInt(target.replace(/\D/g,""));

let suffix = target.replace(/[0-9]/g,"");

let count = 0;

let speed = number/100;

let update=()=>{

count += speed;

if(count<number){

counter.innerText=Math.floor(count)+suffix;

requestAnimationFrame(update);

}
else{

counter.innerText=target;

}

};

update();

});


// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll("nav a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

});

});


// ===========================
// NAVBAR SHADOW
// ===========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}
else{

nav.style.boxShadow="0 2px 10px rgba(0,0,0,.08)";

}

});
// ===========================
// TOP BUTTON
// ===========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.pageYOffset>300){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ==========================
// MOBILE MENU
// ==========================

const menuBtn=document.getElementById("menuBtn");

const menu=document.getElementById("menu");

menuBtn.onclick=function(){

if(menu.style.display=="flex"){

menu.style.display="none";

}
else{

menu.style.display="flex";

}

};

// ==========================
// DARK MODE
// ==========================

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

};

// ==========================
// CONTACT FORM
// ==========================

const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let message=document.getElementById("message").value;

if(name==""||email==""||message==""){

alert("Please fill all fields.");

return;

}

alert("Message Sent Successfully!");

form.reset();

});

// ==========================
// SCROLL ANIMATION
// ==========================

const reveal=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let height=window.innerHeight;

reveal.forEach(sec=>{

let top=sec.getBoundingClientRect().top;

if(top<height-100){

sec.style.opacity=1;

sec.style.transform="translateY(0px)";

}

});

});

reveal.forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(50px)";

sec.style.transition=".8s";

});
// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.display = "none";

        }, 1500);

    }

});

// ==========================
// YEAR
// ==========================

document.getElementById("year").innerHTML=

new Date().getFullYear();