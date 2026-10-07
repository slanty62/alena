function showMessage(){


const message=document.getElementById("message");



message.innerHTML=

"Алёна 🖤<br><br>"+

"Мне просто хотелось сделать "+
"что-то красивое специально для тебя.<br><br>"+

"Иногда не нужны большие слова. "+
"Достаточно человека, который делает "+
"обычные дни немного лучше.";




message.style.opacity="0";



setTimeout(()=>{


message.style.transition="2s";

message.style.opacity="1";


},100);



}




function reveal(){


const elements=document.querySelectorAll(".reveal");



elements.forEach(element=>{


const position=
element.getBoundingClientRect().top;



if(position < window.innerHeight-100){


element.classList.add("active");


}



});



}




window.addEventListener(
"scroll",
reveal
);



reveal();
