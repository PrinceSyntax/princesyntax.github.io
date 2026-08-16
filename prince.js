// Typing Effect

const text = [
"Frontend Developer",
"Backend Developer",
"PHP Developer",
"Web Designer"
];

let index = 0;
let char = 0;
let typing = document.getElementById("typing");

function type(){

if(char < text[index].length){

typing.innerHTML += text[index].charAt(char);

char++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(char > 0){

typing.innerHTML = text[index].substring(0,char-1);

char--;

setTimeout(erase,50);

}

else{

index++;

if(index >= text.length){

index = 0;

}

setTimeout(type,300);

}

}

type();


// Dark Mode

const mode = document.getElementById("mode");

mode.onclick = function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

mode.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

mode.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};


// Contact Form

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Message Sent Successfully!");

this.reset();

});


// Scroll To Top Button

let topBtn = document.getElementById("top");

window.onscroll = function(){

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};


// Card Animation

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});


// Console Message

console.log("Welcome Prince Arya Portfolio Website");